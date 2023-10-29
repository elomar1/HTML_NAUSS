//$( ".breadcrumbCum a:contains('الرئيسية')" ).html("<img src='/Style Library/ar-sa/Styles/images/shared/breadcrumbHome.svg' alt='' />");

// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("scroll", function () {
//     //  console.log(window.scrollY,window.scrollX)
//     if (window.scrollY > 50) {
//       document.querySelector(".menuBg").classList.add("fixedTop");
//       // add padding top to show content behind navbar
//       // navbar_height = document.querySelector('.navbar').offsetHeight;
//       // document.body.style.paddingTop = navbar_height + 'px';a
//     } else {
//       document.querySelector(".menuBg").classList.remove("fixedTop");
//       // remove padding top from body
//       // document.body.style.paddingTop = '0';
//     }
//   });
// });

 
$(document).ready(function () {


  var homeBanner = new Swiper(".homeBanner", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiperNewsFullBn = new Swiper(".swiperNewsFullBn", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper25 = new Swiper(".swiper-twoHome", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,
    // Responsive breakpoints
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let swiper5 = new Swiper(".swip5Items", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
      },
      1300: {
        slidesPerView: 5,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let swiper4 = new Swiper(".swip4Items", {
    slidesPerView: 4,
    spaceBetween: 22,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      1000: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1300: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let swiperEvent = new Swiper(".swiperEvents", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let partnersSlider = new Swiper(".partnersSlider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let nashrSlider = new Swiper(".NashrSlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,

 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  let resultEdu = new Swiper(".resultEdu", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let historyOf = new Swiper(".historyOf", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let swipNewsBanner = new Swiper(".swipNewsBanner", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); 
  $(".fancyboxImgVid").fancybox({
    openEffect: 'none',
    closeEffect: 'none',
    nextEffect: 'none',
    prevEffect: 'none',
    padding: 0,
    width: "90%",
    height: "90%",
      helpers: {
    overlay: {
      locked: false
    }
  }
    // margin: [20, 0, 20, 0]
  });
  $("a.fancyboxVideo").fancybox({
    // openEffect	: 'none',
    // closeEffect	: 'none'
    type: "iframe",
    width: "90%",
    height: "90%",
    autoSize : false,
    youtube: {
      autoplay: 1, // enable autoplay
    },
      helpers: {
    overlay: {
      locked: false
    }
  }
  });
  $("a.fancyboxImg").fancybox({
    helpers: {
    overlay: {
      locked: false
    }
  }
    // openEffect	: 'none',
    // closeEffect	: 'none'
});
  var SwiperThum2 = new Swiper(".SwiperThum", {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2555 = new Swiper(".SwiperGallery", {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: SwiperThum2,
    },
  });
  // start paly video
  $(".videoPlay").click(function (e) {
    e.preventDefault();
    $(this)
      .addClass("playVideo")
      .next()
      .trigger("play")
      .on("ended", function () {
        $(this).prev().removeClass("playVideo");
      });
  });
  $(".videoPlayBox").click(function (e) {
    e.preventDefault();
    $(this).addClass("PLsmBox").next().trigger("play").attr("controls", "");
  });

  var mySwiperThumb = new Swiper(".swiper-twoHome2", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var mySwiper2 = new Swiper(".homeBanner2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: mySwiperThumb,
    },
  });

  let counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

  let $counters = $(".counter");

  /* Start counting, do this on DOM ready or with Waypoints. */
  $counters.each(function (ignore, counter) {
    let waypoint = new Waypoint({
      element: $(this),
      handler: function () {
        counterUp(counter, {
          duration: 2000,
          delay: 10,
        });
        // this.destroy();
      },
      offset: "bottom-in-view",
    });
  });

  var swiperTrainingThumb = new Swiper(".swiperTrainingThumb", {
    loop: false,
    spaceBetween: 30,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".swiperTraining", {
    loop: false,
    spaceBetween: 10,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    thumbs: {
      swiper: swiperTrainingThumb,
    },
  });

  var EventDetailsThumb = new Swiper(".EventDetailsThumb", {
    spaceBetween: 25,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      // when window width is >= 320px
      100: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      // when window width is >= 480px
      700: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
  var swiper2 = new Swiper(".EventDetailsMain", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: EventDetailsThumb,
    },
  });


  // $(".swiper-twoHome,.swiperTraining").hover
  $(".swiper-twoHome").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );
  $(".scrolingUp").on('click', function() {
    $('html, body').animate({
      scrollTop: $('html, body').offset().top,
    });
  });


        var swiperInnerPage = new Swiper(".innerPageFull", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });


  // AOS.init({
  //   duration: 1000,
  // });

  /** ---------------------- end read Fun -------------------- **/
});
$('button.navbar-toggler').click(function(){
 $('.customMenu ').toggleClass('menuIsOpen')
});

$(window).on('load',function(){
    $(".loader-container").fadeOut();
});

// color func
$(".change-colors").on("click", function (e) {
  $("body").toggleClass("contrast");

  e.stopPropagation();
 
});



  /* --- Font sizing Function --- */
  $('#increaseFont').click(function(){
    modifyFontSize('html','increase');
  });
  $('#decreaseFont').click(function(){
    modifyFontSize('html','decrease')
  });


  function modifyFontSize(MyElement,flag){

    var HtmlElement = $(MyElement);
    var currentFontSize = parseInt (HtmlElement.css('font-size'));
    
    if (flag =='increase' & currentFontSize < 13 )
        currentFontSize += 1;
    else if (flag == 'decrease' & currentFontSize >= 11 )
        currentFontSize -= 1;
    else if (flag == 'reset')
    currentFontSize = 10;

    HtmlElement.css('font-size', currentFontSize);

    // console.log(currentFontSize);

  }
 


$(".compSection .col-md-4.col-lg-3").on({
  mouseenter: function () {
    $(this).prev().addClass('toHover')
  },
  mouseleave: function () {
    $(this).prev().removeClass('toHover')
  }
});



  if( $('#suiteBarDelta').length ) {
      $('.bannerHome').addClass('editBarExists')
        $('.changeStyleMenu').addClass('suiteBarDeltaHeight')
  }




  $(document).ready(function() {
    if ($(window).width() < 992) {
      $('.customMenu .megamenu-li > a').click(function(e){
        e.preventDefault()
       $(this).toggleClass('openedMega').parent().siblings().find('.openedMega').removeClass('openedMega')
     })
    
    }


    if ($(window).width() < 992)  {
      if( $('.organizationalStructure').length ) {
        $('.organizationalStructure .scroller').animate({
          scrollLeft: -280
      }, 500,);
      }
    }
});



$(document).ready(function() {
  /*
      ** you have edit on (fixedTop) 
  */
  $( ".openSeachMenu" ).click(function() {
    $(".searchInputMenu").animate({width:'toggle'}, 350, function() {
        $(".SearchButton2").animate({opacity:1});
	  	$("#txtSearch").focus();
    });

}); 


// $('.leaveHover').on('mouseleave', function(e) {
//   $('.hoveredA').removeClass('hoveredA');
// });


  $('.dmenu .dropdown-toggle').on('mouseenter', function(e) {
    let target = $(e.target).attr('data-sublinks')
    $(this).parent().addClass('hoveredA').siblings().removeClass('hoveredA')
    $('.subLinksMenu').slideDown().children(target).addClass('disFlexEl').siblings().removeClass('disFlexEl')
      
  });

  $('.leaveHover').on('mouseenter', function(e) {
    e.stopPropagation();
    $(this).parent().addClass('hoveredA').siblings().removeClass('hoveredA')
    $('.subLinksMenu').slideUp()
  });
  

    $('.menuBg').on('mouseleave', function(e) {
      $('.subLinksMenu').slideUp()
      $('.hoveredA').removeClass('hoveredA');
     
    });



  var mySwiperThumbV2 = new Swiper(".swiper-twoHome2V2", {
    loop: false,
    spaceBetween: 0, 
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      // when window width is >= 320px
      100: {
        slidesPerView: 2,

      },
      // when window width is >= 480px
      700: {
        slidesPerView: 2,
 
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 3,
   
      },
      1200: {
        slidesPerView: 4,
      
      },
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
  var homeBanner2V2 = new Swiper(".homeBanner2V2", {
    
    loop: false,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },
    thumbs: {
      swiper: mySwiperThumbV2,
    },
  });

  $('.swiper-twoHome2V2 .swiper-slide').on('mouseenter', function() {
    let index = $(this).index();
     homeBanner2V2.slideTo(index);
  });
  $('.swiper-twoHome2V2 .swiper-slide').on('mouseleave', function() {
    let index = $(this).index();
     homeBanner2V2.slideTo(0);
  });



  $(".plusMin").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("minHid");
    $('.hideSection').slideToggle()
  });
    $('.cardVideoHover').mouseenter(function() {
      // this.play()
      $(this).children('video').get(0).play()
      console.log('in');
    })
    $('.cardVideoHover').mouseleave(function() {
      $(this).children('video').get(0).pause()
      console.log('leave');
    })

if( $('.swiperWamda').length ) {
   var swiperWamda = new Swiper(".swiperWamda", {
            autoplay: {
            delay: 4000, 
            },
          pagination: {
            el: ".swiper-pagination",
          clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            }
        });
}

    $(".actionMap a").click(function (e) {
      e.preventDefault();
      const nameOfEvent = $(this).attr("date-actionMapAmun")
      $(this).parents('.mapAlumni').children().children('.pinsAlum ').attr( 'class' , `pinsAlum ${nameOfEvent}` )
      $(this).addClass(`activeMap`).siblings().removeClass(`activeMap`)
    });




            var swiper000 = new Swiper(".myBadgesSwiper", {
            spaceBetween: 20,
            slidesPerView: "1",
                        loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
            // slidesPerGroup: 2,
            // pagination: {
            //     // el: ".swiper-pagination",
            //     // clickable: true,
            // },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
            });



            var swiper0000 = new Swiper(".hisWordSwiper", {
            spaceBetween: 20,
            slidesPerView: "1",
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                },
                navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                },
            effect: 'fade',
            });





});

$(window).on('load',function(){
    $(".loader").fadeOut();
});


