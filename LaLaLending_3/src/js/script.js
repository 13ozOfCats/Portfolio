$(function() {
    $(".menu__popup").hide();
    $(".selection__items").hide();
    $(".selection").html($(".selection__item").eq(0).clone()).append("<img src='./img/arrow_icon.svg 'alt='>' class='arrow'>");
    calc();

    $('.th__input, .day__input').keydown(function(e){
        e.preventDefault()
    });
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

    $(".menu").click(function () {
        $(".menu__popup").show();
    });
    $(".cross, .menu__link").click(function () {
        $(".menu__popup").hide();
    });




    $(".th").on("change, input", function () {
        $(".th__input").val(this.value)
        calc();
    });
    $(".day").on("change, input", function () {
        $(".day__input").val(this.value)
        calc();
    });



    $(".selection").on("click", function () {
        $(".selection__items").show();
        calc();
        $(".selection").html("");
    });

    $(".selection__item").on("click", function () {
        $(".selection__items").hide();
        $(".selection").html($(this).clone()).append("<img src='./img/arrow_icon.svg 'alt='>' class='arrow'>");
        calc();
    });

    function calc(){
        $(".calc__currency").text($(".selection .selection__item").data('value'));
        $(".calc__cost").text($(".th").val() * $(".day").val() );
        $(".span__currency").text($(".selection .selection__item").data('value'));
        console.log($(".selection .selection__item").data('price'));
        $(".calc__cryptocurrency").text(($(".th").val() * $(".day").val() * $(".selection .selection__item").data('price')).toFixed(2));
    }

    $(".faq__item").on("click", function () {
        $(this).children(".faq__answer").toggleClass("hidden");
        $(this).children(".faq__question").toggleClass("faq__question-open");
    });


    $(".advantages ").slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        infinite: false,
        arrows: false,
        dots: false,
        variableWidth: true,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings:  "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $(".vs__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: false,
        mobileFirst: true,
        variableWidth: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 660,
                settings: "unslick"
            }
        ]
    });

});
