 (function ($) {
 	"use strict";
	 
	 
 	$('#container').imagesLoaded(function () {

 		$('.filter-button-group a').on('click', function () {
 			var filterValue = $(this).attr('data-filter');
 			$grid.isotope({
 				filter: filterValue
 			});
 		});

 		var $grid = $('.grid').isotope({
 			itemSelector: '.grid-item',
 			percentPosition: true,
 			masonry: {

 				columnWidth: '.grid-item'
 			}
 		})

 	});

	// Youtube Video
	 
 	jQuery("a.bla-1").YouTubePopUp();
 	jQuery("a.bla-2").YouTubePopUp({
 		autoplay: 0
 	}); 

	 
 	
	 

	// Bootstrap Nav mini window
 	if (jQuery(window).width() < 960) {
 		jQuery('.navbar-collapse a').click(function (e) {
 			if (jQuery(e.target).is('a') && jQuery(e.target).attr('class') != 'dropdown-toggle') {
 				jQuery('.navbar-collapse').collapse('toggle');
 			}
 		});
 	}

/// jquery ligght Box
	 
 	lightbox.option({
 		'resizeDuration': 200,
 		'wrapAround': true,
 		'maxHeight': 300,
 		'positionFromTop': 150
 	})

	
	/// back to Top
	
 	$(window).scroll(function () {
 		if ($(this).scrollTop() > 450) {
 			$('header').addClass("sticky");
 		} else {
 			$('header').removeClass("sticky");
 		}
 	});

     
/// WOW
 	new WOW().init();
	 
	 
	/// scroll nav  
 	$(document).ready(function () {
 		$('nav a').pageNav({
 			'scroll_shift': $('nav').outerHeight() - 60
 		});
 	});
	 
 })(jQuery);