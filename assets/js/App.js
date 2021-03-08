barba.init({
    views: [{
        namespace: 'home',
        beforeEnter(data) {

            // sidemenu
            $('.nav-box').click(function(){
                $('.sidmenu').css({
                    right: '0',
                    transition: '0.3s'
                });
                $('.shimmer').css({
                    visibility: 'visible',
                    opacity: '1',
                    transition: '0.3s'
                });
            });
            $('.shimmer').click(function(){
                $('.sidmenu').css({
                    right: '-100%',
                    transition: '0.5s'
                });
                $('.shimmer').css({
                    visibility: 'hidden',
                    opacity: '1',
                    transition: '0.3s'
                });
                $('.popup-form').css({
                    right: '-100%',
                    transition: '0.3s'
                });
            });
            $('.sidemenu-body ul li a').click(function(){
                $('.sidmenu').css({
                    right: '-100%',
                    transition: '0.5s'
                });
                $('.shimmer').css({
                    visibility: 'hidden',
                    opacity: '1',
                    transition: '0.3s'
                });
            });

            // Add active class to the current button (highlight it)
            var header = document.getElementById("myDIV");
            var btns = header.getElementsByClassName("btn");
            for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("sidmenu-active");
            current[0].className = current[0].className.replace(" sidmenu-active", "");
            this.className += " sidmenu-active";
            });
            }



            // popupform
            $('.nav-book-btn .book-btn, .banner-book-btn, .offer-book-btn a, .homestay-details .book-btn a').click(function(){
                $('.popup-form').css({
                    right: '20px',
                    transition: '0.3s'
                });
                $('.shimmer').css({
                    visibility: 'visible',
                    opacity: '1',
                    transition: '0.3s'
                });
            });
            $('.popup-form .close').click(function(){
                $('.popup-form').css({
                    right: '-100%',
                    transition: '0.3s'
                });
                $('.shimmer').css({
                    visibility: 'hidden',
                    opacity: '1',
                    transition: '0.3s'
                });
            });


           
            //  start-smooth-scrolling 

            jQuery(document).ready(function ($) {
                $(".scroll").click(function (event) {
                    event.preventDefault();
                    $('html,body').animate({
                        scrollTop: $(this.hash).offset().top
                    }, 1000);
                });
            });

            // ends-smooth-scrolling


            // nav scroll
            $(window).on('scroll', () => {
                if ($(window).scrollTop() > 400) {
                    $('nav').css({
                  //     background: '#76B51B',
                         background: 'white',

                        transition: "0.5s"
                    });
                }
                else{
                    $('nav').css({
                        background: 'white',
                        transition: "0.5s"
                    });
                }
            });


            /* PARALLAX EFFECT  */

            $(window).scroll(function () {

                var scrollTop = $(window).scrollTop();

                var paralasicValue = $('#index-banner').attr('data-paralasic');

                $('#index-banner').css('background-position', 'center bottom -' + scrollTop * paralasicValue +
                    'px'); /* 1.8 - default value. Increase less to go stopping the effect */

            });


            // rellax animation
            var rellax = new Rellax('.rellax');
            //  start-smooth-scrolling 

            jQuery(document).ready(function ($) {
                $(".banner-down").click(function (event) {
                    event.preventDefault();
                    $('html,body').animate({
                        scrollTop: $(this.hash).offset().top
                    }, 1000);
                });
            });


            // scroll btn
            $('.scorll-btn, .nav-link ul li a, .footer-column2 a, .sidemenu-body ul li a').click(function (e) {
                e.preventDefault();
                var target = $($(this).attr('href'));
                if (target.length) {
                    var scrollTo = target.offset().top;
                    $('body, html').animate({
                        scrollTop: scrollTo + 'px'
                    }, 800);
                }
            });


            //  offer
            $('.offer-main').owlCarousel({
                margin: 50,
                loop: true,
                autoplayHoverPause: true,
                autoplay: true,
                autoplayTimeout: 3500,
                smartSpeed: 850,
                fluidSpeed: 500,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true,
                    },
                    600: {
                        items: 1,
                        nav: true,
                    },
                    1024: {
                        items: 2,
                        nav: true,
                    },
                    1440: {
                        items: 2,
                        nav: true,
                    },
                    2560: {
                        items: 2,
                        nav: true,
                    }
                }
            });

            //Trending Offers
            $('.trending-Packages').owlCarousel({
                margin: 120,
                loop: true,
                autoplayHoverPause: true,
                autoplay: true,
                autoplayTimeout: 3500,
                smartSpeed: 850,
                fluidSpeed: 500,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1.3,
                        nav: true,
                        margin: 10,
                    },
                    480: {
                        items: 1.3,
                        nav: true,
                        margin: 10,
                    },
                    768: {
                        items: 1.3,
                        nav: true,
                    },
                    1024: {
                        items:3,
                        nav: true,
                    },
                    1440: {
                        items: 3,
                        nav: true,
                    },
                    2560: {
                        items: 3,
                        nav: true,
                    }
                }
            });
        }
    }, ],
});



