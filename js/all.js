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

  (function ($) {
    $.fn.appear = function (f, o) {
      var s = $.extend({ one: true }, o);
      return this.each(function () {
        var t = $(this);
        t.appeared = false;
        if (!f) {
          t.trigger("appear", s.data);
          return;
        }
        var w = $(window);
        var c = function () {
          if (!t.is(":visible")) {
            t.appeared = false;
            return;
          }
          var a = w.scrollLeft();
          var b = w.scrollTop();
          var o = t.offset();
          var x = o.left;
          var y = o.top;
          if (
            y + t.height() >= b &&
            y <= b + w.height() &&
            x + t.width() >= a &&
            x <= a + w.width()
          ) {
            if (!t.appeared) t.trigger("appear", s.data);
          } else {
            t.appeared = false;
          }
        };
        var m = function () {
          t.appeared = true;
          if (s.one) {
            w.unbind("scroll", c);
            var i = $.inArray(c, $.fn.appear.checks);
            if (i >= 0) $.fn.appear.checks.splice(i, 1);
          }
          f.apply(this, arguments);
        };
        if (s.one) t.one("appear", s.data, m);
        else t.bind("appear", s.data, m);
        w.scroll(c);
        $.fn.appear.checks.push(c);
        c();
      });
    };
    $.extend($.fn.appear, {
      checks: [],
      timeout: null,
      checkAll: function () {
        var l = $.fn.appear.checks.length;
        if (l > 0) while (l--) $.fn.appear.checks[l]();
      },
      run: function () {
        if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
        $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
      },
    });
    $.each(
      [
        "append",
        "prepend",
        "after",
        "before",
        "attr",
        "removeAttr",
        "addClass",
        "removeClass",
        "toggleClass",
        "remove",
        "css",
        "show",
        "hide",
      ],
      function (i, n) {
        var u = $.fn[n];
        if (u) {
          $.fn[n] = function () {
            var r = u.apply(this, arguments);
            $.fn.appear.run();
            return r;
          };
        }
      }
    );
  })(jQuery);
  $(function () {
    $("#ContactForm").submit(function () {
      $("#submitf").value = "Please wait...";
      $.post(
        "process.php?send=comments",
        $("#ContactForm").serialize(),
        function (data) {
          if (data.frm_check == "error") {
            $("#message_post").html(
              "<div class='errorMessage'>ERROR: " + data.msg + "!</div>"
            );
            document.ContactForm.submitf.value = "Resend >>";
            document.ContactForm.submitf.disabled = false;
          } else {
            $("#message_post").html(
              "<div class='successMessage'>Your message has been sent successfully!</div>"
            );
            $("#submitf").value = "Send >>";
          }
        },
        "json"
      );
      return false;
    });
  });
  (function ($) {
    $.easing["jswing"] = $.easing["swing"];
    $.extend($.easing, {
      def: "easeOutQuad",
      swing: function (x, t, b, c, d) {
        return $.easing[$.easing.def](x, t, b, c, d);
      },
      easeInQuad: function (x, t, b, c, d) {
        return c * (t /= d) * t + b;
      },
      easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      },
      easeInOutQuad: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
        return (-c / 2) * (--t * (t - 2) - 1) + b;
      },
      easeInCubic: function (x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
      },
      easeOutCubic: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
      },
      easeInOutCubic: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
        return (c / 2) * ((t -= 2) * t * t + 2) + b;
      },
      easeInQuart: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
      },
      easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      },
      easeInOutQuart: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
        return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
      },
      easeInQuint: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
      },
      easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      },
      easeInOutQuint: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
        return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
      },
      easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
      },
      easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin((t / d) * (Math.PI / 2)) + b;
      },
      easeInOutSine: function (x, t, b, c, d) {
        return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
      },
      easeInExpo: function (x, t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
      },
      easeOutExpo: function (x, t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
      },
      easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
        return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
      },
      easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
      },
      easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
      },
      easeInOutCirc: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
        return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
      },
      easeInElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * 0.3;
        if (a < Math.abs(c)) {
          a = c;
          var s = p / 4;
        } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
        return (
          -(
            a *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p)
          ) + b
        );
      },
      easeOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * 0.3;
        if (a < Math.abs(c)) {
          a = c;
          var s = p / 4;
        } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
        return (
          a *
            Math.pow(2, -10 * t) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
          c +
          b
        );
      },
      easeInOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (0.3 * 1.5);
        if (a < Math.abs(c)) {
          a = c;
          var s = p / 4;
        } else var s = (p / (2 * Math.PI)) * Math.asin(c / a);
        if (t < 1)
          return (
            -0.5 *
              (a *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
            b
          );
        return (
          a *
            Math.pow(2, -10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
            0.5 +
          c +
          b
        );
      },
      easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
      },
      easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      },
      easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1)
          return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
      },
      easeInBounce: function (x, t, b, c, d) {
        return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b;
      },
      easeOutBounce: function (x, t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
          return c * (7.5625 * t * t) + b;
        } else if (t < 2 / 2.75) {
          return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        } else if (t < 2.5 / 2.75) {
          return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        } else {
          return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
        }
      },
      easeInOutBounce: function (x, t, b, c, d) {
        if (t < d / 2)
          return $.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b;
        return (
          $.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
        );
      },
    });
    $.fn.animatescroll = function (options) {
      var opts = $.extend({}, $.fn.animatescroll.defaults, options);
      if (typeof opts.onScrollStart == "function") {
        opts.onScrollStart.call(this);
      }
      if (opts.element == "html,body") {
        var offset = this.offset().top;
        $(opts.element)
          .stop()
          .animate(
            { scrollTop: offset - opts.padding },
            opts.scrollSpeed,
            opts.easing
          );
      } else {
        $(opts.element)
          .stop()
          .animate(
            {
              scrollTop:
                this.offset().top -
                this.parent().offset().top +
                this.parent().scrollTop() -
                opts.padding,
            },
            opts.scrollSpeed,
            opts.easing
          );
      }
      setTimeout(function () {
        if (typeof opts.onScrollEnd == "function") {
          opts.onScrollEnd.call(this);
        }
      }, opts.scrollSpeed);
    };
    $.fn.animatescroll.defaults = {
      easing: "swing",
      scrollSpeed: 800,
      padding: 0,
      element: "html,body",
    };
  })(jQuery);
  if (typeof Object.create !== "function") {
    Object.create = function (obj) {
      function F() {}
      F.prototype = obj;
      return new F();
    };
  }
  (function ($, window, document) {
    var Carousel = {
      init: function (options, el) {
        var base = this;
        base.$elem = $(el);
        base.options = $.extend(
          {},
          $.fn.owlCarousel.options,
          base.$elem.data(),
          options
        );
        base.userOptions = options;
        base.loadContent();
      },
      loadContent: function () {
        var base = this,
          url;
        function getData(data) {
          var i,
            content = "";
          if (typeof base.options.jsonSuccess === "function") {
            base.options.jsonSuccess.apply(this, [data]);
          } else {
            for (i in data.owl) {
              if (data.owl.hasOwnProperty(i)) {
                content += data.owl[i].item;
              }
            }
            base.$elem.html(content);
          }
          base.logIn();
        }
        if (typeof base.options.beforeInit === "function") {
          base.options.beforeInit.apply(this, [base.$elem]);
        }
        if (typeof base.options.jsonPath === "string") {
          url = base.options.jsonPath;
          $.getJSON(url, getData);
        } else {
          base.logIn();
        }
      },
      logIn: function () {
        var base = this;
        base.$elem
          .data("owl-originalStyles", base.$elem.attr("style"))
          .data("owl-originalClasses", base.$elem.attr("class"));
        base.$elem.css({ opacity: 0 });
        base.orignalItems = base.options.items;
        base.checkBrowser();
        base.wrapperWidth = 0;
        base.checkVisible = null;
        base.setVars();
      },
      setVars: function () {
        var base = this;
        if (base.$elem.children().length === 0) {
          return false;
        }
        base.baseClass();
        base.eventTypes();
        base.$userItems = base.$elem.children();
        base.itemsAmount = base.$userItems.length;
        base.wrapItems();
        base.$owlItems = base.$elem.find(".owl-item");
        base.$owlWrapper = base.$elem.find(".owl-wrapper");
        base.playDirection = "next";
        base.prevItem = 0;
        base.prevArr = [0];
        base.currentItem = 0;
        base.customEvents();
        base.onStartup();
      },
      onStartup: function () {
        var base = this;
        base.updateItems();
        base.calculateAll();
        base.buildControls();
        base.updateControls();
        base.response();
        base.moveEvents();
        base.stopOnHover();
        base.owlStatus();
        if (base.options.transitionStyle !== false) {
          base.transitionTypes(base.options.transitionStyle);
        }
        if (base.options.autoPlay === true) {
          base.options.autoPlay = 5000;
        }
        base.play();
        base.$elem.find(".owl-wrapper").css("display", "block");
        if (!base.$elem.is(":visible")) {
          base.watchVisibility();
        } else {
          base.$elem.css("opacity", 1);
        }
        base.onstartup = false;
        base.eachMoveUpdate();
        if (typeof base.options.afterInit === "function") {
          base.options.afterInit.apply(this, [base.$elem]);
        }
      },
      eachMoveUpdate: function () {
        var base = this;
        if (base.options.lazyLoad === true) {
          base.lazyLoad();
        }
        if (base.options.autoHeight === false) {
          base.autoHeight();
        }
        base.onVisibleItems();
        if (typeof base.options.afterAction === "function") {
          base.options.afterAction.apply(this, [base.$elem]);
        }
      },
      updateVars: function () {
        var base = this;
        if (typeof base.options.beforeUpdate === "function") {
          base.options.beforeUpdate.apply(this, [base.$elem]);
        }
        base.watchVisibility();
        base.updateItems();
        base.calculateAll();
        base.updatePosition();
        base.updateControls();
        base.eachMoveUpdate();
        if (typeof base.options.afterUpdate === "function") {
          base.options.afterUpdate.apply(this, [base.$elem]);
        }
      },
      reload: function () {
        var base = this;
        window.setTimeout(function () {
          base.updateVars();
        }, 0);
      },
      watchVisibility: function () {
        var base = this;
        if (base.$elem.is(":visible") === false) {
          base.$elem.css({ opacity: 0 });
          window.clearInterval(base.autoPlayInterval);
          window.clearInterval(base.checkVisible);
        } else {
          return false;
        }
        base.checkVisible = window.setInterval(function () {
          if (base.$elem.is(":visible")) {
            base.reload();
            base.$elem.animate({ opacity: 1 }, 200);
            window.clearInterval(base.checkVisible);
          }
        }, 500);
      },
      wrapItems: function () {
        var base = this;
        base.$userItems
          .wrapAll('<div class="owl-wrapper">')
          .wrap('<div class="owl-item"></div>');
        base.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
        base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
        base.$elem.css("display", "block");
      },
      baseClass: function () {
        var base = this,
          hasBaseClass = base.$elem.hasClass(base.options.baseClass),
          hasThemeClass = base.$elem.hasClass(base.options.theme);
        if (!hasBaseClass) {
          base.$elem.addClass(base.options.baseClass);
        }
        if (!hasThemeClass) {
          base.$elem.addClass(base.options.theme);
        }
      },
      updateItems: function () {
        var base = this,
          width,
          i;
        if (base.options.responsive === false) {
          return false;
        }
        if (base.options.singleItem === true) {
          base.options.items = base.orignalItems = 1;
          base.options.itemsCustom = false;
          base.options.itemsDesktop = false;
          base.options.itemsDesktopSmall = false;
          base.options.itemsTablet = false;
          base.options.itemsTabletSmall = false;
          base.options.itemsMobile = false;
          return false;
        }
        width = $(base.options.responsiveBaseWidth).width();
        if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
          base.options.items = base.orignalItems;
        }
        if (base.options.itemsCustom !== false) {
          base.options.itemsCustom.sort(function (a, b) {
            return a[0] - b[0];
          });
          for (i = 0; i < base.options.itemsCustom.length; i += 1) {
            if (base.options.itemsCustom[i][0] <= width) {
              base.options.items = base.options.itemsCustom[i][1];
            }
          }
        } else {
          if (
            width <= base.options.itemsDesktop[0] &&
            base.options.itemsDesktop !== false
          ) {
            base.options.items = base.options.itemsDesktop[1];
          }
          if (
            width <= base.options.itemsDesktopSmall[0] &&
            base.options.itemsDesktopSmall !== false
          ) {
            base.options.items = base.options.itemsDesktopSmall[1];
          }
          if (
            width <= base.options.itemsTablet[0] &&
            base.options.itemsTablet !== false
          ) {
            base.options.items = base.options.itemsTablet[1];
          }
          if (
            width <= base.options.itemsTabletSmall[0] &&
            base.options.itemsTabletSmall !== false
          ) {
            base.options.items = base.options.itemsTabletSmall[1];
          }
          if (
            width <= base.options.itemsMobile[0] &&
            base.options.itemsMobile !== false
          ) {
            base.options.items = base.options.itemsMobile[1];
          }
        }
        if (
          base.options.items > base.itemsAmount &&
          base.options.itemsScaleUp === true
        ) {
          base.options.items = base.itemsAmount;
        }
      },
      response: function () {
        var base = this,
          smallDelay,
          lastWindowWidth;
        if (base.options.responsive !== true) {
          return false;
        }
        lastWindowWidth = $(window).width();
        base.resizer = function () {
          if ($(window).width() !== lastWindowWidth) {
            if (base.options.autoPlay !== false) {
              window.clearInterval(base.autoPlayInterval);
            }
            window.clearTimeout(smallDelay);
            smallDelay = window.setTimeout(function () {
              lastWindowWidth = $(window).width();
              base.updateVars();
            }, base.options.responsiveRefreshRate);
          }
        };
        $(window).resize(base.resizer);
      },
      updatePosition: function () {
        var base = this;
        base.jumpTo(base.currentItem);
        if (base.options.autoPlay !== false) {
          base.checkAp();
        }
      },
      appendItemsSizes: function () {
        var base = this,
          roundPages = 0,
          lastItem = base.itemsAmount - base.options.items;
        base.$owlItems.each(function (index) {
          var $this = $(this);
          $this.css({ width: base.itemWidth }).data("owl-item", Number(index));
          if (index % base.options.items === 0 || index === lastItem) {
            if (!(index > lastItem)) {
              roundPages += 1;
            }
          }
          $this.data("owl-roundPages", roundPages);
        });
      },
      appendWrapperSizes: function () {
        var base = this,
          width = base.$owlItems.length * base.itemWidth;
        base.$owlWrapper.css({ width: width * 2, left: 0 });
        base.appendItemsSizes();
      },
      calculateAll: function () {
        var base = this;
        base.calculateWidth();
        base.appendWrapperSizes();
        base.loops();
        base.max();
      },
      calculateWidth: function () {
        var base = this;
        base.itemWidth = Math.round(base.$elem.width() / base.options.items);
      },
      max: function () {
        var base = this,
          maximum =
            (base.itemsAmount * base.itemWidth -
              base.options.items * base.itemWidth) *
            -1;
        if (base.options.items > base.itemsAmount) {
          base.maximumItem = 0;
          maximum = 0;
          base.maximumPixels = 0;
        } else {
          base.maximumItem = base.itemsAmount - base.options.items;
          base.maximumPixels = maximum;
        }
        return maximum;
      },
      min: function () {
        return 0;
      },
      loops: function () {
        var base = this,
          prev = 0,
          elWidth = 0,
          i,
          item,
          roundPageNum;
        base.positionsInArray = [0];
        base.pagesInArray = [];
        for (i = 0; i < base.itemsAmount; i += 1) {
          elWidth += base.itemWidth;
          base.positionsInArray.push(-elWidth);
          if (base.options.scrollPerPage === true) {
            item = $(base.$owlItems[i]);
            roundPageNum = item.data("owl-roundPages");
            if (roundPageNum !== prev) {
              base.pagesInArray[prev] = base.positionsInArray[i];
              prev = roundPageNum;
            }
          }
        }
      },
      buildControls: function () {
        var base = this;
        if (
          base.options.navigation === true ||
          base.options.pagination === true
        ) {
          base.owlControls = $('<div class="owl-controls"/>')
            .toggleClass("clickable", !base.browser.isTouch)
            .appendTo(base.$elem);
        }
        if (base.options.pagination === true) {
          base.buildPagination();
        }
        if (base.options.navigation === true) {
          base.buildButtons();
        }
      },
      buildButtons: function () {
        var base = this,
          buttonsWrapper = $('<div class="owl-buttons"/>');
        base.owlControls.append(buttonsWrapper);
        base.buttonPrev = $("<div/>", {
          class: "owl-prev",
          html: base.options.navigationText[0] || "",
        });
        base.buttonNext = $("<div/>", {
          class: "owl-next",
          html: base.options.navigationText[1] || "",
        });
        buttonsWrapper.append(base.buttonPrev).append(base.buttonNext);
        buttonsWrapper.on(
          "touchstart.owlControls mousedown.owlControls",
          'div[class^="owl"]',
          function (event) {
            event.preventDefault();
          }
        );
        buttonsWrapper.on(
          "touchend.owlControls mouseup.owlControls",
          'div[class^="owl"]',
          function (event) {
            event.preventDefault();
            if ($(this).hasClass("owl-next")) {
              base.next();
            } else {
              base.prev();
            }
          }
        );
      },
      buildPagination: function () {
        var base = this;
        base.paginationWrapper = $('<div class="owl-pagination"/>');
        base.owlControls.append(base.paginationWrapper);
        base.paginationWrapper.on(
          "touchend.owlControls mouseup.owlControls",
          ".owl-page",
          function (event) {
            event.preventDefault();
            if (Number($(this).data("owl-page")) !== base.currentItem) {
              base.goTo(Number($(this).data("owl-page")), true);
            }
          }
        );
      },
      updatePagination: function () {
        var base = this,
          counter,
          lastPage,
          lastItem,
          i,
          paginationButton,
          paginationButtonInner;
        if (base.options.pagination === false) {
          return false;
        }
        base.paginationWrapper.html("");
        counter = 0;
        lastPage = base.itemsAmount - (base.itemsAmount % base.options.items);
        for (i = 0; i < base.itemsAmount; i += 1) {
          if (i % base.options.items === 0) {
            counter += 1;
            if (lastPage === i) {
              lastItem = base.itemsAmount - base.options.items;
            }
            paginationButton = $("<div/>", { class: "owl-page" });
            paginationButtonInner = $("<span></span>", {
              text: base.options.paginationNumbers === true ? counter : "",
              class:
                base.options.paginationNumbers === true ? "owl-numbers" : "",
            });
            paginationButton.append(paginationButtonInner);
            paginationButton.data("owl-page", lastPage === i ? lastItem : i);
            paginationButton.data("owl-roundPages", counter);
            base.paginationWrapper.append(paginationButton);
          }
        }
        base.checkPagination();
      },
      checkPagination: function () {
        var base = this;
        if (base.options.pagination === false) {
          return false;
        }
        base.paginationWrapper.find(".owl-page").each(function () {
          if (
            $(this).data("owl-roundPages") ===
            $(base.$owlItems[base.currentItem]).data("owl-roundPages")
          ) {
            base.paginationWrapper.find(".owl-page").removeClass("active");
            $(this).addClass("active");
          }
        });
      },
      checkNavigation: function () {
        var base = this;
        if (base.options.navigation === false) {
          return false;
        }
        if (base.options.rewindNav === false) {
          if (base.currentItem === 0 && base.maximumItem === 0) {
            base.buttonPrev.addClass("disabled");
            base.buttonNext.addClass("disabled");
          } else if (base.currentItem === 0 && base.maximumItem !== 0) {
            base.buttonPrev.addClass("disabled");
            base.buttonNext.removeClass("disabled");
          } else if (base.currentItem === base.maximumItem) {
            base.buttonPrev.removeClass("disabled");
            base.buttonNext.addClass("disabled");
          } else if (
            base.currentItem !== 0 &&
            base.currentItem !== base.maximumItem
          ) {
            base.buttonPrev.removeClass("disabled");
            base.buttonNext.removeClass("disabled");
          }
        }
      },
      updateControls: function () {
        var base = this;
        base.updatePagination();
        base.checkNavigation();
        if (base.owlControls) {
          if (base.options.items >= base.itemsAmount) {
            base.owlControls.hide();
          } else {
            base.owlControls.show();
          }
        }
      },
      destroyControls: function () {
        var base = this;
        if (base.owlControls) {
          base.owlControls.remove();
        }
      },
      next: function (speed) {
        var base = this;
        if (base.isTransition) {
          return false;
        }
        base.currentItem +=
          base.options.scrollPerPage === true ? base.options.items : 1;
        if (
          base.currentItem >
          base.maximumItem +
            (base.options.scrollPerPage === true ? base.options.items - 1 : 0)
        ) {
          if (base.options.rewindNav === true) {
            base.currentItem = 0;
            speed = "rewind";
          } else {
            base.currentItem = base.maximumItem;
            return false;
          }
        }
        base.goTo(base.currentItem, speed);
      },
      prev: function (speed) {
        var base = this;
        if (base.isTransition) {
          return false;
        }
        if (
          base.options.scrollPerPage === true &&
          base.currentItem > 0 &&
          base.currentItem < base.options.items
        ) {
          base.currentItem = 0;
        } else {
          base.currentItem -=
            base.options.scrollPerPage === true ? base.options.items : 1;
        }
        if (base.currentItem < 0) {
          if (base.options.rewindNav === true) {
            base.currentItem = base.maximumItem;
            speed = "rewind";
          } else {
            base.currentItem = 0;
            return false;
          }
        }
        base.goTo(base.currentItem, speed);
      },
      goTo: function (position, speed, drag) {
        var base = this,
          goToPixel;
        if (base.isTransition) {
          return false;
        }
        if (typeof base.options.beforeMove === "function") {
          base.options.beforeMove.apply(this, [base.$elem]);
        }
        if (position >= base.maximumItem) {
          position = base.maximumItem;
        } else if (position <= 0) {
          position = 0;
        }
        base.currentItem = base.owl.currentItem = position;
        if (
          base.options.transitionStyle !== false &&
          drag !== "drag" &&
          base.options.items === 1 &&
          base.browser.support3d === true
        ) {
          base.swapSpeed(0);
          if (base.browser.support3d === true) {
            base.transition3d(base.positionsInArray[position]);
          } else {
            base.css2slide(base.positionsInArray[position], 1);
          }
          base.afterGo();
          base.singleItemTransition();
          return false;
        }
        goToPixel = base.positionsInArray[position];
        if (base.browser.support3d === true) {
          base.isCss3Finish = false;
          if (speed === true) {
            base.swapSpeed("paginationSpeed");
            window.setTimeout(function () {
              base.isCss3Finish = true;
            }, base.options.paginationSpeed);
          } else if (speed === "rewind") {
            base.swapSpeed(base.options.rewindSpeed);
            window.setTimeout(function () {
              base.isCss3Finish = true;
            }, base.options.rewindSpeed);
          } else {
            base.swapSpeed("slideSpeed");
            window.setTimeout(function () {
              base.isCss3Finish = true;
            }, base.options.slideSpeed);
          }
          base.transition3d(goToPixel);
        } else {
          if (speed === true) {
            base.css2slide(goToPixel, base.options.paginationSpeed);
          } else if (speed === "rewind") {
            base.css2slide(goToPixel, base.options.rewindSpeed);
          } else {
            base.css2slide(goToPixel, base.options.slideSpeed);
          }
        }
        base.afterGo();
      },
      jumpTo: function (position) {
        var base = this;
        if (typeof base.options.beforeMove === "function") {
          base.options.beforeMove.apply(this, [base.$elem]);
        }
        if (position >= base.maximumItem || position === -1) {
          position = base.maximumItem;
        } else if (position <= 0) {
          position = 0;
        }
        base.swapSpeed(0);
        if (base.browser.support3d === true) {
          base.transition3d(base.positionsInArray[position]);
        } else {
          base.css2slide(base.positionsInArray[position], 1);
        }
        base.currentItem = base.owl.currentItem = position;
        base.afterGo();
      },
      afterGo: function () {
        var base = this;
        base.prevArr.push(base.currentItem);
        base.prevItem = base.owl.prevItem =
          base.prevArr[base.prevArr.length - 2];
        base.prevArr.shift(0);
        if (base.prevItem !== base.currentItem) {
          base.checkPagination();
          base.checkNavigation();
          base.eachMoveUpdate();
          if (base.options.autoPlay !== false) {
            base.checkAp();
          }
        }
        if (
          typeof base.options.afterMove === "function" &&
          base.prevItem !== base.currentItem
        ) {
          base.options.afterMove.apply(this, [base.$elem]);
        }
      },
      stop: function () {
        var base = this;
        base.apStatus = "stop";
        window.clearInterval(base.autoPlayInterval);
      },
      checkAp: function () {
        var base = this;
        if (base.apStatus !== "stop") {
          base.play();
        }
      },
      play: function () {
        var base = this;
        base.apStatus = "play";
        if (base.options.autoPlay === false) {
          return false;
        }
        window.clearInterval(base.autoPlayInterval);
        base.autoPlayInterval = window.setInterval(function () {
          base.next(true);
        }, base.options.autoPlay);
      },
      swapSpeed: function (action) {
        var base = this;
        if (action === "slideSpeed") {
          base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
        } else if (action === "paginationSpeed") {
          base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
        } else if (typeof action !== "string") {
          base.$owlWrapper.css(base.addCssSpeed(action));
        }
      },
      addCssSpeed: function (speed) {
        return {
          "-webkit-transition": "all " + speed + "ms ease",
          "-moz-transition": "all " + speed + "ms ease",
          "-o-transition": "all " + speed + "ms ease",
          transition: "all " + speed + "ms ease",
        };
      },
      removeTransition: function () {
        return {
          "-webkit-transition": "",
          "-moz-transition": "",
          "-o-transition": "",
          transition: "",
        };
      },
      doTranslate: function (pixels) {
        return {
          "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
          "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
          "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
          "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
          transform: "translate3d(" + pixels + "px, 0px,0px)",
        };
      },
      transition3d: function (value) {
        var base = this;
        base.$owlWrapper.css(base.doTranslate(value));
      },
      css2move: function (value) {
        var base = this;
        base.$owlWrapper.css({ left: value });
      },
      css2slide: function (value, speed) {
        var base = this;
        base.isCssFinish = false;
        base.$owlWrapper.stop(true, true).animate(
          { left: value },
          {
            duration: speed || base.options.slideSpeed,
            complete: function () {
              base.isCssFinish = true;
            },
          }
        );
      },
      checkBrowser: function () {
        var base = this,
          translate3D = "translate3d(0px, 0px, 0px)",
          tempElem = document.createElement("div"),
          regex,
          asSupport,
          support3d,
          isTouch;
        tempElem.style.cssText =
          "  -moz-transform:" +
          translate3D +
          "; -ms-transform:" +
          translate3D +
          "; -o-transform:" +
          translate3D +
          "; -webkit-transform:" +
          translate3D +
          "; transform:" +
          translate3D;
        regex = /translate3d\(0px, 0px, 0px\)/g;
        asSupport = tempElem.style.cssText.match(regex);
        support3d = asSupport !== null && asSupport.length === 1;
        isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;
        base.browser = { support3d: support3d, isTouch: isTouch };
      },
      moveEvents: function () {
        var base = this;
        if (
          base.options.mouseDrag !== false ||
          base.options.touchDrag !== false
        ) {
          base.gestures();
          base.disabledEvents();
        }
      },
      eventTypes: function () {
        var base = this,
          types = ["s", "e", "x"];
        base.ev_types = {};
        if (
          base.options.mouseDrag === true &&
          base.options.touchDrag === true
        ) {
          types = [
            "touchstart.owl mousedown.owl",
            "touchmove.owl mousemove.owl",
            "touchend.owl touchcancel.owl mouseup.owl",
          ];
        } else if (
          base.options.mouseDrag === false &&
          base.options.touchDrag === true
        ) {
          types = [
            "touchstart.owl",
            "touchmove.owl",
            "touchend.owl touchcancel.owl",
          ];
        } else if (
          base.options.mouseDrag === true &&
          base.options.touchDrag === false
        ) {
          types = ["mousedown.owl", "mousemove.owl", "mouseup.owl"];
        }
        base.ev_types.start = types[0];
        base.ev_types.move = types[1];
        base.ev_types.end = types[2];
      },
      disabledEvents: function () {
        var base = this;
        base.$elem.on("dragstart.owl", function (event) {
          event.preventDefault();
        });
        base.$elem.on("mousedown.disableTextSelect", function (e) {
          return $(e.target).is("input, textarea, select, option");
        });
      },
      gestures: function () {
        var base = this,
          locals = {
            offsetX: 0,
            offsetY: 0,
            baseElWidth: 0,
            relativePos: 0,
            position: null,
            minSwipe: null,
            maxSwipe: null,
            sliding: null,
            dargging: null,
            targetElement: null,
          };
        base.isCssFinish = true;
        function getTouches(event) {
          if (event.touches !== undefined) {
            return { x: event.touches[0].pageX, y: event.touches[0].pageY };
          }
          if (event.touches === undefined) {
            if (event.pageX !== undefined) {
              return { x: event.pageX, y: event.pageY };
            }
            if (event.pageX === undefined) {
              return { x: event.clientX, y: event.clientY };
            }
          }
        }
        function swapEvents(type) {
          if (type === "on") {
            $(document).on(base.ev_types.move, dragMove);
            $(document).on(base.ev_types.end, dragEnd);
          } else if (type === "off") {
            $(document).off(base.ev_types.move);
            $(document).off(base.ev_types.end);
          }
        }
        function dragStart(event) {
          var ev = event.originalEvent || event || window.event,
            position;
          if (ev.which === 3) {
            return false;
          }
          if (base.itemsAmount <= base.options.items) {
            return;
          }
          if (
            base.isCssFinish === false &&
            !base.options.dragBeforeAnimFinish
          ) {
            return false;
          }
          if (
            base.isCss3Finish === false &&
            !base.options.dragBeforeAnimFinish
          ) {
            return false;
          }
          if (base.options.autoPlay !== false) {
            window.clearInterval(base.autoPlayInterval);
          }
          if (
            base.browser.isTouch !== true &&
            !base.$owlWrapper.hasClass("grabbing")
          ) {
            base.$owlWrapper.addClass("grabbing");
          }
          base.newPosX = 0;
          base.newRelativeX = 0;
          $(this).css(base.removeTransition());
          position = $(this).position();
          locals.relativePos = position.left;
          locals.offsetX = getTouches(ev).x - position.left;
          locals.offsetY = getTouches(ev).y - position.top;
          swapEvents("on");
          locals.sliding = false;
          locals.targetElement = ev.target || ev.srcElement;
        }
        function dragMove(event) {
          var ev = event.originalEvent || event || window.event,
            minSwipe,
            maxSwipe;
          base.newPosX = getTouches(ev).x - locals.offsetX;
          base.newPosY = getTouches(ev).y - locals.offsetY;
          base.newRelativeX = base.newPosX - locals.relativePos;
          if (
            typeof base.options.startDragging === "function" &&
            locals.dragging !== true &&
            base.newRelativeX !== 0
          ) {
            locals.dragging = true;
            base.options.startDragging.apply(base, [base.$elem]);
          }
          if (
            (base.newRelativeX > 8 || base.newRelativeX < -8) &&
            base.browser.isTouch === true
          ) {
            if (ev.preventDefault !== undefined) {
              ev.preventDefault();
            } else {
              ev.returnValue = false;
            }
            locals.sliding = true;
          }
          if (
            (base.newPosY > 10 || base.newPosY < -10) &&
            locals.sliding === false
          ) {
            $(document).off("touchmove.owl");
          }
          minSwipe = function () {
            return base.newRelativeX / 5;
          };
          maxSwipe = function () {
            return base.maximumPixels + base.newRelativeX / 5;
          };
          base.newPosX = Math.max(
            Math.min(base.newPosX, minSwipe()),
            maxSwipe()
          );
          if (base.browser.support3d === true) {
            base.transition3d(base.newPosX);
          } else {
            base.css2move(base.newPosX);
          }
        }
        function dragEnd(event) {
          var ev = event.originalEvent || event || window.event,
            newPosition,
            handlers,
            owlStopEvent;
          ev.target = ev.target || ev.srcElement;
          locals.dragging = false;
          if (base.browser.isTouch !== true) {
            base.$owlWrapper.removeClass("grabbing");
          }
          if (base.newRelativeX < 0) {
            base.dragDirection = base.owl.dragDirection = "left";
          } else {
            base.dragDirection = base.owl.dragDirection = "right";
          }
          if (base.newRelativeX !== 0) {
            newPosition = base.getNewPosition();
            base.goTo(newPosition, false, "drag");
            if (
              locals.targetElement === ev.target &&
              base.browser.isTouch !== true
            ) {
              $(ev.target).on("click.disable", function (ev) {
                ev.stopImmediatePropagation();
                ev.stopPropagation();
                ev.preventDefault();
                $(ev.target).off("click.disable");
              });
              handlers = $._data(ev.target, "events").click;
              owlStopEvent = handlers.pop();
              handlers.splice(0, 0, owlStopEvent);
            }
          }
          swapEvents("off");
        }
        base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
      },
      getNewPosition: function () {
        var base = this,
          newPosition = base.closestItem();
        if (newPosition > base.maximumItem) {
          base.currentItem = base.maximumItem;
          newPosition = base.maximumItem;
        } else if (base.newPosX >= 0) {
          newPosition = 0;
          base.currentItem = 0;
        }
        return newPosition;
      },
      closestItem: function () {
        var base = this,
          array =
            base.options.scrollPerPage === true
              ? base.pagesInArray
              : base.positionsInArray,
          goal = base.newPosX,
          closest = null;
        $.each(array, function (i, v) {
          if (
            goal - base.itemWidth / 20 > array[i + 1] &&
            goal - base.itemWidth / 20 < v &&
            base.moveDirection() === "left"
          ) {
            closest = v;
            if (base.options.scrollPerPage === true) {
              base.currentItem = $.inArray(closest, base.positionsInArray);
            } else {
              base.currentItem = i;
            }
          } else if (
            goal + base.itemWidth / 20 < v &&
            goal + base.itemWidth / 20 >
              (array[i + 1] || array[i] - base.itemWidth) &&
            base.moveDirection() === "right"
          ) {
            if (base.options.scrollPerPage === true) {
              closest = array[i + 1] || array[array.length - 1];
              base.currentItem = $.inArray(closest, base.positionsInArray);
            } else {
              closest = array[i + 1];
              base.currentItem = i + 1;
            }
          }
        });
        return base.currentItem;
      },
      moveDirection: function () {
        var base = this,
          direction;
        if (base.newRelativeX < 0) {
          direction = "right";
          base.playDirection = "next";
        } else {
          direction = "left";
          base.playDirection = "prev";
        }
        return direction;
      },
      customEvents: function () {
        var base = this;
        base.$elem.on("owl.next", function () {
          base.next();
        });
        base.$elem.on("owl.prev", function () {
          base.prev();
        });
        base.$elem.on("owl.play", function (event, speed) {
          base.options.autoPlay = speed;
          base.play();
          base.hoverStatus = "play";
        });
        base.$elem.on("owl.stop", function () {
          base.stop();
          base.hoverStatus = "stop";
        });
        base.$elem.on("owl.goTo", function (event, item) {
          base.goTo(item);
        });
        base.$elem.on("owl.jumpTo", function (event, item) {
          base.jumpTo(item);
        });
      },
      stopOnHover: function () {
        var base = this;
        if (
          base.options.stopOnHover === true &&
          base.browser.isTouch !== true &&
          base.options.autoPlay !== false
        ) {
          base.$elem.on("mouseover", function () {
            base.stop();
          });
          base.$elem.on("mouseout", function () {
            if (base.hoverStatus !== "stop") {
              base.play();
            }
          });
        }
      },
      lazyLoad: function () {
        var base = this,
          i,
          $item,
          itemNumber,
          $lazyImg,
          follow;
        if (base.options.lazyLoad === false) {
          return false;
        }
        for (i = 0; i < base.itemsAmount; i += 1) {
          $item = $(base.$owlItems[i]);
          if ($item.data("owl-loaded") === "loaded") {
            continue;
          }
          itemNumber = $item.data("owl-item");
          $lazyImg = $item.find(".lazyOwl");
          if (typeof $lazyImg.data("src") !== "string") {
            $item.data("owl-loaded", "loaded");
            continue;
          }
          if ($item.data("owl-loaded") === undefined) {
            $lazyImg.hide();
            $item.addClass("loading").data("owl-loaded", "checked");
          }
          if (base.options.lazyFollow === true) {
            follow = itemNumber >= base.currentItem;
          } else {
            follow = true;
          }
          if (
            follow &&
            itemNumber < base.currentItem + base.options.items &&
            $lazyImg.length
          ) {
            base.lazyPreload($item, $lazyImg);
          }
        }
      },
      lazyPreload: function ($item, $lazyImg) {
        var base = this,
          iterations = 0,
          isBackgroundImg;
        if ($lazyImg.prop("tagName") === "DIV") {
          $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
          isBackgroundImg = true;
        } else {
          $lazyImg[0].src = $lazyImg.data("src");
        }
        function showImage() {
          $item.data("owl-loaded", "loaded").removeClass("loading");
          $lazyImg.removeAttr("data-src");
          if (base.options.lazyEffect === "fade") {
            $lazyImg.fadeIn(400);
          } else {
            $lazyImg.show();
          }
          if (typeof base.options.afterLazyLoad === "function") {
            base.options.afterLazyLoad.apply(this, [base.$elem]);
          }
        }
        function checkLazyImage() {
          iterations += 1;
          if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
            showImage();
          } else if (iterations <= 100) {
            window.setTimeout(checkLazyImage, 100);
          } else {
            showImage();
          }
        }
        checkLazyImage();
      },
      autoHeight: function () {
        var base = this,
          $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
          iterations;
        function addHeight() {
          var $currentItem = $(base.$owlItems[base.currentItem]).height();
          base.wrapperOuter.css("height", $currentItem + "px");
          if (!base.wrapperOuter.hasClass("autoHeight")) {
            window.setTimeout(function () {
              base.wrapperOuter.addClass("autoHeight");
            }, 0);
          }
        }
        function checkImage() {
          iterations += 1;
          if (base.completeImg($currentimg.get(0))) {
            addHeight();
          } else if (iterations <= 100) {
            window.setTimeout(checkImage, 100);
          } else {
            base.wrapperOuter.css("height", "");
          }
        }
        if ($currentimg.get(0) !== undefined) {
          iterations = 0;
          checkImage();
        } else {
          addHeight();
        }
      },
      completeImg: function (img) {
        var naturalWidthType;
        if (!img.complete) {
          return false;
        }
        naturalWidthType = typeof img.naturalWidth;
        if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
          return false;
        }
        return true;
      },
      onVisibleItems: function () {
        var base = this,
          i;
        if (base.options.addClassActive === true) {
          base.$owlItems.removeClass("active");
        }
        base.visibleItems = [];
        for (
          i = base.currentItem;
          i < base.currentItem + base.options.items;
          i += 1
        ) {
          base.visibleItems.push(i);
          if (base.options.addClassActive === true) {
            $(base.$owlItems[i]).addClass("active");
          }
        }
        base.owl.visibleItems = base.visibleItems;
      },
      transitionTypes: function (className) {
        var base = this;
        base.outClass = "owl-" + className + "-out";
        base.inClass = "owl-" + className + "-in";
      },
      singleItemTransition: function () {
        var base = this,
          outClass = base.outClass,
          inClass = base.inClass,
          $currentItem = base.$owlItems.eq(base.currentItem),
          $prevItem = base.$owlItems.eq(base.prevItem),
          prevPos =
            Math.abs(base.positionsInArray[base.currentItem]) +
            base.positionsInArray[base.prevItem],
          origin =
            Math.abs(base.positionsInArray[base.currentItem]) +
            base.itemWidth / 2,
          animEnd =
            "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
        base.isTransition = true;
        base.$owlWrapper
          .addClass("owl-origin")
          .css({
            "-webkit-transform-origin": origin + "px",
            "-moz-perspective-origin": origin + "px",
            "perspective-origin": origin + "px",
          });
        function transStyles(prevPos) {
          return { position: "relative", left: prevPos + "px" };
        }
        $prevItem
          .css(transStyles(prevPos, 10))
          .addClass(outClass)
          .on(animEnd, function () {
            base.endPrev = true;
            $prevItem.off(animEnd);
            base.clearTransStyle($prevItem, outClass);
          });
        $currentItem.addClass(inClass).on(animEnd, function () {
          base.endCurrent = true;
          $currentItem.off(animEnd);
          base.clearTransStyle($currentItem, inClass);
        });
      },
      clearTransStyle: function (item, classToRemove) {
        var base = this;
        item.css({ position: "", left: "" }).removeClass(classToRemove);
        if (base.endPrev && base.endCurrent) {
          base.$owlWrapper.removeClass("owl-origin");
          base.endPrev = false;
          base.endCurrent = false;
          base.isTransition = false;
        }
      },
      owlStatus: function () {
        var base = this;
        base.owl = {
          userOptions: base.userOptions,
          baseElement: base.$elem,
          userItems: base.$userItems,
          owlItems: base.$owlItems,
          currentItem: base.currentItem,
          prevItem: base.prevItem,
          visibleItems: base.visibleItems,
          isTouch: base.browser.isTouch,
          browser: base.browser,
          dragDirection: base.dragDirection,
        };
      },
      clearEvents: function () {
        var base = this;
        base.$elem.off(".owl owl mousedown.disableTextSelect");
        $(document).off(".owl owl");
        $(window).off("resize", base.resizer);
      },
      unWrap: function () {
        var base = this;
        if (base.$elem.children().length !== 0) {
          base.$owlWrapper.unwrap();
          base.$userItems.unwrap().unwrap();
          if (base.owlControls) {
            base.owlControls.remove();
          }
        }
        base.clearEvents();
        base.$elem
          .attr("style", base.$elem.data("owl-originalStyles") || "")
          .attr("class", base.$elem.data("owl-originalClasses"));
      },
      destroy: function () {
        var base = this;
        base.stop();
        window.clearInterval(base.checkVisible);
        base.unWrap();
        base.$elem.removeData();
      },
      reinit: function (newOptions) {
        var base = this,
          options = $.extend({}, base.userOptions, newOptions);
        base.unWrap();
        base.init(options, base.$elem);
      },
      addItem: function (htmlString, targetPosition) {
        var base = this,
          position;
        if (!htmlString) {
          return false;
        }
        if (base.$elem.children().length === 0) {
          base.$elem.append(htmlString);
          base.setVars();
          return false;
        }
        base.unWrap();
        if (targetPosition === undefined || targetPosition === -1) {
          position = -1;
        } else {
          position = targetPosition;
        }
        if (position >= base.$userItems.length || position === -1) {
          base.$userItems.eq(-1).after(htmlString);
        } else {
          base.$userItems.eq(position).before(htmlString);
        }
        base.setVars();
      },
      removeItem: function (targetPosition) {
        var base = this,
          position;
        if (base.$elem.children().length === 0) {
          return false;
        }
        if (targetPosition === undefined || targetPosition === -1) {
          position = -1;
        } else {
          position = targetPosition;
        }
        base.unWrap();
        base.$userItems.eq(position).remove();
        base.setVars();
      },
    };
    $.fn.owlCarousel = function (options) {
      return this.each(function () {
        if ($(this).data("owl-init") === true) {
          return false;
        }
        $(this).data("owl-init", true);
        var carousel = Object.create(Carousel);
        carousel.init(options, this);
        $.data(this, "owlCarousel", carousel);
      });
    };
    $.fn.owlCarousel.options = {
      items: 5,
      itemsCustom: false,
      itemsDesktop: [1199, 4],
      itemsDesktopSmall: [979, 3],
      itemsTablet: [768, 2],
      itemsTabletSmall: false,
      itemsMobile: [479, 1],
      singleItem: false,
      itemsScaleUp: false,
      slideSpeed: 200,
      paginationSpeed: 800,
      rewindSpeed: 1000,
      autoPlay: false,
      stopOnHover: false,
      navigation: false,
      navigationText: ["prev", "next"],
      rewindNav: true,
      scrollPerPage: false,
      pagination: true,
      paginationNumbers: false,
      responsive: true,
      responsiveRefreshRate: 200,
      responsiveBaseWidth: window,
      baseClass: "owl-carousel",
      theme: "owl-theme",
      lazyLoad: false,
      lazyFollow: true,
      lazyEffect: "fade",
      autoHeight: false,
      jsonPath: false,
      jsonSuccess: false,
      dragBeforeAnimFinish: true,
      mouseDrag: true,
      touchDrag: true,
      addClassActive: false,
      transitionStyle: false,
      beforeUpdate: false,
      afterUpdate: false,
      beforeInit: false,
      afterInit: false,
      beforeMove: false,
      afterMove: false,
      afterAction: false,
      startDragging: false,
      afterLazyLoad: false,
    };
  })(jQuery, window, document);
  $(document).ready(function () {
    $window = $(window);
    $('section[data-type="background"]').each(function () {
      var $bgobj = $(this);
      $(window).scroll(function () {
        var yPos = -($window.scrollTop() / $bgobj.data("speed"));
        var coords = "50% " + yPos + "px";
        $bgobj.css({ backgroundPosition: coords });
      });
    });
  });
  document.createElement("article");
  document.createElement("section");
  (function ($, window, document, undefined) {
    var OnePageNav = function (elem, options) {
      this.elem = elem;
      this.$elem = $(elem);
      this.options = options;
      this.metadata = this.$elem.data("plugin-options");
      this.$nav = this.$elem.find("a");
      this.$win = $(window);
      this.sections = {};
      this.didScroll = false;
      this.$doc = $(document);
      this.docHeight = this.$doc.height();
    };
    OnePageNav.prototype = {
      defaults: {
        currentClass: "active",
        changeHash: false,
        easing: "swing",
        filter: "",
        scrollSpeed: 750,
        scrollOffset: 0,
        scrollThreshold: 0.01,
        begin: false,
        end: false,
        scrollChange: false,
      },
      init: function () {
        var self = this;
        self.config = $.extend({}, self.defaults, self.options, self.metadata);
        if (self.config.filter !== "") {
          self.$nav = self.$nav.filter(self.config.filter);
        }
        self.$nav.on("click.onePageNav", $.proxy(self.handleClick, self));
        self.getPositions();
        self.bindInterval();
        self.$win.on("resize.onePageNav", $.proxy(self.getPositions, self));
        return this;
      },
      adjustNav: function (self, $parent) {
        self.$elem
          .find("." + self.config.currentClass)
          .removeClass(self.config.currentClass);
        $parent.addClass(self.config.currentClass);
      },
      bindInterval: function () {
        var self = this;
        var docHeight;
        self.$win.on("scroll.onePageNav", function () {
          self.didScroll = true;
        });
        self.t = setInterval(function () {
          docHeight = self.$doc.height();
          if (self.didScroll) {
            self.didScroll = false;
            self.scrollChange();
          }
          if (docHeight !== self.docHeight) {
            self.docHeight = docHeight;
            self.getPositions();
          }
        }, 250);
      },
      getHash: function ($link) {
        return $link.attr("href").split("#")[1];
      },
      getPositions: function () {
        var self = this;
        var linkHref;
        var topPos;
        var $target;
        self.$nav.each(function () {
          linkHref = self.getHash($(this));
          $target = $("#" + linkHref);
          if ($target.length) {
            topPos = $target.offset().top;
            self.sections[linkHref] =
              Math.round(topPos) - self.config.scrollOffset;
          }
        });
      },
      getSection: function (windowPos) {
        var returnValue = null;
        var windowHeight = Math.round(
          this.$win.height() * this.config.scrollThreshold
        );
        for (var section in this.sections) {
          if (this.sections[section] - windowHeight < windowPos) {
            returnValue = section;
          }
        }
        return returnValue;
      },
      handleClick: function (e) {
        var self = this;
        var $link = $(e.currentTarget);
        var $parent = $link.parent();
        var newLoc = "#" + self.getHash($link);
        if (!$parent.hasClass(self.config.currentClass)) {
          if (self.config.begin) {
            self.config.begin();
          }
          self.adjustNav(self, $parent);
          self.unbindInterval();
          $.scrollTo(newLoc, self.config.scrollSpeed, {
            axis: "y",
            easing: self.config.easing,
            offset: { top: -self.config.scrollOffset },
            onAfter: function () {
              if (self.config.changeHash) {
                window.location.hash = newLoc;
              }
              self.bindInterval();
              if (self.config.end) {
                self.config.end();
              }
            },
          });
        }
        e.preventDefault();
      },
      scrollChange: function () {
        var windowTop = this.$win.scrollTop();
        var position = this.getSection(windowTop);
        var $parent;
        if (position !== null) {
          $parent = this.$elem.find('a[href$="#' + position + '"]').parent();
          if (!$parent.hasClass(this.config.currentClass)) {
            this.adjustNav(this, $parent);
            if (this.config.scrollChange) {
              this.config.scrollChange($parent);
            }
          }
        }
      },
      unbindInterval: function () {
        clearInterval(this.t);
        this.$win.unbind("scroll.onePageNav");
      },
    };
    OnePageNav.defaults = OnePageNav.prototype.defaults;
    $.fn.onePageNav = function (options) {
      return this.each(function () {
        new OnePageNav(this, options).init();
      });
    };
  })(jQuery, window, document);
  (function ($) {
    var h = ($.scrollTo = function (a, b, c) {
      $(window).scrollTo(a, b, c);
    });
    h.defaults = {
      axis: "xy",
      duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
      limit: true,
    };
    h.window = function (a) {
      return $(window)._scrollable();
    };
    $.fn._scrollable = function () {
      return this.map(function () {
        var a = this,
          isWin =
            !a.nodeName ||
            $.inArray(a.nodeName.toLowerCase(), [
              "iframe",
              "#document",
              "html",
              "body",
            ]) != -1;
        if (!isWin) return a;
        var b = (a.contentWindow || a).document || a.ownerDocument || a;
        return /webkit/i.test(navigator.userAgent) ||
          b.compatMode == "BackCompat"
          ? b.body
          : b.documentElement;
      });
    };
    $.fn.scrollTo = function (e, f, g) {
      if (typeof f == "object") {
        g = f;
        f = 0;
      }
      if (typeof g == "function") g = { onAfter: g };
      if (e == "max") e = 9e9;
      g = $.extend({}, h.defaults, g);
      f = f || g.duration;
      g.queue = g.queue && g.axis.length > 1;
      if (g.queue) f /= 2;
      g.offset = both(g.offset);
      g.over = both(g.over);
      return this._scrollable()
        .each(function () {
          if (!e) return;
          var d = this,
            $elem = $(d),
            targ = e,
            toff,
            attr = {},
            win = $elem.is("html,body");
          switch (typeof targ) {
            case "number":
            case "string":
              if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
                targ = both(targ);
                break;
              }
              targ = $(targ, this);
              if (!targ.length) return;
            case "object":
              if (targ.is || targ.style) toff = (targ = $(targ)).offset();
          }
          $.each(g.axis.split(""), function (i, a) {
            var b = a == "x" ? "Left" : "Top",
              pos = b.toLowerCase(),
              key = "scroll" + b,
              old = d[key],
              max = h.max(d, a);
            if (toff) {
              attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
              if (g.margin) {
                attr[key] -= parseInt(targ.css("margin" + b)) || 0;
                attr[key] -= parseInt(targ.css("border" + b + "Width")) || 0;
              }
              attr[key] += g.offset[pos] || 0;
              if (g.over[pos])
                attr[key] +=
                  targ[a == "x" ? "width" : "height"]() * g.over[pos];
            } else {
              var c = targ[pos];
              attr[key] =
                c.slice && c.slice(-1) == "%" ? (parseFloat(c) / 100) * max : c;
            }
            if (g.limit && /^\d+$/.test(attr[key]))
              attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
            if (!i && g.queue) {
              if (old != attr[key]) animate(g.onAfterFirst);
              delete attr[key];
            }
          });
          animate(g.onAfter);
          function animate(a) {
            $elem.animate(
              attr,
              f,
              g.easing,
              a &&
                function () {
                  a.call(this, e, g);
                }
            );
          }
        })
        .end();
    };
    h.max = function (a, b) {
      var c = b == "x" ? "Width" : "Height",
        scroll = "scroll" + c;
      if (!$(a).is("html,body")) return a[scroll] - $(a)[c.toLowerCase()]();
      var d = "client" + c,
        html = a.ownerDocument.documentElement,
        body = a.ownerDocument.body;
      return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d]);
    };
    function both(a) {
      return typeof a == "object" ? a : { top: a, left: a };
    }
  })(jQuery);
  (function ($) {
    var defaultsettings = {
      bgColor: "transparent",
      fgColor: "#fff",
      size: 120,
      donutwidth: 2,
      textsize: 45,
    };
    var methods = {
      init: function (options) {
        var initcanvas = true;
        if (typeof options == "object") {
          this.donutchartsettings = $.extend({}, defaultsettings, options);
          if (options["size"] && !options["donutwidth"])
            this.donutchartsettings["donutwidth"] = options["size"] / 4;
          if (options["size"] && !options["textsize"])
            this.donutchartsettings["textsize"] = options["size"] / 10;
        } else {
          if (typeof this.donutchartsettings == "object") initcanvas = false;
          else this.donutchartsettings = defaultsettings;
        }
        if (initcanvas) {
          $(this).css("position", "relative");
          $(this).css("width", this.donutchartsettings.size + "px");
          $(this).css("height", this.donutchartsettings.size + "px");
          $(this).html(
            "<canvas width='" +
              this.donutchartsettings.size +
              "' height='" +
              this.donutchartsettings.size +
              "'></canvas><div style='position:absolute;top:0;left:0;line-height:" +
              this.donutchartsettings.size +
              "px;text-align:center;width:" +
              this.donutchartsettings.size +
              "px;font-size:" +
              this.donutchartsettings.textsize +
              "px;font-weight:700px;'></div>"
          );
          var canvas = $("canvas", this).get(0);
          if (typeof G_vmlCanvasManager != "undefined")
            G_vmlCanvasManager.initElement(canvas);
          var ctx = canvas.getContext("2d");
          methods.drawBg.call(ctx, this.donutchartsettings);
        }
      },
      drawBg: function (settings) {
        this.clearRect(0, 0, settings.size, settings.size);
        this.beginPath();
        this.fillStyle = settings.bgColor;
        this.arc(
          settings.size / 2,
          settings.size / 2,
          settings.size / 2,
          0,
          2 * Math.PI,
          false
        );
        this.arc(
          settings.size / 2,
          settings.size / 2,
          settings.size / 2 - settings.donutwidth,
          0,
          2 * Math.PI,
          true
        );
        this.fill();
      },
      drawFg: function (settings, percent) {
        var ratio = (percent / 100) * 360;
        var startAngle = (Math.PI * -90) / 180;
        var endAngle = (Math.PI * (-90 + ratio)) / 180;
        this.beginPath();
        this.fillStyle = settings.fgColor;
        this.arc(
          settings.size / 2,
          settings.size / 2,
          settings.size / 2,
          startAngle,
          endAngle,
          false
        );
        this.arc(
          settings.size / 2,
          settings.size / 2,
          settings.size / 2 - settings.donutwidth,
          endAngle,
          startAngle,
          true
        );
        this.fill();
      },
    };
    $.fn.donutchart = function (method) {
      return this.each(function () {
        methods.init.call(this, method);
        if (method == "animate") {
          var percentage = $(this).attr("data-percent");
          var canvas = $(this).children("canvas").get(0);
          var percenttext = $(this).children("div");
          var dcs = this.donutchartsettings;
          if (canvas.getContext) {
            var ctx = canvas.getContext("2d");
            var j = 0;
            function animateDonutChart() {
              j++;
              methods.drawBg.call(ctx, dcs);
              methods.drawFg.apply(ctx, [dcs, j]);
              percenttext.text(j + "%");
              if (j >= percentage) clearInterval(animationID);
            }
            var animationID = setInterval(animateDonutChart, 20);
          }
        }
      });
    };
  })(jQuery);
}
