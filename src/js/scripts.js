'use strict';
function winWD() {
	var result = $(window).width();
	return result;
}
function initHeaderMenu() {
	$('#headerDropdownMenuButton').on('click',function() {
		$(this).parent().toggleClass('show');
	});
	$('.headerDropDownMenuItemMainLink').on('click',function() {
		$(this).toggleClass('active');
		$(this).next().toggleClass('show');
		$('.headerDropdownMenuInnerItemLink.subCat').removeClass('active').next().removeClass('show');
	});
	$('.headerDropdownMenuInnerItemLink.subCat').on('click',function() {
		$(this).toggleClass('active');
		$(this).next().toggleClass('show');
	});
}
function initNewsInnerPagenSlider() {
	var newsInnerPagenSlider = $('.newsInnerPagenSlider');
	newsInnerPagenSlider.owlCarousel({
		nav: true,
		navText: ['<img src="assets/images/slideLeft.png">','<img src="assets/images/slideRight.png">'],
		margin: 20,
		dots:false,
		loop:true,
		responsiveClass:true,
		responsive : {
			0 : {
				items:1
			},
			768 : {
				items:2
			}
		}
	});
}
function initAdvantagesSlider() {
	var advantagesSlider = $('.advantagesSlider');
	if (typeof advantagesSlider[0] != 'undefined') {
		function checkMainSlide(e) {
			if (typeof e != 'undefined') {
				$('.advantagesBlock #currentItem').text(e.item.index + 1);
			}
			var slideElemCount = advantagesSlider[0].children[0].children[0].childElementCount;
			$('.advantagesBlock #maxItem').text(slideElemCount);
			advantagesSlider.find('.owl-item').removeClass('big');
			advantagesSlider.find('.active:eq(1)').addClass('big');
		}
		advantagesSlider.owlCarousel({
			nav: true,
			navText: ['<img src="assets/images/slideLeft.png">','<img src="assets/images/slideRight.png">'],
			margin: 10,
			loop:true,
			responsiveClass:true,
			responsive : {
				0 : {
					items:1
				},
				768 : {
					items:3
				},
				992 : {
					items:3
				},
				1200 : {
					items:3
				},
				1900 : {
					items:3
				}
			}
		});
		checkMainSlide();
		advantagesSlider.on('translated.owl.carousel', function(e) {
			checkMainSlide(e);
		});
	}
}
function initExpertsSlider() {
	var expertsSlider = $('.expertsSlider');
	expertsSlider.owlCarousel({
		nav:false,
		dots: true,
		items:1,
		navText: ['<img src="assets/images/slideLeft.png">','<img src="assets/images/slideRight.png">'],
		responsive: {
			0: {
				nav: true
			},
			768: {
				nav:false
			}
		}
	});
}
function initServicesSliders() {
	var servicesSlider1 = $('.servicesSlider1');
	var servicesSlider2 = $('.servicesSlider2');
	var servicesSlider3 = $('.servicesSlider3');
	var servicesSlidersOptions = {
		nav:true,
		navText: ['<img src="assets/images/slideLeft.png">','<img src="assets/images/slideRight.png">'],
		dots:true,
		responsiveClass:true,
		margin:50,
		responsive : {
			0 : {
				items:1
			},
			768 : {
				items:3
			},
			992 : {
				items:3
			},
			1200 : {
				items:3
			},
			1900 : {
				items:3
			}
		}
	}
	$('.servicesTabsBlock a[data-toggle="tab"]').on('show.bs.tab', function(e) {
		$('.servicesTabsBlock .tab-pane').removeClass('active show');
	});
	servicesSlider1.owlCarousel(servicesSlidersOptions);
	servicesSlider2.owlCarousel(servicesSlidersOptions);
	servicesSlider3.owlCarousel(servicesSlidersOptions);
}
function initReviewsSlider() {
	var reviewsSlider = $('.reviewsSlider');
	if (typeof reviewsSlider[0] != 'undefined') {
		var reviewsSliderDescription = $('.reviewsSliderDescription');
		function checkMainSlide(e) {
			var slideElemCount = reviewsSlider[0].children[0].children[0].childElementCount;
			reviewsSlider.find('.owl-item').removeClass('current');
			reviewsSlider.find('.active:eq(1)').addClass('current');
		}
		reviewsSlider.owlCarousel({
			dots: false,
			nav:true,
			navText: ['<img src="assets/images/slideLeft.png">','<img src="assets/images/slideRight.png">'],
			loop:true,
			margin:25,
			/*autoWidth:true,*/
			items:4,
			responsive: {
				0: {
					items:1
				},
				768: {
					items:4
				}
			}
		});
		checkMainSlide();
		reviewsSlider.on('translated.owl.carousel', function(e) {
			checkMainSlide(e)
			reviewsSliderDescription.trigger('to.owl.carousel', e.item.index);
		});
		reviewsSliderDescription.owlCarousel({
			dots: false,
			nav:false,
			loop:true,
			margin:25,
			items:1,
			startPosition:4,
			mouseDrag:false,
			touchDrag:false
		/*responsive: {
			0: {
				startPosition:1
			},
			768: {
				startPosition:4
			}
		}*/
	});
		reviewsSliderDescription.on('translated.owl.carousel', function(e) {
			console.log(e.item.index);
		});
	}
}
function initPriceSlider() {
	var priceSlide = $('.priceSlide');
	if (typeof priceSlide[0] != 'undefined') {
		function checkMainSlide(e) {
			var slideElemCount = priceSlide[0].children[0].children[0].childElementCount;
			priceSlide.find('.owl-item').removeClass('current');
			priceSlide.find('.active:eq(1)').addClass('current');
		}
		priceSlide.owlCarousel({
			nav:true,
			dots: true,
			items:3,
			loop:true,
			margin:50,
			navText: ['<img src="assets/images/slideLeft.png">','<img src="assets/images/slideRight.png">'],
			responsive: {
				0: {
					items:1
				},
				768: {
					items:3
				}
			}
		});
		checkMainSlide();
		priceSlide.on('translated.owl.carousel', function(e) {
			checkMainSlide(e)
		});
	}
}
function initOurWorkersSlider() {
	var ourWorkersSlider = $('.ourWorkersSlider');
	ourWorkersSlider.owlCarousel({
			nav:true,
			dots: true,
			loop:true,
			margin:50,
			navText: ['<img src="assets/images/slideLeft.png">','<img src="assets/images/slideRight.png">'],
			responsive: {
				0: {
					items:1
				},
				768: {
					items:3
				},
				992: {
					items:4
				}
			}
		});
}
$(document).ready(function () {
	console.log('script run...');
	
	initHeaderMenu();
	initAdvantagesSlider();
	initExpertsSlider();
	initServicesSliders();
	initReviewsSlider();
	initPriceSlider();
	initOurWorkersSlider();
	initNewsInnerPagenSlider();
	console.log('script end.');
});

