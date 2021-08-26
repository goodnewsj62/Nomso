$(function(){
    $('#email-us').click(function(){
        $('.cform').fadeToggle();
        $('.shadow').toggle();
    });

    $('.toggle-mail').each(function(){
        $(this).click(function(){
            $('.cform').fadeToggle();
            $('.shadow').toggle();
        });
    });
});

