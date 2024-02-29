$(document).ready(function() {
    $('.services-tab').click(function() {
        $('.services-tab').not(this).find('.services-tab__content').slideUp()
        $(this).find('.services-tab__content').slideToggle().css('display', 'flex');
        return false;
    });


    $.validator.addMethod("emailRegex", function(value, element) {
            return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");



    $.validator.addMethod("phoneRegex", function(value, element) {
            return this.optional(element) || /^(?:0|\+?44)(?:\d\s?){9,10}$/;
    }, "");


    $.mask.definitions['~']='[+-]';
    $(".tel").mask("+44 999 999 99 99",{placeholder:""}, {autoclear: true});


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




    //height for main section
    let windowHeight = $(window).height();
    $('.main-section').css('min-height', windowHeight + 'px');
    $(window).resize(function(){
        let newWindowHeight = $(window).height();
        $('.main-section').css('min-height', newWindowHeight + 'px');
    });


    // let windowHeight = $(window).height();
    // let contentHeight = $('.main-section').outerheight(true);
    
    // if (contentHeight > windowHeight) {
    //     $('.main-section').css('height', 'auto');
    // } else {
    //     $('.main-section').css('min-height', windowHeight + 'px');
    // }
    
    // $(window).resize(function(){
    //     let newWindowHeight = $(window).height();
    //     let newContentHeight = $('.main-section').height();
        
    //     if (newContentHeight > newWindowHeight) {
    //         $('.main-section').css('height', 'auto');
    //     } else {
    //         $('.main-section').css('min-height', newWindowHeight + 'px');
    //     }
    // });
       
});