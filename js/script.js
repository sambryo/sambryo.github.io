//toremove the loader
$(window).on("load", function(){
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });
});

$(document).ready(function(){
     $('#slides').superslides({
         animation: 'fade',
         play: 5000,
         pagination: false
     });
     $(".items").isotope({
         filter: '*',
         animationOption: {
             duration: 1500,
             easing: 'linear',
             queue: false
         }
     })


     const typed = new Typed(".typed", {
         strings: ["Software Engineer.", "Web Developer.", "UC Berkeley Alumni."],
         typeSpeed: 90,
         loop: true,
         startDelay: 1000,
         showCursor: false
     });


$('.owl-carousel').owlCarousel({
    loop:true,
    items:4,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

        // start animation when the scroll bar the at the pie-chart
        // offset method posion for horizontal and vertical
        let skillsTopOffset = $(".skillsSection").offset().top;
        let statsTopOffset = $(".statsSection").offset().top;
        let countUpFinished = false;
        //console.log(window.pageYOffset);
        $(window).scroll(function(){
            if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
                $('.chart').easyPieChart({
                            //your options goes here
                            easing: 'easeInOut',
                            trackColor: false,
                            scaleColor: false,
                            lineWidth: 4,
                            size: 152,
                            onStep: function(from, to, percent){
                                $(this.el).find('.percent').text(Math.round(percent));
                            }
                        });
            }

            if(!countUpFinished && window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
                $(".counter").each(function(){
                    let element = $(this);
                    let endVal = parseInt(element.text());

                    element.countup(endVal)
                })
                countUpFinished = true;
            }
        });

        $("[data-fancybox]").fancybox();

        $("#filters a").click(function(){
            $('#filters .current').removeClass("current");
            $(this).addClass("current"); // this refers the current button clicked

            let selector = $(this).attr("data-filter");
            $(".items").isotope({
                filter: selector,
                animationOption: {
                    duration: 1500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
        // smooth transition for navbar
        $("#navigation li a").click(function(e){
            e.preventDefault();

            let targetElement = $(this).attr("href") // this - anchor tag
            //console.log(targetElement)
            let targetPosition = $(targetElement).offset().top // targetElement -> jqueryObject
            // 50 is a little bit ofset on the margin
            //console.log(targetPosition)
            $("html, body").animate({ scrollTop: targetPosition - 25 }, "slow");
            // 50 is a little bit ofset on the margin
        });

        const nav = $("#navigation");
        const navTop = nav.offset().top;

        $(window).on("scroll", stickyNavigation);

        function stickyNavigation(){

            let body = $("body");

            if($(window).scrollTop() >= navTop){
                body.css("padding-top", nav.outerHeight() + "px");
                body.addClass("fixedNav");
            }else{
                body.css("padding-top", 0);
                body.removeClass("fixedNav");
            }
        }

});
