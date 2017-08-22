'use strict';
function winWD() {
	var result = $(window).width();
	return result;
}
function initHeaderMenu() {
	$('#headerDropdownMenuButton').on('click',function() {
		$(this).parent().toggleClass('show');
	});
	$('.headerDropdiwnMenuItemMainLink').on('click',function() {
		$(this).toggleClass('active');
		$(this).next().toggleClass('show');
		$('.headerDropdownMenuInnerItemLink.subCat').removeClass('active').next().removeClass('show');
	});
	$('.headerDropdownMenuInnerItemLink.subCat').on('click',function() {
		$(this).toggleClass('active');
		$(this).next().toggleClass('show');
	});
}
function initAdvantagesSlider() {
	var advantagesSlider = $('.advantagesSlider');
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
$(document).ready(function () {
	console.log('script run...');
	
	initHeaderMenu();
	initAdvantagesSlider();
	initExpertsSlider();
	initServicesSliders();
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