$(window).on('scroll',function() {
	var scrollbody = $(window).scrollTop();
	if (scrollbody >= 200) {
		$('.headerFixedLine').addClass('fixed');
		$('.headerFixedLine .logo').removeClass('d-none');
		$('.headerFixedLine .logo').addClass('col');
		$('.headerFixedMenuLeft').parent().addClass('d-xl-block col-xl-3 col-lg-3');
		$('.headerFixedMenuRight').parent().removeClass('col-lg-12');
		$('.headerFixedMenuRight').parent().addClass('d-none d-xl-block col-xl col-lg-5');
		$('.headerFixedSubMenu').parent().removeClass('d-none');
		$('.headerFixedSubMenu').parent().addClass('col-10 col-xl-2 col-lg-10');
	} else {
		$('.headerFixedLine').removeClass('fixed');
		$('.headerFixedLine .logo').addClass('d-none');
		$('.headerFixedLine .logo').removeClass('col');
		$('.headerFixedMenuLeft').parent().removeClass('d-xl-block col-xl-3 col-lg-3');
		$('.headerFixedMenuRight').parent().addClass('col-lg-12');
		$('.headerFixedMenuRight').parent().removeClass('d-none d-xl-block col-xl col-lg-5');
		$('.headerFixedSubMenu').parent().addClass('d-none');
		$('.headerFixedSubMenu').parent().removeClass('col-10 col-xl-2 col-lg-10');
	}
})