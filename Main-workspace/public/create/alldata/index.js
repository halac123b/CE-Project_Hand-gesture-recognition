$(".btn-search").click(function (e) {

    var url = $(this).data("url");
    console.log(url);
    $('.dataimg').attr("src", url);
    $('#HistoryStudentModal').modal('show');
})
