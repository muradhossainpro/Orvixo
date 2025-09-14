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
	// 04. Header Class Add Js
	// $('.tp-main-menu ul li a').each(function(){
	// 	$(this).wrapInner("<span></span>");
	// });


	////////////////////////////////////////////////////
	// 04. Header Class Add Js
	
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
	// 05. One Page Scroll Js
	// function scrollNav() {
	// 	$('.tp-onepage-menu li a').click(function(){
	// 	  $(".tp-onepage-menu li a.active").removeClass("active");     
	// 	  $(this).addClass("active");
		  
	// 	  $('html, body').stop().animate({
	// 		scrollTop: $($(this).attr('href')).offset().top - 96
	// 	  }, 300);
	// 	  return false;
	// 	});
	//   }
	// scrollNav();


	////////////////////////////////////////////////////
	// 06. Common Js
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
	// 07. Humburger Js
	// $('.tp-hamburger-toggle').on('click', function(){
	// 	$('.tp-header-side-menu').slideToggle('tp-header-side-menu');
	// });


	////////////////////////////////////////////////////
	// 08. Menu Style Js
	// if($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length){
	// 	let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
	// 	let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
	// 	mobileNavContainer.innerHTML = navContent;
	
	
	// 	let arrow = $(".tp-main-menu-mobile .has-dropdown > a");
	
	// 	arrow.each(function () {
	// 		let self = $(this);
	// 		let arrowBtn = document.createElement("BUTTON");
	// 		arrowBtn.classList.add("dropdown-toggle-btn");
	// 		arrowBtn.innerHTML = "<i class='fa-regular fa-angle-right'></i>";
	
	// 		self.append(function () {
	// 		  return arrowBtn;
	// 		});
	
	// 		self.find("button").on("click", function (e) {
	// 		  e.preventDefault();
	// 		  let self = $(this);
	// 		  self.toggleClass("dropdown-opened");
	// 		  self.parent().toggleClass("expanded");
	// 		  self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
	// 		  self.parent().parent().children(".submenu").slideToggle();
			  
	
	// 		});
	
	// 	  });
	// }


	////////////////////////////////////////////////////
	// 09. Search Js
    $(".tf-search-toggle").on('click', function(){
      $(".tf-header-search-bar").addClass("tf-search-open");
      $(".tf-offcanvas-overlay").addClass("tf-offcanvas-overlay-open");
    });

    $(".tf-search-close,.tf-offcanvas-overlay").on('click', function(){
      $(".tf-header-search-bar").removeClass("tf-search-open");
      $(".tf-offcanvas-overlay").removeClass("tf-offcanvas-overlay-open");
    });


	////////////////////////////////////////////////////
	// 10. Offcanvas Js
	// $(".offcanvas-open-btn").on("click", function () {
	// 	$(".offcanvas__area").addClass("offcanvas-opened");
	// 	$(".body-overlay").addClass("opened");
	// });
	// $(".offcanvas-close-btn ,.tp-main-menu-mobile .tp-onepage-menu li a  > *:not(button)").on("click", function () {
	// 	$(".offcanvas__area").removeClass("offcanvas-opened");
	// 	$(".body-overlay").removeClass("opened");
	// });



	////////////////////////////////////////////////////
	// 11. Body overlay Js
	// $(".body-overlay").on("click", function () {
	// 	$(".offcanvas__area").removeClass("offcanvas-opened");
	// 	$(".tp-search-area").removeClass("opened");
	// 	$(".cartmini__area").removeClass("cartmini-opened");
	// 	$(".body-overlay").removeClass("opened");
	// });


	////////////////////////////////////////////////////
	// 12. Nice Select Js
	// $('select').niceSelect();
	// $('.tp-header-search-category select').niceSelect();


	////////////////////////////////////////////////////
	13. //Back To Top Js
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
	// 13. Portfolio Filter
	  if ($('.grid').length != 0) {  
      var $grid = $('.grid').imagesLoaded( function() {
        $('.grid').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
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
	// Jquery Appear raidal
	// if (typeof ($.fn.knob) != 'undefined') {
	// 	$('.knob').each(function () {
	// 	var $this = $(this),
	// 	knobVal = $this.attr('data-rel');

	// 	$this.knob({
	// 	'draw': function () {
	// 		$(this.i).val(this.cv + '%')
	// 	}
	// 	});

	// 	$this.appear(function () {
	// 	$({
	// 		value: 0
	// 	}).animate({
	// 		value: knobVal
	// 	}, {
	// 		duration: 2000,
	// 		easing: 'swing',
	// 		step: function () {
	// 		$this.val(Math.ceil(this.value)).trigger('change');
	// 		}
	// 	});
	// 	}, {
	// 	accX: 0,
	// 	accY: -150
	// 	});
	// });
	// }


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
	// Hero Active
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
					slidesPerView:3,
				},
				'767': {
					slidesPerView:2,
				},
				'576': {
					slidesPerView:2,
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


	////////////////////////////////////////////////////
	// Project Active
	// var slider = new Swiper('.tp-project-active', {
	// 	slidesPerView: 4,
	// 	spaceBetween: 25,
	// 	loop: true,
	// 	breakpoints: {
	// 		'1400': {
	// 			slidesPerView: 4,
	// 		},
	// 		'1200': {
	// 			slidesPerView: 3,
	// 		},
	// 		'992': {
	// 			slidesPerView: 2,
	// 		},
	// 		'768': {
	// 			slidesPerView: 2,
	// 		},
	// 		'576': {
	// 			slidesPerView: 1,
	// 		},
	// 		'0': {
	// 			slidesPerView: 1,
	// 		},
	// 	},
	// });



	////////////////////////////////////////////////////
	// Testimonial Active 2
	// if ($('.tp-testimonial-2-active').length > 0) {
	// 	var slider = new Swiper('.tp-testimonial-2-active', {
	// 		slidesPerView: 2,
	// 		spaceBetween: 30,
	// 		loop: true,
	// 		breakpoints: {
	// 			'1700':{
	// 				slidesPerView:2,
	// 			},
	// 			'1400':{
	// 				slidesPerView:2,
	// 			},
	// 			'1200':{
	// 				slidesPerView:2,
	// 			},
	// 			'992': {
	// 				slidesPerView:2,
	// 			},
	// 			'767': {
	// 				slidesPerView:1,
	// 			},
	// 			'576': {
	// 				slidesPerView:1,
	// 			},
	// 			'0': {
	// 				slidesPerView:1,
	// 			},
	// 			},
	// 			// Navigation arrows
	// 			navigation: {
	// 				nextEl: ".testimonial-button-next-1",
	// 				prevEl: ".testimonial-button-prev-1",
	// 			},
	// 			});
	// 		}



	////////////////////////////////////////////////////
	// Testimonial Active 3
	// if ($('.tp-testimonial-3-active').length > 0) {
	// 	var slider = new Swiper('.tp-testimonial-3-active', {
	// 		slidesPerView: 2,
	// 		spaceBetween: 30,
	// 		loop: true,
	// 		breakpoints: {
	// 			'1700':{
	// 				slidesPerView:2,
	// 			},
	// 			'1400':{
	// 				slidesPerView:2,
	// 			},
	// 			'1200':{
	// 				slidesPerView:2,
	// 			},
	// 			'767': {
	// 				slidesPerView:2,
	// 			},
	// 			'576': {
	// 				slidesPerView:1,
	// 			},
	// 			'0': {
	// 				slidesPerView:1,
	// 			},
	// 			},
	// 			});
	// 		}



	////////////////////////////////////////////////////
	// Team Active
	// if ($('.tp-team-3-active').length > 0) {
	// 	var slider = new Swiper('.tp-team-3-active', {
	// 		slidesPerView: 3,
	// 		spaceBetween: 30,
	// 		centeredSlides: true,
	// 		loop: true,
	// 		pagination: {
	// 			el: '.slider_pagination',
	// 			clickable: true,
	// 		  },
	// 		breakpoints: {
	// 			'1700':{
	// 				slidesPerView:3,
	// 			},
	// 			'1400':{
	// 				slidesPerView:3,
	// 			},
	// 			'1200':{
	// 				slidesPerView:3,
	// 			},
	// 			'767': {
	// 				slidesPerView:3,
	// 			},
	// 			'576': {
	// 				slidesPerView:1,
	// 			},
	// 			'0': {
	// 				slidesPerView:1,
	// 			},
	// 			},
	// 			});
	// 		}


	////////////////////////////////////////////////////
	// Blog Active
	// if ($('.tp-blog-post-active').length > 0) {
	// var slider = new Swiper('.tp-blog-post-active', {
	// 	slidesPerView: 1,
	// 	spaceBetween: 30,
	// 	loop: true,
	// 	breakpoints: {
	// 		'1700':{
	// 			slidesPerView:1,
	// 		},
	// 		'1400':{
	// 			slidesPerView:1,
	// 		},
	// 		'1200':{
	// 			slidesPerView:1,
	// 		},
	// 		'767': {
	// 			slidesPerView:1,
	// 		},
	// 		'576': {
	// 			slidesPerView:1,
	// 		},
	// 		'0': {
	// 			slidesPerView:1,
	// 		},
	// 		},
	// 		// Navigation arrows
	// 		navigation: {
	// 			nextEl: ".tp-blog-next-1",
	// 			prevEl: ".tp-blog-prev-1",
	// 		},
	// 	});
	// 	}


	////////////////////////////////////////////////////
	// 15. Masonary Js
	// $('.grid').imagesLoaded(function () {
	// 	// init Isotope
	// 	var $grid = $('.grid').isotope({
	// 		itemSelector: '.grid-item',
	// 		percentposition: true,
	// 		masonry: {
	// 			// use outer width of grid-sizer for columnWidth
	// 			columnWidth: '.grid-item',
	// 		}
	// 	});


	// 	// filter items on button click
	// 	$('.masonary-menu').on('click', 'button', function () {
	// 		var filterValue = $(this).attr('data-filter');
	// 		$grid.isotope({ filter: filterValue });
	// 	});

	// 	//for menu active class
	// 	$('.masonary-menu button').on('click', function (event) {
	// 		$(this).siblings('.active').removeClass('active');
	// 		$(this).addClass('active');
	// 		event.preventDefault();
	// 	});

	// });

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	$('.popup-image-footer').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 5.0,
			scalarY: 5.0,
		});
	};

	////////////////////////////////////////////////////
	// 16. Wow Js
	new WOW().init();


})(jQuery);