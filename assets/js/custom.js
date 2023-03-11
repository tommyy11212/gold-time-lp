$(document).on('ready',function() {
	"use strict";
	/*----------------------------------------------
	 -----------Sticky Header  --------------------
	 -------------------------------------------------*/
	function navBaar() {
		var menu_space = $('.menu_space');
			var headerHeight = menu_space.height();
		if (menu_space.length) {
			$(window).on('scroll', function() {
				var top_scroll = $(window).scrollTop();
				if (top_scroll > headerHeight) {
					menu_space.addClass('stricky');
				} else {
					menu_space.removeClass('stricky');
				}
			});
		}
	}

	navBaar();
	$(window).on('resize', function() {
		navBaar();
	});
	//===============Mobile nav Function============
	var menu = $('#menu');
	var navigation = $('.navigation');
	menu.on('click', function() {
		if ($(window).width() <= 767) {
			navigation.slideToggle('normal');
		}
		return false;
	});

	/* ---------------------------------------------
	 Smooth scroll
	 --------------------------------------------- */
	var navbar_collapsejs = $('.navbar-collapse');
	$(document).on("scroll", onScroll);
	var navLinks = $('.nav_scroll li a[href^="#"]');
	navLinks.on("click", function(e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop : $(anchor.attr('href')).offset().top - 50
		}, 1000);
		e.preventDefault();
		if ($(window).width() <= 767) {
			navigation.slideUp('normal');

		}
	});

	function onScroll(event) {
		var homeClass = $('#home');
		var navLink = $('.nav_scroll li a');
		if (homeClass.length) {
			var scrollPos = $(document).scrollTop();
			navLink.each(function() {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				if (refElement.position().top - 50 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					navLink.removeClass("active");
					currLink.addClass("active");
				} else {
					// currLink.removeClass("active");
				}
			});
		}

	}

	/*----------------------------------------------
	 -----------Masonry Grid view Function  --------------------
	 -------------------------------------------------*/
	var container_grid = $(".container-grid");
	container_grid.imagesLoaded(function() {
		container_grid.isotope({
			itemSelector : ".nf-item",
			layoutMode : "fitRows"
		});
	});

	/*----------------------------------------------
	 -----------Masonry Grid Filter Function  --------------------
	 -------------------------------------------------*/
	var container_filter = $(".container-filter");
	container_filter.on("click", ".categories", function() {
		var e = $(this).attr("data-filter");
		container_grid.isotope({
			filter : e
		});
	});

	/*----------------------------------------------
	 -----------Masonry filter Active Function  --------------------
	 -------------------------------------------------*/
	container_filter.each(function(e, a) {
		var i = $(a);
		i.on("click", ".categories", function() {
			i.find(".active").removeClass("active"), $(this).addClass("active");
		});
	});

	/*----------------------------------------------
	 -----------Light Function  --------------------
	 -------------------------------------------------*/
	var fLight = $(".fancylight");
	if (fLight.length) {
		fLight.fancybox({
			openEffect : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
	// HOME TYPED JS
	 var typeJs = $(".text_type");
	if (typeJs.length) {
	var text1 = typeJs.data('text1');
	 var text2 = typeJs.data('text2');
	 typeJs.typed({
		 strings : [text1, text2],
		 typeSpeed : 10,
		 loop : true,
		 backDelay : 2000
	 });
	}
	/*----------------------------------------------
	 -----------Counter Function  --------------------
	 -------------------------------------------------*/
	var counter = $('.counter');
	if (counter.length) {
		counter.appear(function() {
			counter.each(function() {
				var e = $(this),
				    a = e.attr("data-count");
				$({
					countNum : e.text()
				}).animate({
					countNum : a
				}, {
					duration : 8e3,
					easing : "linear",
					step : function() {
						e.text(Math.floor(this.countNum));
					},
					complete : function() {
						e.text(this.countNum);
					}
				});
			});
		});
	}


//	Index_Testimonial
	var text_slider = $(".text_slider");
	text_slider.owlCarousel({
		loop : true,
		nav : true,
		dots : false,
		center : false,
		margin :0,
		responsive : {
			0 : {
				items : 1,
			},
			767 : {
				items : 1,
			},
			1200 : {
				items : 1
			}
		},
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"]

	});

	// back-to-top
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').on('click',function() {

		$('body,html').animate({
			scrollTop : 0
		}, 800);
		return false;
	});

	/*----------------------------------------------
	----------- Loader Function  --------------------
	-------------------------------------------------*/
	$(window).on('load',function() {
	var preloader = $("#preloader");
	preloader.delay(500).fadeOut();

	});

	// End
});
