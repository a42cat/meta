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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuZnVuY3Rpb24gd2luV0QoKSB7XHJcblx0dmFyIHJlc3VsdCA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gaW5pdEhlYWRlck1lbnUoKSB7XHJcblx0JCgnI2hlYWRlckRyb3Bkb3duTWVudUJ1dHRvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblx0fSk7XHJcblx0JCgnLmhlYWRlckRyb3BEb3duTWVudUl0ZW1NYWluTGluaycpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhpcykubmV4dCgpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblx0XHQkKCcuaGVhZGVyRHJvcGRvd25NZW51SW5uZXJJdGVtTGluay5zdWJDYXQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJykubmV4dCgpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0fSk7XHJcblx0JCgnLmhlYWRlckRyb3Bkb3duTWVudUlubmVySXRlbUxpbmsuc3ViQ2F0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCh0aGlzKS5uZXh0KCkudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxuXHR9KTtcclxufVxyXG5mdW5jdGlvbiBpbml0TmV3c0lubmVyUGFnZW5TbGlkZXIoKSB7XHJcblx0dmFyIG5ld3NJbm5lclBhZ2VuU2xpZGVyID0gJCgnLm5ld3NJbm5lclBhZ2VuU2xpZGVyJyk7XHJcblx0bmV3c0lubmVyUGFnZW5TbGlkZXIub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0bmF2OiB0cnVlLFxyXG5cdFx0bmF2VGV4dDogWyc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVMZWZ0LnBuZ1wiPicsJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZVJpZ2h0LnBuZ1wiPiddLFxyXG5cdFx0bWFyZ2luOiAyMCxcclxuXHRcdGRvdHM6ZmFsc2UsXHJcblx0XHRsb29wOnRydWUsXHJcblx0XHRyZXNwb25zaXZlQ2xhc3M6dHJ1ZSxcclxuXHRcdHJlc3BvbnNpdmUgOiB7XHJcblx0XHRcdDAgOiB7XHJcblx0XHRcdFx0aXRlbXM6MVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ3NjggOiB7XHJcblx0XHRcdFx0aXRlbXM6MlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuZnVuY3Rpb24gaW5pdEFkdmFudGFnZXNTbGlkZXIoKSB7XHJcblx0dmFyIGFkdmFudGFnZXNTbGlkZXIgPSAkKCcuYWR2YW50YWdlc1NsaWRlcicpO1xyXG5cdGlmICh0eXBlb2YgYWR2YW50YWdlc1NsaWRlclswXSAhPSAndW5kZWZpbmVkJykge1xyXG5cdFx0ZnVuY3Rpb24gY2hlY2tNYWluU2xpZGUoZSkge1xyXG5cdFx0XHRpZiAodHlwZW9mIGUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHQkKCcuYWR2YW50YWdlc0Jsb2NrICNjdXJyZW50SXRlbScpLnRleHQoZS5pdGVtLmluZGV4ICsgMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIHNsaWRlRWxlbUNvdW50ID0gYWR2YW50YWdlc1NsaWRlclswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZEVsZW1lbnRDb3VudDtcclxuXHRcdFx0JCgnLmFkdmFudGFnZXNCbG9jayAjbWF4SXRlbScpLnRleHQoc2xpZGVFbGVtQ291bnQpO1xyXG5cdFx0XHRhZHZhbnRhZ2VzU2xpZGVyLmZpbmQoJy5vd2wtaXRlbScpLnJlbW92ZUNsYXNzKCdiaWcnKTtcclxuXHRcdFx0YWR2YW50YWdlc1NsaWRlci5maW5kKCcuYWN0aXZlOmVxKDEpJykuYWRkQ2xhc3MoJ2JpZycpO1xyXG5cdFx0fVxyXG5cdFx0YWR2YW50YWdlc1NsaWRlci5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdG5hdjogdHJ1ZSxcclxuXHRcdFx0bmF2VGV4dDogWyc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVMZWZ0LnBuZ1wiPicsJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZVJpZ2h0LnBuZ1wiPiddLFxyXG5cdFx0XHRtYXJnaW46IDEwLFxyXG5cdFx0XHRsb29wOnRydWUsXHJcblx0XHRcdHJlc3BvbnNpdmVDbGFzczp0cnVlLFxyXG5cdFx0XHRyZXNwb25zaXZlIDoge1xyXG5cdFx0XHRcdDAgOiB7XHJcblx0XHRcdFx0XHRpdGVtczoxXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3NjggOiB7XHJcblx0XHRcdFx0XHRpdGVtczozXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ5OTIgOiB7XHJcblx0XHRcdFx0XHRpdGVtczozXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQxMjAwIDoge1xyXG5cdFx0XHRcdFx0aXRlbXM6M1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTkwMCA6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjNcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Y2hlY2tNYWluU2xpZGUoKTtcclxuXHRcdGFkdmFudGFnZXNTbGlkZXIub24oJ3RyYW5zbGF0ZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRjaGVja01haW5TbGlkZShlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5mdW5jdGlvbiBpbml0RXhwZXJ0c1NsaWRlcigpIHtcclxuXHR2YXIgZXhwZXJ0c1NsaWRlciA9ICQoJy5leHBlcnRzU2xpZGVyJyk7XHJcblx0ZXhwZXJ0c1NsaWRlci5vd2xDYXJvdXNlbCh7XHJcblx0XHRuYXY6ZmFsc2UsXHJcblx0XHRkb3RzOiB0cnVlLFxyXG5cdFx0aXRlbXM6MSxcclxuXHRcdG5hdlRleHQ6IFsnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlTGVmdC5wbmdcIj4nLCc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVSaWdodC5wbmdcIj4nXSxcclxuXHRcdHJlc3BvbnNpdmU6IHtcclxuXHRcdFx0MDoge1xyXG5cdFx0XHRcdG5hdjogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRuYXY6ZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRTZXJ2aWNlc1NsaWRlcnMoKSB7XHJcblx0dmFyIHNlcnZpY2VzU2xpZGVyMSA9ICQoJy5zZXJ2aWNlc1NsaWRlcjEnKTtcclxuXHR2YXIgc2VydmljZXNTbGlkZXIyID0gJCgnLnNlcnZpY2VzU2xpZGVyMicpO1xyXG5cdHZhciBzZXJ2aWNlc1NsaWRlcjMgPSAkKCcuc2VydmljZXNTbGlkZXIzJyk7XHJcblx0dmFyIHNlcnZpY2VzU2xpZGVyc09wdGlvbnMgPSB7XHJcblx0XHRuYXY6dHJ1ZSxcclxuXHRcdG5hdlRleHQ6IFsnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlTGVmdC5wbmdcIj4nLCc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVSaWdodC5wbmdcIj4nXSxcclxuXHRcdGRvdHM6dHJ1ZSxcclxuXHRcdHJlc3BvbnNpdmVDbGFzczp0cnVlLFxyXG5cdFx0bWFyZ2luOjUwLFxyXG5cdFx0cmVzcG9uc2l2ZSA6IHtcclxuXHRcdFx0MCA6IHtcclxuXHRcdFx0XHRpdGVtczoxXHJcblx0XHRcdH0sXHJcblx0XHRcdDc2OCA6IHtcclxuXHRcdFx0XHRpdGVtczozXHJcblx0XHRcdH0sXHJcblx0XHRcdDk5MiA6IHtcclxuXHRcdFx0XHRpdGVtczozXHJcblx0XHRcdH0sXHJcblx0XHRcdDEyMDAgOiB7XHJcblx0XHRcdFx0aXRlbXM6M1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQxOTAwIDoge1xyXG5cdFx0XHRcdGl0ZW1zOjNcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQkKCcuc2VydmljZXNUYWJzQmxvY2sgYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScpLm9uKCdzaG93LmJzLnRhYicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdCQoJy5zZXJ2aWNlc1RhYnNCbG9jayAudGFiLXBhbmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlIHNob3cnKTtcclxuXHR9KTtcclxuXHRzZXJ2aWNlc1NsaWRlcjEub3dsQ2Fyb3VzZWwoc2VydmljZXNTbGlkZXJzT3B0aW9ucyk7XHJcblx0c2VydmljZXNTbGlkZXIyLm93bENhcm91c2VsKHNlcnZpY2VzU2xpZGVyc09wdGlvbnMpO1xyXG5cdHNlcnZpY2VzU2xpZGVyMy5vd2xDYXJvdXNlbChzZXJ2aWNlc1NsaWRlcnNPcHRpb25zKTtcclxufVxyXG5mdW5jdGlvbiBpbml0UmV2aWV3c1NsaWRlcigpIHtcclxuXHR2YXIgcmV2aWV3c1NsaWRlciA9ICQoJy5yZXZpZXdzU2xpZGVyJyk7XHJcblx0aWYgKHR5cGVvZiByZXZpZXdzU2xpZGVyWzBdICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHR2YXIgcmV2aWV3c1NsaWRlckRlc2NyaXB0aW9uID0gJCgnLnJldmlld3NTbGlkZXJEZXNjcmlwdGlvbicpO1xyXG5cdFx0ZnVuY3Rpb24gY2hlY2tNYWluU2xpZGUoZSkge1xyXG5cdFx0XHR2YXIgc2xpZGVFbGVtQ291bnQgPSByZXZpZXdzU2xpZGVyWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkRWxlbWVudENvdW50O1xyXG5cdFx0XHRyZXZpZXdzU2xpZGVyLmZpbmQoJy5vd2wtaXRlbScpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XHJcblx0XHRcdHJldmlld3NTbGlkZXIuZmluZCgnLmFjdGl2ZTplcSgxKScpLmFkZENsYXNzKCdjdXJyZW50Jyk7XHJcblx0XHR9XHJcblx0XHRyZXZpZXdzU2xpZGVyLm93bENhcm91c2VsKHtcclxuXHRcdFx0ZG90czogZmFsc2UsXHJcblx0XHRcdG5hdjp0cnVlLFxyXG5cdFx0XHRuYXZUZXh0OiBbJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZUxlZnQucG5nXCI+JywnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlUmlnaHQucG5nXCI+J10sXHJcblx0XHRcdGxvb3A6dHJ1ZSxcclxuXHRcdFx0bWFyZ2luOjI1LFxyXG5cdFx0XHQvKmF1dG9XaWR0aDp0cnVlLCovXHJcblx0XHRcdGl0ZW1zOjQsXHJcblx0XHRcdHJlc3BvbnNpdmU6IHtcclxuXHRcdFx0XHQwOiB7XHJcblx0XHRcdFx0XHRpdGVtczoxXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Y2hlY2tNYWluU2xpZGUoKTtcclxuXHRcdHJldmlld3NTbGlkZXIub24oJ3RyYW5zbGF0ZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRjaGVja01haW5TbGlkZShlKVxyXG5cdFx0XHRyZXZpZXdzU2xpZGVyRGVzY3JpcHRpb24udHJpZ2dlcigndG8ub3dsLmNhcm91c2VsJywgZS5pdGVtLmluZGV4KTtcclxuXHRcdH0pO1xyXG5cdFx0cmV2aWV3c1NsaWRlckRlc2NyaXB0aW9uLm93bENhcm91c2VsKHtcclxuXHRcdFx0ZG90czogZmFsc2UsXHJcblx0XHRcdG5hdjpmYWxzZSxcclxuXHRcdFx0bG9vcDp0cnVlLFxyXG5cdFx0XHRtYXJnaW46MjUsXHJcblx0XHRcdGl0ZW1zOjEsXHJcblx0XHRcdHN0YXJ0UG9zaXRpb246NCxcclxuXHRcdFx0bW91c2VEcmFnOmZhbHNlLFxyXG5cdFx0XHR0b3VjaERyYWc6ZmFsc2VcclxuXHRcdC8qcmVzcG9uc2l2ZToge1xyXG5cdFx0XHQwOiB7XHJcblx0XHRcdFx0c3RhcnRQb3NpdGlvbjoxXHJcblx0XHRcdH0sXHJcblx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdHN0YXJ0UG9zaXRpb246NFxyXG5cdFx0XHR9XHJcblx0XHR9Ki9cclxuXHR9KTtcclxuXHRcdHJldmlld3NTbGlkZXJEZXNjcmlwdGlvbi5vbigndHJhbnNsYXRlZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUuaXRlbS5pbmRleCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gaW5pdFByaWNlU2xpZGVyKCkge1xyXG5cdHZhciBwcmljZVNsaWRlID0gJCgnLnByaWNlU2xpZGUnKTtcclxuXHRpZiAodHlwZW9mIHByaWNlU2xpZGVbMF0gIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdGZ1bmN0aW9uIGNoZWNrTWFpblNsaWRlKGUpIHtcclxuXHRcdFx0dmFyIHNsaWRlRWxlbUNvdW50ID0gcHJpY2VTbGlkZVswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZEVsZW1lbnRDb3VudDtcclxuXHRcdFx0cHJpY2VTbGlkZS5maW5kKCcub3dsLWl0ZW0nKS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xyXG5cdFx0XHRwcmljZVNsaWRlLmZpbmQoJy5hY3RpdmU6ZXEoMSknKS5hZGRDbGFzcygnY3VycmVudCcpO1xyXG5cdFx0fVxyXG5cdFx0cHJpY2VTbGlkZS5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdG5hdjp0cnVlLFxyXG5cdFx0XHRkb3RzOiB0cnVlLFxyXG5cdFx0XHRpdGVtczozLFxyXG5cdFx0XHRsb29wOnRydWUsXHJcblx0XHRcdG1hcmdpbjo1MCxcclxuXHRcdFx0bmF2VGV4dDogWyc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVMZWZ0LnBuZ1wiPicsJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZVJpZ2h0LnBuZ1wiPiddLFxyXG5cdFx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdFx0MDoge1xyXG5cdFx0XHRcdFx0aXRlbXM6MVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0XHRpdGVtczozXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGNoZWNrTWFpblNsaWRlKCk7XHJcblx0XHRwcmljZVNsaWRlLm9uKCd0cmFuc2xhdGVkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Y2hlY2tNYWluU2xpZGUoZSlcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5mdW5jdGlvbiBpbml0T3VyV29ya2Vyc1NsaWRlcigpIHtcclxuXHR2YXIgb3VyV29ya2Vyc1NsaWRlciA9ICQoJy5vdXJXb3JrZXJzU2xpZGVyJyk7XHJcblx0b3VyV29ya2Vyc1NsaWRlci5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdG5hdjp0cnVlLFxyXG5cdFx0XHRkb3RzOiB0cnVlLFxyXG5cdFx0XHRsb29wOnRydWUsXHJcblx0XHRcdG1hcmdpbjo1MCxcclxuXHRcdFx0bmF2VGV4dDogWyc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVMZWZ0LnBuZ1wiPicsJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZVJpZ2h0LnBuZ1wiPiddLFxyXG5cdFx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdFx0MDoge1xyXG5cdFx0XHRcdFx0aXRlbXM6MVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0XHRpdGVtczozXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ5OTI6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG59XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHRjb25zb2xlLmxvZygnc2NyaXB0IHJ1bi4uLicpO1xyXG5cdFxyXG5cdGluaXRIZWFkZXJNZW51KCk7XHJcblx0aW5pdEFkdmFudGFnZXNTbGlkZXIoKTtcclxuXHRpbml0RXhwZXJ0c1NsaWRlcigpO1xyXG5cdGluaXRTZXJ2aWNlc1NsaWRlcnMoKTtcclxuXHRpbml0UmV2aWV3c1NsaWRlcigpO1xyXG5cdGluaXRQcmljZVNsaWRlcigpO1xyXG5cdGluaXRPdXJXb3JrZXJzU2xpZGVyKCk7XHJcblx0aW5pdE5ld3NJbm5lclBhZ2VuU2xpZGVyKCk7XHJcblx0Y29uc29sZS5sb2coJ3NjcmlwdCBlbmQuJyk7XHJcbn0pO1xyXG5cclxuJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCkge1xyXG5cdHZhciBzY3JvbGxib2R5ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdGlmIChzY3JvbGxib2R5ID49IDIwMCkge1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTGluZScpLmFkZENsYXNzKCdmaXhlZCcpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTGluZSAubG9nbycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZExpbmUgLmxvZ28nKS5hZGRDbGFzcygnY29sJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRNZW51TGVmdCcpLnBhcmVudCgpLmFkZENsYXNzKCdkLXhsLWJsb2NrIGNvbC14bC0zIGNvbC1sZy0zJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRNZW51UmlnaHQnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnY29sLWxnLTEyJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRNZW51UmlnaHQnKS5wYXJlbnQoKS5hZGRDbGFzcygnZC1ub25lIGQteGwtYmxvY2sgY29sLXhsIGNvbC1sZy01Jyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRTdWJNZW51JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkU3ViTWVudScpLnBhcmVudCgpLmFkZENsYXNzKCdjb2wtMTAgY29sLXhsLTIgY29sLWxnLTEwJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZExpbmUnKS5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZExpbmUgLmxvZ28nKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRMaW5lIC5sb2dvJykucmVtb3ZlQ2xhc3MoJ2NvbCcpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTWVudUxlZnQnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZC14bC1ibG9jayBjb2wteGwtMyBjb2wtbGctMycpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTWVudVJpZ2h0JykucGFyZW50KCkuYWRkQ2xhc3MoJ2NvbC1sZy0xMicpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTWVudVJpZ2h0JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZSBkLXhsLWJsb2NrIGNvbC14bCBjb2wtbGctNScpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkU3ViTWVudScpLnBhcmVudCgpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZFN1Yk1lbnUnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnY29sLTEwIGNvbC14bC0yIGNvbC1sZy0xMCcpO1xyXG5cdH1cclxufSkiXSwiZmlsZSI6InNjcmlwdHMuanMifQ==
