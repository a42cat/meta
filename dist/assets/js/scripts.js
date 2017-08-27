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
function initReviewsSlider() {
	var reviewsSlider = $('.reviewsSlider');
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
function initPriceSlider() {
	var priceSlide = $('.priceSlide');
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
$(document).ready(function () {
	console.log('script run...');
	
	initHeaderMenu();
	initAdvantagesSlider();
	initExpertsSlider();
	initServicesSliders();
	initReviewsSlider();
	initPriceSlider();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuZnVuY3Rpb24gd2luV0QoKSB7XHJcblx0dmFyIHJlc3VsdCA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gaW5pdEhlYWRlck1lbnUoKSB7XHJcblx0JCgnI2hlYWRlckRyb3Bkb3duTWVudUJ1dHRvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblx0fSk7XHJcblx0JCgnLmhlYWRlckRyb3BEb3duTWVudUl0ZW1NYWluTGluaycpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhpcykubmV4dCgpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblx0XHQkKCcuaGVhZGVyRHJvcGRvd25NZW51SW5uZXJJdGVtTGluay5zdWJDYXQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJykubmV4dCgpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0fSk7XHJcblx0JCgnLmhlYWRlckRyb3Bkb3duTWVudUlubmVySXRlbUxpbmsuc3ViQ2F0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCh0aGlzKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxuXHR9KTtcclxufVxyXG5mdW5jdGlvbiBpbml0QWR2YW50YWdlc1NsaWRlcigpIHtcclxuXHR2YXIgYWR2YW50YWdlc1NsaWRlciA9ICQoJy5hZHZhbnRhZ2VzU2xpZGVyJyk7XHJcblx0ZnVuY3Rpb24gY2hlY2tNYWluU2xpZGUoZSkge1xyXG5cdFx0aWYgKHR5cGVvZiBlICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdCQoJy5hZHZhbnRhZ2VzQmxvY2sgI2N1cnJlbnRJdGVtJykudGV4dChlLml0ZW0uaW5kZXggKyAxKTtcclxuXHRcdH1cclxuXHRcdHZhciBzbGlkZUVsZW1Db3VudCA9IGFkdmFudGFnZXNTbGlkZXJbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRFbGVtZW50Q291bnQ7XHJcblx0XHQkKCcuYWR2YW50YWdlc0Jsb2NrICNtYXhJdGVtJykudGV4dChzbGlkZUVsZW1Db3VudCk7XHJcblx0XHRhZHZhbnRhZ2VzU2xpZGVyLmZpbmQoJy5vd2wtaXRlbScpLnJlbW92ZUNsYXNzKCdiaWcnKTtcclxuXHRcdGFkdmFudGFnZXNTbGlkZXIuZmluZCgnLmFjdGl2ZTplcSgxKScpLmFkZENsYXNzKCdiaWcnKTtcclxuXHR9XHJcblx0YWR2YW50YWdlc1NsaWRlci5vd2xDYXJvdXNlbCh7XHJcblx0XHRuYXY6IHRydWUsXHJcblx0XHRuYXZUZXh0OiBbJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZUxlZnQucG5nXCI+JywnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlUmlnaHQucG5nXCI+J10sXHJcblx0XHRtYXJnaW46IDEwLFxyXG5cdFx0cmVzcG9uc2l2ZUNsYXNzOnRydWUsXHJcblx0XHRyZXNwb25zaXZlIDoge1xyXG5cdFx0XHQwIDoge1xyXG5cdFx0XHRcdGl0ZW1zOjFcclxuXHRcdFx0fSxcclxuXHRcdFx0NzY4IDoge1xyXG5cdFx0XHRcdGl0ZW1zOjNcclxuXHRcdFx0fSxcclxuXHRcdFx0OTkyIDoge1xyXG5cdFx0XHRcdGl0ZW1zOjNcclxuXHRcdFx0fSxcclxuXHRcdFx0MTIwMCA6IHtcclxuXHRcdFx0XHRpdGVtczozXHJcblx0XHRcdH0sXHJcblx0XHRcdDE5MDAgOiB7XHJcblx0XHRcdFx0aXRlbXM6M1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblx0Y2hlY2tNYWluU2xpZGUoKTtcclxuXHRhZHZhbnRhZ2VzU2xpZGVyLm9uKCd0cmFuc2xhdGVkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGNoZWNrTWFpblNsaWRlKGUpO1xyXG5cdH0pO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRFeHBlcnRzU2xpZGVyKCkge1xyXG5cdHZhciBleHBlcnRzU2xpZGVyID0gJCgnLmV4cGVydHNTbGlkZXInKTtcclxuXHRleHBlcnRzU2xpZGVyLm93bENhcm91c2VsKHtcclxuXHRcdG5hdjpmYWxzZSxcclxuXHRcdGRvdHM6IHRydWUsXHJcblx0XHRpdGVtczoxLFxyXG5cdFx0bmF2VGV4dDogWyc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVMZWZ0LnBuZ1wiPicsJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZVJpZ2h0LnBuZ1wiPiddLFxyXG5cdFx0cmVzcG9uc2l2ZToge1xyXG5cdFx0XHQwOiB7XHJcblx0XHRcdFx0bmF2OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdG5hdjpmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuZnVuY3Rpb24gaW5pdFNlcnZpY2VzU2xpZGVycygpIHtcclxuXHR2YXIgc2VydmljZXNTbGlkZXIxID0gJCgnLnNlcnZpY2VzU2xpZGVyMScpO1xyXG5cdHZhciBzZXJ2aWNlc1NsaWRlcjIgPSAkKCcuc2VydmljZXNTbGlkZXIyJyk7XHJcblx0dmFyIHNlcnZpY2VzU2xpZGVyMyA9ICQoJy5zZXJ2aWNlc1NsaWRlcjMnKTtcclxuXHR2YXIgc2VydmljZXNTbGlkZXJzT3B0aW9ucyA9IHtcclxuXHRcdG5hdjp0cnVlLFxyXG5cdFx0bmF2VGV4dDogWyc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVMZWZ0LnBuZ1wiPicsJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZVJpZ2h0LnBuZ1wiPiddLFxyXG5cdFx0ZG90czp0cnVlLFxyXG5cdFx0cmVzcG9uc2l2ZUNsYXNzOnRydWUsXHJcblx0XHRtYXJnaW46NTAsXHJcblx0XHRyZXNwb25zaXZlIDoge1xyXG5cdFx0XHQwIDoge1xyXG5cdFx0XHRcdGl0ZW1zOjFcclxuXHRcdFx0fSxcclxuXHRcdFx0NzY4IDoge1xyXG5cdFx0XHRcdGl0ZW1zOjNcclxuXHRcdFx0fSxcclxuXHRcdFx0OTkyIDoge1xyXG5cdFx0XHRcdGl0ZW1zOjNcclxuXHRcdFx0fSxcclxuXHRcdFx0MTIwMCA6IHtcclxuXHRcdFx0XHRpdGVtczozXHJcblx0XHRcdH0sXHJcblx0XHRcdDE5MDAgOiB7XHJcblx0XHRcdFx0aXRlbXM6M1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdCQoJy5zZXJ2aWNlc1RhYnNCbG9jayBhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykub24oJ3Nob3cuYnMudGFiJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0JCgnLnNlcnZpY2VzVGFic0Jsb2NrIC50YWItcGFuZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUgc2hvdycpO1xyXG5cdH0pO1xyXG5cdHNlcnZpY2VzU2xpZGVyMS5vd2xDYXJvdXNlbChzZXJ2aWNlc1NsaWRlcnNPcHRpb25zKTtcclxuXHRzZXJ2aWNlc1NsaWRlcjIub3dsQ2Fyb3VzZWwoc2VydmljZXNTbGlkZXJzT3B0aW9ucyk7XHJcblx0c2VydmljZXNTbGlkZXIzLm93bENhcm91c2VsKHNlcnZpY2VzU2xpZGVyc09wdGlvbnMpO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRSZXZpZXdzU2xpZGVyKCkge1xyXG5cdHZhciByZXZpZXdzU2xpZGVyID0gJCgnLnJldmlld3NTbGlkZXInKTtcclxuXHR2YXIgcmV2aWV3c1NsaWRlckRlc2NyaXB0aW9uID0gJCgnLnJldmlld3NTbGlkZXJEZXNjcmlwdGlvbicpO1xyXG5cdGZ1bmN0aW9uIGNoZWNrTWFpblNsaWRlKGUpIHtcclxuXHRcdHZhciBzbGlkZUVsZW1Db3VudCA9IHJldmlld3NTbGlkZXJbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRFbGVtZW50Q291bnQ7XHJcblx0XHRyZXZpZXdzU2xpZGVyLmZpbmQoJy5vd2wtaXRlbScpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XHJcblx0XHRyZXZpZXdzU2xpZGVyLmZpbmQoJy5hY3RpdmU6ZXEoMSknKS5hZGRDbGFzcygnY3VycmVudCcpO1xyXG5cdH1cclxuXHRyZXZpZXdzU2xpZGVyLm93bENhcm91c2VsKHtcclxuXHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0bmF2OnRydWUsXHJcblx0XHRuYXZUZXh0OiBbJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZUxlZnQucG5nXCI+JywnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlUmlnaHQucG5nXCI+J10sXHJcblx0XHRsb29wOnRydWUsXHJcblx0XHRtYXJnaW46MjUsXHJcblx0XHQvKmF1dG9XaWR0aDp0cnVlLCovXHJcblx0XHRpdGVtczo0LFxyXG5cdFx0cmVzcG9uc2l2ZToge1xyXG5cdFx0XHQwOiB7XHJcblx0XHRcdFx0aXRlbXM6MVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRpdGVtczo0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHRjaGVja01haW5TbGlkZSgpO1xyXG5cdHJldmlld3NTbGlkZXIub24oJ3RyYW5zbGF0ZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0Y2hlY2tNYWluU2xpZGUoZSlcclxuXHRcdHJldmlld3NTbGlkZXJEZXNjcmlwdGlvbi50cmlnZ2VyKCd0by5vd2wuY2Fyb3VzZWwnLCBlLml0ZW0uaW5kZXgpO1xyXG5cdH0pO1xyXG5cdHJldmlld3NTbGlkZXJEZXNjcmlwdGlvbi5vd2xDYXJvdXNlbCh7XHJcblx0XHRkb3RzOiBmYWxzZSxcclxuXHRcdG5hdjpmYWxzZSxcclxuXHRcdGxvb3A6dHJ1ZSxcclxuXHRcdG1hcmdpbjoyNSxcclxuXHRcdGl0ZW1zOjEsXHJcblx0XHRzdGFydFBvc2l0aW9uOjQsXHJcblx0XHRtb3VzZURyYWc6ZmFsc2UsXHJcblx0XHR0b3VjaERyYWc6ZmFsc2VcclxuXHRcdC8qcmVzcG9uc2l2ZToge1xyXG5cdFx0XHQwOiB7XHJcblx0XHRcdFx0c3RhcnRQb3NpdGlvbjoxXHJcblx0XHRcdH0sXHJcblx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdHN0YXJ0UG9zaXRpb246NFxyXG5cdFx0XHR9XHJcblx0XHR9Ki9cclxuXHR9KTtcclxuXHRyZXZpZXdzU2xpZGVyRGVzY3JpcHRpb24ub24oJ3RyYW5zbGF0ZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0Y29uc29sZS5sb2coZS5pdGVtLmluZGV4KTtcclxuXHR9KTtcclxufVxyXG5mdW5jdGlvbiBpbml0UHJpY2VTbGlkZXIoKSB7XHJcblx0dmFyIHByaWNlU2xpZGUgPSAkKCcucHJpY2VTbGlkZScpO1xyXG5cdGZ1bmN0aW9uIGNoZWNrTWFpblNsaWRlKGUpIHtcclxuXHRcdHZhciBzbGlkZUVsZW1Db3VudCA9IHByaWNlU2xpZGVbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRFbGVtZW50Q291bnQ7XHJcblx0XHRwcmljZVNsaWRlLmZpbmQoJy5vd2wtaXRlbScpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XHJcblx0XHRwcmljZVNsaWRlLmZpbmQoJy5hY3RpdmU6ZXEoMSknKS5hZGRDbGFzcygnY3VycmVudCcpO1xyXG5cdH1cclxuXHRwcmljZVNsaWRlLm93bENhcm91c2VsKHtcclxuXHRcdG5hdjp0cnVlLFxyXG5cdFx0ZG90czogdHJ1ZSxcclxuXHRcdGl0ZW1zOjMsXHJcblx0XHRsb29wOnRydWUsXHJcblx0XHRtYXJnaW46NTAsXHJcblx0XHRuYXZUZXh0OiBbJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZUxlZnQucG5nXCI+JywnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlUmlnaHQucG5nXCI+J10sXHJcblx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdDA6IHtcclxuXHRcdFx0XHRpdGVtczoxXHJcblx0XHRcdH0sXHJcblx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdGl0ZW1zOjNcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdGNoZWNrTWFpblNsaWRlKCk7XHJcblx0cHJpY2VTbGlkZS5vbigndHJhbnNsYXRlZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRjaGVja01haW5TbGlkZShlKVxyXG5cdH0pO1xyXG59XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHRjb25zb2xlLmxvZygnc2NyaXB0IHJ1bi4uLicpO1xyXG5cdFxyXG5cdGluaXRIZWFkZXJNZW51KCk7XHJcblx0aW5pdEFkdmFudGFnZXNTbGlkZXIoKTtcclxuXHRpbml0RXhwZXJ0c1NsaWRlcigpO1xyXG5cdGluaXRTZXJ2aWNlc1NsaWRlcnMoKTtcclxuXHRpbml0UmV2aWV3c1NsaWRlcigpO1xyXG5cdGluaXRQcmljZVNsaWRlcigpO1xyXG5cdGNvbnNvbGUubG9nKCdzY3JpcHQgZW5kLicpO1xyXG59KTtcclxuXHJcbiQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpIHtcclxuXHR2YXIgc2Nyb2xsYm9keSA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHRpZiAoc2Nyb2xsYm9keSA+PSAyMDApIHtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZExpbmUnKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZExpbmUgLmxvZ28nKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRMaW5lIC5sb2dvJykuYWRkQ2xhc3MoJ2NvbCcpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTWVudUxlZnQnKS5wYXJlbnQoKS5hZGRDbGFzcygnZC14bC1ibG9jayBjb2wteGwtMyBjb2wtbGctMycpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTWVudVJpZ2h0JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0xMicpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTWVudVJpZ2h0JykucGFyZW50KCkuYWRkQ2xhc3MoJ2Qtbm9uZSBkLXhsLWJsb2NrIGNvbC14bCBjb2wtbGctNScpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkU3ViTWVudScpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZFN1Yk1lbnUnKS5wYXJlbnQoKS5hZGRDbGFzcygnY29sLTEwIGNvbC14bC0yIGNvbC1sZy0xMCcpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRMaW5lJykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRMaW5lIC5sb2dvJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTGluZSAubG9nbycpLnJlbW92ZUNsYXNzKCdjb2wnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZE1lbnVMZWZ0JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2QteGwtYmxvY2sgY29sLXhsLTMgY29sLWxnLTMnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZE1lbnVSaWdodCcpLnBhcmVudCgpLmFkZENsYXNzKCdjb2wtbGctMTInKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZE1lbnVSaWdodCcpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdkLW5vbmUgZC14bC1ibG9jayBjb2wteGwgY29sLWxnLTUnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZFN1Yk1lbnUnKS5wYXJlbnQoKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRTdWJNZW51JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2NvbC0xMCBjb2wteGwtMiBjb2wtbGctMTAnKTtcclxuXHR9XHJcbn0pIl0sImZpbGUiOiJzY3JpcHRzLmpzIn0=
