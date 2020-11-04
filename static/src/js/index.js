require(["jquery","head","md","swiper"],function($,head,md,swiper){
    var carouselLeft = new Swiper('#carousel-left', {
        noSwiping : true,
        autoplay : 4000,
        loop:true,
        pagination: '.swiper-pagination',
        paginationClickable :true
    });

    var carouselLight = new Swiper('#carousel-right', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 3,
        autoplay: 3000,
        onProgress: function(swiper, progress) {
            console.log(swiper.slides.length);
            for (i = 0; i < swiper.slides.length; i++) {
                var slide = swiper.slides.eq(i);
                var slideProgress = swiper.slides[i].progress;
                modify = 1;
                if (Math.abs(slideProgress) > 1) {
                    modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                }
                translate = slideProgress * modify * 220 + 'px';
                scale = 1 - Math.abs(slideProgress) / 5;
                zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                slide.css('zIndex', zIndex);
                slide.css('opacity', 1);
                // swiper.slides.eq(0).css("display","none");
                if (Math.abs(slideProgress) > 3) {
                    slide.css('opacity', 0);
                }
            }
        },
        onSetTransition: function(swiper, transition) {
            for (var i = 0; i < swiper.slides.length; i++) {
                var slide = swiper.slides.eq(i)
                slide.transition(transition);
            }
        }
    })

});


// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1.5, //设置slider容器能够同时显示的slides数量(carousel模式)。
//     spaceBetween: -180, //在slide之间设置距离（单位px）。
//     centeredSlides: true, //设置活动块居中
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     autoplay: {
//         stopOnLastSlide: true,
//         delay: 5000
//     },
// });
// $('.swiper-container').mouseenter(function() {
//     $('.swiper-button-next').css('display', 'block')
//     $('.swiper-button-prev').css('display', 'block')
//
// }).mouseleave(function() {
//     $('.swiper-button-next').css('display', 'none')
//     $('.swiper-button-prev').css('display', 'none')
// })
