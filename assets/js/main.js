// --------------------------
//       Main js file
// --------------------------

(function ($) {
  "use strict";


  	//Counter up
	// $('.counter').counterUp({
	// 	delay: 10,
	// 	time: 1500
	// });

  // logo area marquee start
  $(".marquee_text").marquee({
    direction: "left",
    duration: 20000,
    gap: 50,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true,
  });
  $(".marquee_text-two").marquee({
    direction: "right",
    duration: 20000,
    gap: 50,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true,
  });
    // logo area marquee end
      // smooth scroll start
  function scrollTo() {
    $(window).scrollTo({ top: 0, behavior: "smooth" });
  }
// smooth scroll end

  // circle run animation start
  const element = document.querySelectorAll(".badge__char");
  const step = 360 / element.length;
  element.forEach((elem, i) => {
    elem.style.setProperty("--char-rotate", i * step + "deg");
  });
  const foo = 360 / 7;
  for (let i = 0; i <= 7; i++) {
    console.log(i * foo + "deg");
  }
  // circle run animation end

// right sidebar start

  // sidebar
  $(".right-sidebar-button").on("click", function () {
    $(".right-sidebar-menu").addClass("show-right-menu");
  });
  $(".right-sidebar-close-btn").on("click", function () {
    $(".right-sidebar-menu").removeClass("show-right-menu");
  });

  jQuery(".dropdown-icon").on("click", function () {
    jQuery(this).toggleClass("active").next("ul").slideToggle();
    jQuery(this).parent().siblings().children("ul").slideUp();
    jQuery(this).parent().siblings().children(".active").removeClass("active");
  });
//  right sidebar end

 
  // home1 testimonial Slider start
  var swiper = new Swiper(".home1-testimonial-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    // loop: true,
    effect: "fade", // Use the fade effect
    fadeEffect: {
      crossFade: true, // Enable cross-fade transition
    },
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial-slider-next",
      prevEl: ".testimonial-slider-prev",
    },
  });
  // home1 testimonial Slider end

  // Home1 Team Slider
  var swiper = new Swiper(".home1-team-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      386: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });
  // Home1 Team Slider
  // Preloader
  jQuery(window).on("load", function () {
    $(".preloader").delay(1600).fadeOut("slow");
  });

  $(".sidebar-button").on("click", function () {
    $(this).toggleClass("active");
  });

  document
    .querySelector(".sidebar-button")
    .addEventListener("click", () =>
      document.querySelector(".main-menu").classList.toggle("show-menu")
    );

  $(".menu-close-btn").on("click", function () {
    $(".main-menu").removeClass("show-menu");
  });

  // Title Animation
  let splitTitleLines = gsap.utils.toArray(".text-animation");

  splitTitleLines.forEach((splitTextLine) => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 90%",
        end: "bottom 60%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });

    const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" });
    tl2.from(itemSplitted.lines, {
      duration: 1,
      delay: 0.3,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });
  });

  // 27. Text Animation
  let splitTextLines = gsap.utils.toArray(".text-animation p");

  splitTextLines.forEach((splitTextLine) => {
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 90%",
        duration: 2,
        end: "bottom 60%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });

    const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" });
    tl3.from(itemSplitted.lines, {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });
  });

  handleResize();
  window.addEventLis;
})(jQuery);
