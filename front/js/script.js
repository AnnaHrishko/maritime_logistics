$('.services-tab').click(function(){
    $(this).toggleClass('active')
    $('.services-tab').not(this).removeClass('active')
    return false;
})

$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");
});

$(function() {
    $.validator.addMethod("phoneRegex", function(value, element) {
        return this.optional(element) || /^(?:0|\+?44)(?:\d\s?){9,10}$/;
    }, "");
});

jQuery(function($){
    $.mask.definitions['~']='[+-]';
    $(".tel").mask("+44 999 999 99 99",{placeholder:""}, {autoclear: true});
 });

$(function() {
    $(".form-contact").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
            "phone": {
                required: true,
                // number: true,
                phoneRegex: true,
                // minlength: 16,
            },
        },
        messages: {
            "email": {
                required: "Required field",
                emailRegex: "Please, enter valid email address",
            },
            "phone": {
                required: "Required field",
                // number: "Enter only number",
                phoneRegex: "Enter valid phone number",
                // minlenght: "Enter full phone number",
            },
        },
    });
});

const swiper = new Swiper(".statistics-wrap.mobile", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

});