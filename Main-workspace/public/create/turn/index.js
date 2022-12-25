$(document).ready(function () {
    var timeaccess =  document.getElementById('timeaccess');
    $.post('/admin/getdata', {}, function (data) {
        //console.log(data.flag.Flagcheck);
        if (data.flag.Flagcheck==false) {
            document.getElementById('imagecheck').src = '../../img/layout1.png';
            timeaccess.innerHTML ="Undefined";
        }
        else{
            document.getElementById('imagecheck').src = data.list.urlimg;
            console.log(data.list.urlimg);
            if(!data.list.Status && data.flag.Flagcheck==true){
                timeaccess.innerHTML =moment(data.list.CreateAt).format("lll");
                console.log(data.list.CreateAt);
            }
            else{
                    // Hơi thừa vì nếu là người quen thì ko flag check
                if(data.list.Status && data.flag.Flagcheck==true){
                    $.post('/admin/getinfo', function (data2) {
                        //console.log(data2);
                        timeaccess.innerHTML =moment(data.list.CreateAt).format("lll");
                    });
                }
            }
        }
        $('#buttoncheck').click(function(e){
            $('#confirmPersonModal').modal('show');
        })
        $('#buttoncheck1').click(function(e){
            $('#refusePersonModal').modal('show');
        })
    });
    
});