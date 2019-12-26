$(function() {
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

    $(".header__menu").on('click', function () {
        $(".header__popup").removeClass("hidden")});
    $(".header__popup_menu, .header__popup_links-link").on('click', function () {
        $(".header__popup").addClass("hidden")});

    $(".header__phone, .header__cellphone, .questions__button button, .how__button button, .selection__items__item-buttons-get, .selection__popup_button-get").on('click', function () {
        $(".header__popup2").removeClass("hidden");
        $(".header__overlay").removeClass("hidden")});
    $(".header__overlay, .header__popup2_menu, .header__popup2_form-button").on("click", function () {
        $(".header__popup2").addClass("hidden");
        $(".header__overlay").addClass("hidden")});

    $(".scroll__bar input").on("change input", function () {
        $(".calc__subtitle-number").text(this.value)
    });




    $(".selection__items__item-buttons-all").on('click', function () {
        $(".selection__popup").removeClass("hidden");
        $(".header__overlay").removeClass("hidden")});
    $(".header__overlay, .selection__popup_close, .selection__popup_button-get").on("click", function () {
        $(".selection__popup").addClass("hidden");
        $(".header__overlay").addClass("hidden")});





    $(".calc__buttons-next").on("click", next);
    $(".calc__buttons-prev").on("click", prev);
    let calcFrame = 0;
    $(".calc__buttons-prev").hide();
    let frame = $(".calc_frame");

    function next(){
        frame.eq(calcFrame).addClass("hidden");
        calcFrame++;
        frame.eq(calcFrame).removeClass("hidden");
        $(".calc__progress_item"+ (calcFrame+1)).css({
            "background": "#15A94E", "border": "1px solid #D9D9DE"});

        if(calcFrame === frame.length - 1){
            $(".calc__buttons, .calc__title, .calc__hiddentitle, .calc__progress").hide();
        }
        if(calcFrame < frame.length - 2){
            $(".calc__progress_item"+ (calcFrame+1)).removeClass("notdone");
            $(".calc__progress_item"+ (calcFrame+1)).addClass("done");
        }
        $(".calc__buttons-prev").show();
    }
    function prev(){
        frame.eq(calcFrame).addClass("hidden");
        $(".calc__progress_item"+ (calcFrame+1)).removeAttr('style');
        if(calcFrame < frame.length - 2){
        $(".calc__progress_item"+ (calcFrame+1)).removeClass("done");
        $(".calc__progress_item"+ (calcFrame+1)).addClass("notdone");
        }
        calcFrame--;
        frame.eq(calcFrame).removeClass("hidden");




        if(calcFrame === 0){
            $(".calc__buttons-prev").hide();
        }
        $(".calc__buttons-next").show();

    }
















    let date = new Date();
    let enddate = new Date(date.getFullYear()+1, 0, 1);
    setInterval(timer, 1000);
    function timer() {
        let now = new Date();
        let delta = (enddate - now) / 1000;
        let days = Math.floor(delta / 86400);
        delta -= days * 86400;
        let hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        let minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        let seconds = Math.floor(delta % 60);
        $(".consultation__time_timer-day span").text(days);
        $(".consultation__time_timer-hour span").text(hours);
        $(".consultation__time_timer-min span").text(minutes);
        $(".consultation__time_timer-second span").html(seconds);
    }

    $(".consultation__sale_year-title span").text(date.getFullYear());



    let slider1 = $('.selection__items');
    let sliderbar1 = $('.scroll__bar-selections');
    let slidernumber1 = $(".selection__subtitle-number");

    sliderbar1.on('change',function(){
        if(this.value <=5) {
            slider1.slick('slickGoTo',0);
        }
        else if(this.value ==10){
            slider1.slick('slickGoTo',1);
        }
        else if(this.value == 15 || this.value == 20){
            slider1.slick('slickGoTo',2);
        }
        else if(this.value >=25){
            slider1.slick('slickGoTo',3);
        }

    });

    slider1.on('afterChange',function(e, slick, currentSlide){
        if(currentSlide === 0){
            sliderbar1.val(5);
            slidernumber1.text(5);
        }
        else if(currentSlide === 1){
            sliderbar1.val(10);
            slidernumber1.text(10);
        }
        else if(currentSlide === 2){
            sliderbar1.val(20);
            slidernumber1.text(20);
        }
        else if(currentSlide === 3){
            sliderbar1.val(25);
            slidernumber1.text(25);
        }
    });

    slider1.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.news__items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    });
});
