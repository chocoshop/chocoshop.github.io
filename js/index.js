$('#ToWhite').on('click',function(e) {
    $('.whiteMode').show();
    $('.darkMode').hide();
});

$('#ToBlack').on('click',function(e) {
    $('.darkMode').css({
        "display": "flex"
    });
    $('.whiteMode').hide();
})
