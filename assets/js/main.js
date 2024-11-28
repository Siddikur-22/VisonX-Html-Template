// --------------------------
//       Main js file
// --------------------------

(function ($) {
  "use strict";
	// Preloader 
	jQuery(window).on('load', function () {
		$(".preloader").delay(1600).fadeOut("slow");
	});

	$('.sidebar-button').on("click", function () {
        $(this).toggleClass('active');
    });

	document.querySelector('.sidebar-button').addEventListener('click', () =>
		document.querySelector('.main-menu').classList.toggle('show-menu'));

	$('.menu-close-btn').on("click", function () {
		$('.main-menu').removeClass('show-menu');
	});


  const element = document.querySelectorAll(".badge__char");
  const step = 360 / element.length;

  element.forEach((elem, i) => {
    elem.style.setProperty("--char-rotate", i * step + "deg");
  });

  const foo = 360 / 7;

  for (let i = 0; i <= 7; i++) {
    console.log(i * foo + "deg");
  }

  // //Counter up
  // $('.counter').counterUp({
  // 	delay: 10,
  // 	time: 1500
  // });

  // ====================
  // Progrees Bar
  // ====================
  var skillPers = document.querySelectorAll(".experience-bar-per");

  skillPers.forEach(function (skillPer) {
    var per = parseFloat(skillPer.getAttribute("data-per"));
    skillPer.style.width = per + "%";

    var animatedValue = 0;
    var startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)

      if (stepPercentage < 1) {
        animatedValue = per * stepPercentage;
        skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
        requestAnimationFrame(animate);
      } else {
        animatedValue = per;
        skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
      }
    }
    requestAnimationFrame(animate);
  });

  // ---------------
  // service image 
  const serviceImgItem = document.querySelectorAll(".services-wrap .single-services ");

	function __followImageCursor(event, serviceImgItem) {
	  const contentBox = serviceImgItem.getBoundingClientRect();
	  const dx = event.clientX - contentBox.x;
	  const dy = event.clientY - contentBox.y;
	  serviceImgItem.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(12deg)`;
	}
  
	serviceImgItem.forEach((item, i) => {
	  item.addEventListener("mousemove", (event) => {
		setInterval(__followImageCursor(event, item), 100);
	  });
	});




  //home1-banner-slider
  var swiper = new Swiper(".banner-img-slider", {
    slidesPerView: 1,
    speed: 2500,
    spaceBetween: 25,
    effect: "fade", // Use the fade effect
    fadeEffect: {
      crossFade: true, // Enable cross-fade transition
    },
    autoplay: {
      delay: 3000, // Autoplay duration in milliseconds
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".home1-banner-next",
      prevEl: ".home1-banner-prev",
    },
  });
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
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });

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

  // right sidebar start
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


})(jQuery);
