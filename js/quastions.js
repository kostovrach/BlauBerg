$(document).ready(function() {
    $('.quastions__subtitle').click(function(event) {
        if($('.quastions__answers-wrapper').hasClass('one')){
            $('.quastions__subtitle').not($(this)).removeClass('activeQuastion');
            $('.quastions__text').not($(this).next()).slideUp(350);
        }
        $(this).toggleClass('activeQuastion').next().slideToggle(350);
    });
});