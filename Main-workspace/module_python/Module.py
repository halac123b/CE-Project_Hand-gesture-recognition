from pymongo import MongoClient
from email.mime.text import MIMEText
from datetime import datetime
import threading
import os, glob
import smtplib, ssl

"""
Using Mongodb to store Data:
Our DB named "handRecognition" has  Collections:
    + Turn:     store come in history.
    + Flag:     store flag of detection.
    + User:    account data of admin, home owner
"""
# Connect to database system
cluster = MongoClient(
    "mongodb+srv://halac123b:hapass2a@cluster0.lieodwt.mongodb.net/?retryWrites=true&w=majority"
)
# Link to database
database = cluster["handRecognition"]
# Link to collections
turns = database["turns"]
flags = database["flags"]

class Mongo:
    # Update the first item in collection: Flagcheck -> true
    def updateFlag(self):
        f = flags.find_one()
        newFlag = {"$set": {"Flagcheck": True}}
        flags.update_one(f, newFlag)

    def clearTurn(self):
        turns.delete_many({})
        return "delete all turns"

##########################################################################################
    # Add turn history to database
class Control:
    def addTurn(self, imgUrl, __v, Status=True, Response=False):
        timeEvent = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        newTurn = {
            "urlimg": imgUrl,
            "Status": Status,
            "createAt": timeEvent,
            "__v": __v,
            "Response": Response,
        }
        turns.insert_one(newTurn)

    def getImageUrl(self):
        files = glob.glob("..\public\img\*.png")
        imgName = max(files, key=os.path.getctime)
        imgUrl = "../../img/" + imgName[14::]
        return str(imgUrl)
        
###################################################
"""
    This module used to send email automatic via email-bot chat named "doorlock.bot",
    
    Email: doorlock.bot@gmail.com
    Password: datkll211
"""

def sendMail():
    port = 465
    sender = "halac123code@gmail.com"
    password = "khyprsygyoluajnc"

    """Type your email"""
    recieve = "halac123b@gmail.com"

    time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    msg = MIMEText(
        """\
    <pre>
        Dear Mr.Duy Ha,

        Detect a stranger who wants to enter your home. 
        Time: {0}.

        <a href={1}>Click here</a> for more infomation.

        Hometown.
    </pre>. 

    """.format(
            time, "http://localhost:3000/home"
        ),
        "html",
    )

    context = ssl.create_default_context()

    print("Starting to send")
    with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
        server.login(sender, password)
        server.sendmail(sender, recieve, str(msg))

    print("sent email!")

######################################################################################################

timerCounter, response = 300, False

# Response from admin page
def getResponse(turnId):
    global timerCounter, response
    response = flags.find_one({})["Response"]
    if (response == True):
        print("door opened")
        timerCounter = 300
        f = flags.find_one()
        newResponse = {"$set": {"Response": False}}
        flags.update_one(f, newResponse)
        for eachTurn in turns.find():
            if str(eachTurn["_id"]) == turnId:
                newResponse = {"$set": {"Response": True}}
                turns.update_one(eachTurn, newResponse)
                turnId = ""
                break
        return True
    elif timerCounter < 0 or flags.find_one({})["Flagcheck"] == False:
        print("door closed")
        timerCounter = 300
        return False
    else:
        timerCounter -= 1
    threading.Timer(1, getResponse, args=(turnId,)).start()

