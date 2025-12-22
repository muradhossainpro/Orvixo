/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Sticky Header Js
03.Header Hight Js
04. Header Class Add Js
05. One Page Scroll Js
06. Common Js
07. Humburger Js
08. Menu Style Js
08. filter
09. Search Js
10. Offcanvas Js
11. Body Overlay Js
12. Nice Select Js
14. Back to Top Js
15. Masonry Js
16. Wow Js
17. Counter Js
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});

	////////////////////////////////////////////////////
	// 02. Sticky Header Js
	 windowOn.on('scroll', function () {
      var scroll = windowOn.scrollTop();
      if (scroll < 100) {
        $("#tf-header-sticky").removeClass("tf-header-sticky");
      } else {
        $("#tf-header-sticky").addClass("tf-header-sticky");
      }
    });
	  


	////////////////////////////////////////////////////
	// 03. Counter Js
	
	// When window finishes loading
        $(window).on('load', function (event) {
        $('#preloader').delay(1000).fadeOut(500);

    // Odometer animation on scroll
		$('.odometer').waypoint(function (direction) {
			if (direction === 'down') {
				let countNumber = $(this.element).attr("data-count");
				$(this.element).html(countNumber);
			}
		}, {
			offset: '80%'
		});
		});

		// When preloader close button is clicked
		$(".preloader-close").on("click", function () {
			$('#preloader').delay(0).fadeOut(500);

			// Odometer animation on scroll (again for safety)
			$('.odometer').waypoint(function (direction) {
				if (direction === 'down') {
					let countNumber = $(this.element).attr("data-count");
					$(this.element).html(countNumber);
				}
			}, {
				offset: '80%'
			});
			});



	////////////////////////////////////////////////////
	// 04. Common Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-color]").each(function () {
		$(this).css("color", $(this).attr("data-color"));
	});




	////////////////////////////////////////////////////
	// 05. Search Js
    $(".tf-search-toggle").on('click', function(){
      $(".tf-header-search-bar").addClass("tf-search-open");
      $(".tf-offcanvas-overlay").addClass("tf-offcanvas-overlay-open");
    });

    $(".tf-search-close,.tf-offcanvas-overlay").on('click', function(){
      $(".tf-header-search-bar").removeClass("tf-search-open");
      $(".tf-offcanvas-overlay").removeClass("tf-offcanvas-overlay-open");
    });


	////////////////////////////////////////////////////
	// 6. Offcanvas Js
    $(".tf-offcanvas-toogle").on('click', function(){
      $(".tf-offcanvas").addClass("tf-offcanvas-open");
      $(".tf-offcanvas-overlay").addClass("tf-offcanvas-overlay-open");
    });
    $(".tf-offcanvas-close-toggle,.tf-offcanvas-overlay").on('click', function(){
      $(".tf-offcanvas").removeClass("tf-offcanvas-open");
      $(".tf-offcanvas-overlay").removeClass("tf-offcanvas-overlay-open");
    });



	////////////////////////////////////////////////////
	// 6. Mobile Menu
    var tfMenuWrap = $('.tf-mobile-menu-active > ul').clone();
    var tfSideMenu = $('.tf-offcanvas-menu nav');
    tfSideMenu.append(tfMenuWrap);
    if ($(tfSideMenu).find('.sub-menu, .tf-mega-menu').length != 0) {
      $(tfSideMenu).find('.sub-menu, .tf-mega-menu').parent().append('<button class="tf-menu-close"><i class="fas fa-chevron-right"></i></button>');
    }

    var sideMenuList = $('.tf-offcanvas-menu nav > ul > li button.tf-menu-close, .tf-offcanvas-menu nav > ul li.has-dropdown > a');
    $(sideMenuList).on('click', function (e) {
      e.preventDefault();
      if (!($(this).parent().hasClass('active'))) {
        $(this).parent().addClass('active');
        $(this).siblings('.sub-menu, .tf-mega-menu').slideDown();
      } else {
        $(this).siblings('.sub-menu, .tf-mega-menu').slideUp();
        $(this).parent().removeClass('active');
      }
    });



	////////////////////////////////////////////////////
	7. //Back To Top Js
    var btn = $('#back-to-top');
    windowOn.scroll(function() {
      if (windowOn.scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function() {
      $('html, body').animate({scrollTop:0}, '300');
    });



	////////////////////////////////////////////////////
	// 8. Portfolio Filter
	  if ($('.grid').length != 0) {  
      var $grid = $('.grid').imagesLoaded( function() {
        $('.grid').isotope({
          itemSelector: '.grid-item',
          percentfosition: true,
          masonry: {
            columnWidth: 1
          }
        })

      // filter items on button click
      $('.tfportfolio-filter').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
        //for menu active class
        $('.tfportfolio-filter button').on('click', function (event) {
          $(this).siblings('.active').removeClass('active');
          $(this).addClass('active');
          event.preventDefault();
        });
      });
    	}




	////////////////////////////////////////////////////
	// Hero Active
	if ($('.tf-hero-active').length > 0) {
		var slider = new Swiper('.tf-hero-active', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
      		speed:2000,
			autoplay: {
				delay: 3000,
			},
			// Navigation arrows
	      	pagination: {
				el: ".tf-hero-dots",
				clickable: true,
        	},
        navigation: {
            nextEl: ".tf-hero-swiper-next",
            prevEl: ".tf-hero-swiper-prev",
        },
			});
			}


	
	////////////////////////////////////////////////////
	// Hero Active 2
	if ($('.tf-hero-active-2').length > 0) {
		var slider = new Swiper('.tf-hero-active-2', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			effect: 'fade',
			autoplay: {
				delay: 5000,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".tf-hero-arrow-next",
				prevEl: ".tf-hero-arrow-prev",
			},
			});
			}

			
		


	////////////////////////////////////////////////////
	// Service Active
	if ($('.tf-service-active').length > 0) {
		var slider = new Swiper('.tf-service-active', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			speed:2000,
			autoplay: {
				delay: 3000,
			},
			breakpoints: {
				'1700':{
					slidesPerView:3,
				},
				'1400':{
					slidesPerView:3,
				},
				'1200':{
					slidesPerView:3,
				},
				'767': {
					slidesPerView:2,
				},
				'576': {
					slidesPerView:1,
				},
				'0': {
					slidesPerView:1,
				},
				},
				// Navigation arrows
				navigation: {
					nextEl: ".tfservices-swiper-next",
					prevEl: ".tfservices-swiper-prev",
				},
			});
			}


	////////////////////////////////////////////////////
	// Testimonial Active
	if ($('.tf-testimonial-active').length > 0) {
		var slider = new Swiper('.tf-testimonial-active', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			speed:2000,
				autoplay: {
					delay: 3000,
				},
			breakpoints: {
				'1700':{
					slidesPerView:3,
				},
				'1400':{
					slidesPerView:3,
				},
				'1200':{
					slidesPerView:3,
				},
				'992':{
					slidesPerView:2,
				},
				'767': {
					slidesPerView:2,
				},
				'576': {
					slidesPerView:1,
				},
				'0': {
					slidesPerView:1,
				},
				},
				});
			}


	////////////////////////////////////////////////////
	// Brand Active
	var slider = new Swiper('.tf-brand-active', {
		slidesPerView: 'auto',
        spaceBetween: 80,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 2000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
          },
	});



	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});


	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});



	////////////////////////////////////////////////////
	// 16. Wow Js
	new WOW().init();


})(jQuery);