var _____WB$wombat$assign$function_____ = function (name) {
  return (
    (self._wb_wombat &&
      self._wb_wombat.local_init &&
      self._wb_wombat.local_init(name)) ||
    self[name]
  );
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
    this.__WB_source = obj;
    return this;
  };
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  /************************************************************************************ PAGE ANIMATED ITEMS STARTS */

  jQuery(document).ready(function ($) {
    "use strict";

    $(".animated").appear(function () {
      var elem = $(this);
      var animation = elem.data("animation");
      if (!elem.hasClass("visible")) {
        var animationDelay = elem.data("animation-delay");
        if (animationDelay) {
          setTimeout(function () {
            elem.addClass(animation + " visible");
          }, animationDelay);
        } else {
          elem.addClass(animation + " visible");
        }
      }
    });
  });

  /************************************************************************************ PRELOADER STARTS */

  jQuery(window).load(function () {
    $("#preloader").fadeOut("slow");
  });

  /************************************************************************************ MY PIC CAROUSEL STARTS */

  $(document).ready(function () {
    //Sort random function

    function random(owlSelector) {
      owlSelector
        .children()
        .sort(function () {
          return Math.round(Math.random()) - 0.5;
        })
        .each(function () {
          $(this).appendTo(owlSelector);
        });
    }

    $("#my-pic-carousel").owlCarousel({
      autoPlay: 5000,
      slideSpeed: 500,
      items: 1,
      itemsDesktop: [1199, 1],
      itemsDesktopSmall: [979, 1],
      itemsTablet: [768, 1],
      itemsMobile: [479, 1],
      autoHeight: true,
      pagination: false,
      navigation: true,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      //Call beforeInit callback, elem parameter point to $("#our-team")
      /* beforeInit: function (elem) {
            random(elem);
        }*/
    });
  });

  /************************************************************************************ MY SKILLS CAROUSEL STARTS */

  $(document).ready(function () {
    //Sort random function

    function random(owlSelector) {
      owlSelector
        .children()
        .sort(function () {
          return Math.round(Math.random()) - 0.5;
        })
        .each(function () {
          $(this).appendTo(owlSelector);
        });
    }

    $("#myskills-carousel").owlCarousel({
      autoPlay: 5000,
      slideSpeed: 500,
      items: 5,
      itemsDesktop: [1199, 5],
      itemsDesktopSmall: [979, 4],
      itemsTablet: [768, 2],
      itemsMobile: [479, 1],
      autoHeight: true,
      pagination: true,
      navigation: false,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      //Call beforeInit callback, elem parameter point to $("#our-team")
      /* beforeInit: function (elem) {
            random(elem);
        }*/
    });
  });

  /************************************************************************************ MY SERVICES CAROUSEL STARTS */

  $(document).ready(function () {
    //Sort random function

    function random(owlSelector) {
      owlSelector
        .children()
        .sort(function () {
          return Math.round(Math.random()) - 0.5;
        })
        .each(function () {
          $(this).appendTo(owlSelector);
        });
    }

    $("#services-carousel").owlCarousel({
      autoPlay: 5000,
      slideSpeed: 500,
      items: 4,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3],
      itemsTablet: [768, 2],
      itemsMobile: [479, 1],
      autoHeight: true,
      pagination: true,
      navigation: false,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      //Call beforeInit callback, elem parameter point to $("#our-team")
      /* beforeInit: function (elem) {
            random(elem);
        }*/
    });
  });

  /************************************************************************************ AWARDS CAROUSEL STARTS */

  $(document).ready(function () {
    //Sort random function

    function random(owlSelector) {
      owlSelector
        .children()
        .sort(function () {
          return Math.round(Math.random()) - 0.5;
        })
        .each(function () {
          $(this).appendTo(owlSelector);
        });
    }

    $("#awards-carousel").owlCarousel({
      autoPlay: 5000,
      slideSpeed: 500,
      items: 4,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3],
      itemsTablet: [768, 2],
      itemsMobile: [479, 1],
      autoHeight: true,
      pagination: true,
      navigation: false,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      //Call beforeInit callback, elem parameter point to $("#our-team")
      /* beforeInit: function (elem) {
            random(elem);
        }*/
    });
  });

  /************************************************************************************ AWARDS CAROUSEL STARTS */

  $(document).ready(function () {
    //Sort random function

    function random(owlSelector) {
      owlSelector
        .children()
        .sort(function () {
          return Math.round(Math.random()) - 0.5;
        })
        .each(function () {
          $(this).appendTo(owlSelector);
        });
    }

    $("#testimonials-carousel").owlCarousel({
      autoPlay: 5000,
      slideSpeed: 500,
      items: 1,
      itemsDesktop: [1199, 1],
      itemsDesktopSmall: [979, 1],
      itemsTablet: [768, 1],
      itemsMobile: [479, 1],
      autoHeight: true,
      pagination: true,
      navigation: false,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      //Call beforeInit callback, elem parameter point to $("#our-team")
      /* beforeInit: function (elem) {
            random(elem);
        }*/
    });
  });

  /************************************************************************************ TO TOP STARTS */

  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $(".scrollup").fadeIn();
      } else {
        $(".scrollup").fadeOut();
      }
    });

    $(".scrollup").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });

  /************************************************************************************ BOOTSTRAP LIGHTBOX STARTS */

  $(document).ready(function ($) {
    // delegate calls to data-toggle="lightbox"
    $(document).delegate(
      '*[data-toggle="lightbox"]',
      "click",
      function (event) {
        event.preventDefault();
        return $(this).ekkoLightbox({
          onShown: function () {
            if (window.console) {
              return console.log("Checking our the events huh?");
            }
          },
        });
      }
    );

    //Programatically call
    $("#open-image").click(function (e) {
      e.preventDefault();
      $(this).ekkoLightbox();
    });
    $("#open-youtube").click(function (e) {
      e.preventDefault();
      $(this).ekkoLightbox();
    });
  });

  /************************************************************************************ SCROLL TO NAV. STARTS */

  $(document).ready(function () {
    $("#main-nav").onePageNav({
      filter: ":not(.external)",
      changeHash: true,
      easing: "linear",
      scrollSpeed: 200,
      scrollThreshold: 0.5,
    });
  });

  /************************************************************************************ STICKY NAV. STARTS */

  $(window).load(function () {
    //$("#navigation").sticky({ topSpacing: 0 });
    // $("#navigation").sticky({ position: absolute });
  });

  /*************************** FadeOut Welcome Text **************************/
  $(window).scroll(function () {
    $(".asd").each(function () {
      if ($(this).offset().top - $(window).scrollTop() < 20) {
        $(this).stop().fadeTo(900, 0);
      } else {
        $(this).stop().fadeTo(90, 1);
      }
    });
  });
  /*************************** END OF MAGIC **************************/
}
