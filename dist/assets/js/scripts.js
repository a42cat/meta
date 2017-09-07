'use strict';
function winWD() {
	var result = $(window).width();
	return result;
}
function initHeaderMenu() {
	$('#headerDropdownMenuButton').on('click',function() {
		$(this).parent().toggleClass('show');
	});
	$('.headerDropDownMenuItemMainLink').on('click',function(e) {
		if (typeof $(e.target).next()[0] != 'undefined') {
			$(this).toggleClass('active');
		$(this).next().toggleClass('show');
		}
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

	$('input[type="tel"]').mask("+7(999)-999-9999");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuZnVuY3Rpb24gd2luV0QoKSB7XHJcblx0dmFyIHJlc3VsdCA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gaW5pdEhlYWRlck1lbnUoKSB7XHJcblx0JCgnI2hlYWRlckRyb3Bkb3duTWVudUJ1dHRvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblx0fSk7XHJcblx0JCgnLmhlYWRlckRyb3BEb3duTWVudUl0ZW1NYWluTGluaycpLm9uKCdjbGljaycsZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKHR5cGVvZiAkKGUudGFyZ2V0KS5uZXh0KClbMF0gIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKHRoaXMpLm5leHQoKS50b2dnbGVDbGFzcygnc2hvdycpO1xyXG5cdFx0fVxyXG5cdFx0JCgnLmhlYWRlckRyb3Bkb3duTWVudUlubmVySXRlbUxpbmsuc3ViQ2F0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLm5leHQoKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cdH0pO1xyXG5cdCQoJy5oZWFkZXJEcm9wZG93bk1lbnVJbm5lckl0ZW1MaW5rLnN1YkNhdCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhpcykubmV4dCgpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblx0fSk7XHJcbn1cclxuZnVuY3Rpb24gaW5pdE5ld3NJbm5lclBhZ2VuU2xpZGVyKCkge1xyXG5cdHZhciBuZXdzSW5uZXJQYWdlblNsaWRlciA9ICQoJy5uZXdzSW5uZXJQYWdlblNsaWRlcicpO1xyXG5cdG5ld3NJbm5lclBhZ2VuU2xpZGVyLm93bENhcm91c2VsKHtcclxuXHRcdG5hdjogdHJ1ZSxcclxuXHRcdG5hdlRleHQ6IFsnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlTGVmdC5wbmdcIj4nLCc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVSaWdodC5wbmdcIj4nXSxcclxuXHRcdG1hcmdpbjogMjAsXHJcblx0XHRkb3RzOmZhbHNlLFxyXG5cdFx0bG9vcDp0cnVlLFxyXG5cdFx0cmVzcG9uc2l2ZUNsYXNzOnRydWUsXHJcblx0XHRyZXNwb25zaXZlIDoge1xyXG5cdFx0XHQwIDoge1xyXG5cdFx0XHRcdGl0ZW1zOjFcclxuXHRcdFx0fSxcclxuXHRcdFx0NzY4IDoge1xyXG5cdFx0XHRcdGl0ZW1zOjJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRBZHZhbnRhZ2VzU2xpZGVyKCkge1xyXG5cdHZhciBhZHZhbnRhZ2VzU2xpZGVyID0gJCgnLmFkdmFudGFnZXNTbGlkZXInKTtcclxuXHRpZiAodHlwZW9mIGFkdmFudGFnZXNTbGlkZXJbMF0gIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdGZ1bmN0aW9uIGNoZWNrTWFpblNsaWRlKGUpIHtcclxuXHRcdFx0aWYgKHR5cGVvZiBlICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0JCgnLmFkdmFudGFnZXNCbG9jayAjY3VycmVudEl0ZW0nKS50ZXh0KGUuaXRlbS5pbmRleCArIDEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBzbGlkZUVsZW1Db3VudCA9IGFkdmFudGFnZXNTbGlkZXJbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRFbGVtZW50Q291bnQ7XHJcblx0XHRcdCQoJy5hZHZhbnRhZ2VzQmxvY2sgI21heEl0ZW0nKS50ZXh0KHNsaWRlRWxlbUNvdW50KTtcclxuXHRcdFx0YWR2YW50YWdlc1NsaWRlci5maW5kKCcub3dsLWl0ZW0nKS5yZW1vdmVDbGFzcygnYmlnJyk7XHJcblx0XHRcdGFkdmFudGFnZXNTbGlkZXIuZmluZCgnLmFjdGl2ZTplcSgxKScpLmFkZENsYXNzKCdiaWcnKTtcclxuXHRcdH1cclxuXHRcdGFkdmFudGFnZXNTbGlkZXIub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHRuYXY6IHRydWUsXHJcblx0XHRcdG5hdlRleHQ6IFsnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlTGVmdC5wbmdcIj4nLCc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVSaWdodC5wbmdcIj4nXSxcclxuXHRcdFx0bWFyZ2luOiAxMCxcclxuXHRcdFx0bG9vcDp0cnVlLFxyXG5cdFx0XHRyZXNwb25zaXZlQ2xhc3M6dHJ1ZSxcclxuXHRcdFx0cmVzcG9uc2l2ZSA6IHtcclxuXHRcdFx0XHQwIDoge1xyXG5cdFx0XHRcdFx0aXRlbXM6MVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NzY4IDoge1xyXG5cdFx0XHRcdFx0aXRlbXM6M1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0OTkyIDoge1xyXG5cdFx0XHRcdFx0aXRlbXM6M1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTIwMCA6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjNcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDE5MDAgOiB7XHJcblx0XHRcdFx0XHRpdGVtczozXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGNoZWNrTWFpblNsaWRlKCk7XHJcblx0XHRhZHZhbnRhZ2VzU2xpZGVyLm9uKCd0cmFuc2xhdGVkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Y2hlY2tNYWluU2xpZGUoZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gaW5pdEV4cGVydHNTbGlkZXIoKSB7XHJcblx0dmFyIGV4cGVydHNTbGlkZXIgPSAkKCcuZXhwZXJ0c1NsaWRlcicpO1xyXG5cdGV4cGVydHNTbGlkZXIub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0bmF2OmZhbHNlLFxyXG5cdFx0ZG90czogdHJ1ZSxcclxuXHRcdGl0ZW1zOjEsXHJcblx0XHRuYXZUZXh0OiBbJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZUxlZnQucG5nXCI+JywnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlUmlnaHQucG5nXCI+J10sXHJcblx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdDA6IHtcclxuXHRcdFx0XHRuYXY6IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0bmF2OmZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5mdW5jdGlvbiBpbml0U2VydmljZXNTbGlkZXJzKCkge1xyXG5cdHZhciBzZXJ2aWNlc1NsaWRlcjEgPSAkKCcuc2VydmljZXNTbGlkZXIxJyk7XHJcblx0dmFyIHNlcnZpY2VzU2xpZGVyMiA9ICQoJy5zZXJ2aWNlc1NsaWRlcjInKTtcclxuXHR2YXIgc2VydmljZXNTbGlkZXIzID0gJCgnLnNlcnZpY2VzU2xpZGVyMycpO1xyXG5cdHZhciBzZXJ2aWNlc1NsaWRlcnNPcHRpb25zID0ge1xyXG5cdFx0bmF2OnRydWUsXHJcblx0XHRuYXZUZXh0OiBbJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZUxlZnQucG5nXCI+JywnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlUmlnaHQucG5nXCI+J10sXHJcblx0XHRkb3RzOnRydWUsXHJcblx0XHRyZXNwb25zaXZlQ2xhc3M6dHJ1ZSxcclxuXHRcdG1hcmdpbjo1MCxcclxuXHRcdHJlc3BvbnNpdmUgOiB7XHJcblx0XHRcdDAgOiB7XHJcblx0XHRcdFx0aXRlbXM6MVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ3NjggOiB7XHJcblx0XHRcdFx0aXRlbXM6M1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQ5OTIgOiB7XHJcblx0XHRcdFx0aXRlbXM6M1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQxMjAwIDoge1xyXG5cdFx0XHRcdGl0ZW1zOjNcclxuXHRcdFx0fSxcclxuXHRcdFx0MTkwMCA6IHtcclxuXHRcdFx0XHRpdGVtczozXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0JCgnLnNlcnZpY2VzVGFic0Jsb2NrIGFbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5vbignc2hvdy5icy50YWInLCBmdW5jdGlvbihlKSB7XHJcblx0XHQkKCcuc2VydmljZXNUYWJzQmxvY2sgLnRhYi1wYW5lJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBzaG93Jyk7XHJcblx0fSk7XHJcblx0c2VydmljZXNTbGlkZXIxLm93bENhcm91c2VsKHNlcnZpY2VzU2xpZGVyc09wdGlvbnMpO1xyXG5cdHNlcnZpY2VzU2xpZGVyMi5vd2xDYXJvdXNlbChzZXJ2aWNlc1NsaWRlcnNPcHRpb25zKTtcclxuXHRzZXJ2aWNlc1NsaWRlcjMub3dsQ2Fyb3VzZWwoc2VydmljZXNTbGlkZXJzT3B0aW9ucyk7XHJcbn1cclxuZnVuY3Rpb24gaW5pdFJldmlld3NTbGlkZXIoKSB7XHJcblx0dmFyIHJldmlld3NTbGlkZXIgPSAkKCcucmV2aWV3c1NsaWRlcicpO1xyXG5cdGlmICh0eXBlb2YgcmV2aWV3c1NsaWRlclswXSAhPSAndW5kZWZpbmVkJykge1xyXG5cdFx0dmFyIHJldmlld3NTbGlkZXJEZXNjcmlwdGlvbiA9ICQoJy5yZXZpZXdzU2xpZGVyRGVzY3JpcHRpb24nKTtcclxuXHRcdGZ1bmN0aW9uIGNoZWNrTWFpblNsaWRlKGUpIHtcclxuXHRcdFx0dmFyIHNsaWRlRWxlbUNvdW50ID0gcmV2aWV3c1NsaWRlclswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZEVsZW1lbnRDb3VudDtcclxuXHRcdFx0cmV2aWV3c1NsaWRlci5maW5kKCcub3dsLWl0ZW0nKS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xyXG5cdFx0XHRyZXZpZXdzU2xpZGVyLmZpbmQoJy5hY3RpdmU6ZXEoMSknKS5hZGRDbGFzcygnY3VycmVudCcpO1xyXG5cdFx0fVxyXG5cdFx0cmV2aWV3c1NsaWRlci5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0XHRuYXY6dHJ1ZSxcclxuXHRcdFx0bmF2VGV4dDogWyc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVMZWZ0LnBuZ1wiPicsJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZVJpZ2h0LnBuZ1wiPiddLFxyXG5cdFx0XHRsb29wOnRydWUsXHJcblx0XHRcdG1hcmdpbjoyNSxcclxuXHRcdFx0LyphdXRvV2lkdGg6dHJ1ZSwqL1xyXG5cdFx0XHRpdGVtczo0LFxyXG5cdFx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdFx0MDoge1xyXG5cdFx0XHRcdFx0aXRlbXM6MVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0XHRpdGVtczo0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGNoZWNrTWFpblNsaWRlKCk7XHJcblx0XHRyZXZpZXdzU2xpZGVyLm9uKCd0cmFuc2xhdGVkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Y2hlY2tNYWluU2xpZGUoZSlcclxuXHRcdFx0cmV2aWV3c1NsaWRlckRlc2NyaXB0aW9uLnRyaWdnZXIoJ3RvLm93bC5jYXJvdXNlbCcsIGUuaXRlbS5pbmRleCk7XHJcblx0XHR9KTtcclxuXHRcdHJldmlld3NTbGlkZXJEZXNjcmlwdGlvbi5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0XHRuYXY6ZmFsc2UsXHJcblx0XHRcdGxvb3A6dHJ1ZSxcclxuXHRcdFx0bWFyZ2luOjI1LFxyXG5cdFx0XHRpdGVtczoxLFxyXG5cdFx0XHRzdGFydFBvc2l0aW9uOjQsXHJcblx0XHRcdG1vdXNlRHJhZzpmYWxzZSxcclxuXHRcdFx0dG91Y2hEcmFnOmZhbHNlXHJcblx0XHQvKnJlc3BvbnNpdmU6IHtcclxuXHRcdFx0MDoge1xyXG5cdFx0XHRcdHN0YXJ0UG9zaXRpb246MVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRzdGFydFBvc2l0aW9uOjRcclxuXHRcdFx0fVxyXG5cdFx0fSovXHJcblx0fSk7XHJcblx0XHRyZXZpZXdzU2xpZGVyRGVzY3JpcHRpb24ub24oJ3RyYW5zbGF0ZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlLml0ZW0uaW5kZXgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIGluaXRQcmljZVNsaWRlcigpIHtcclxuXHR2YXIgcHJpY2VTbGlkZSA9ICQoJy5wcmljZVNsaWRlJyk7XHJcblx0aWYgKHR5cGVvZiBwcmljZVNsaWRlWzBdICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRmdW5jdGlvbiBjaGVja01haW5TbGlkZShlKSB7XHJcblx0XHRcdHZhciBzbGlkZUVsZW1Db3VudCA9IHByaWNlU2xpZGVbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRFbGVtZW50Q291bnQ7XHJcblx0XHRcdHByaWNlU2xpZGUuZmluZCgnLm93bC1pdGVtJykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKTtcclxuXHRcdFx0cHJpY2VTbGlkZS5maW5kKCcuYWN0aXZlOmVxKDEpJykuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcclxuXHRcdH1cclxuXHRcdHByaWNlU2xpZGUub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHRuYXY6dHJ1ZSxcclxuXHRcdFx0ZG90czogdHJ1ZSxcclxuXHRcdFx0aXRlbXM6MyxcclxuXHRcdFx0bG9vcDp0cnVlLFxyXG5cdFx0XHRtYXJnaW46NTAsXHJcblx0XHRcdG5hdlRleHQ6IFsnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlTGVmdC5wbmdcIj4nLCc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVSaWdodC5wbmdcIj4nXSxcclxuXHRcdFx0cmVzcG9uc2l2ZToge1xyXG5cdFx0XHRcdDA6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjFcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdFx0aXRlbXM6M1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRjaGVja01haW5TbGlkZSgpO1xyXG5cdFx0cHJpY2VTbGlkZS5vbigndHJhbnNsYXRlZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGNoZWNrTWFpblNsaWRlKGUpXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gaW5pdE91cldvcmtlcnNTbGlkZXIoKSB7XHJcblx0dmFyIG91cldvcmtlcnNTbGlkZXIgPSAkKCcub3VyV29ya2Vyc1NsaWRlcicpO1xyXG5cdG91cldvcmtlcnNTbGlkZXIub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHRuYXY6dHJ1ZSxcclxuXHRcdFx0ZG90czogdHJ1ZSxcclxuXHRcdFx0bG9vcDp0cnVlLFxyXG5cdFx0XHRtYXJnaW46NTAsXHJcblx0XHRcdG5hdlRleHQ6IFsnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlTGVmdC5wbmdcIj4nLCc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVSaWdodC5wbmdcIj4nXSxcclxuXHRcdFx0cmVzcG9uc2l2ZToge1xyXG5cdFx0XHRcdDA6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjFcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdFx0aXRlbXM6M1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0OTkyOiB7XHJcblx0XHRcdFx0XHRpdGVtczo0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxufVxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblx0Y29uc29sZS5sb2coJ3NjcmlwdCBydW4uLi4nKTtcclxuXHJcblx0JCgnaW5wdXRbdHlwZT1cInRlbFwiXScpLm1hc2soXCIrNyg5OTkpLTk5OS05OTk5XCIpO1xyXG5cdGluaXRIZWFkZXJNZW51KCk7XHJcblx0aW5pdEFkdmFudGFnZXNTbGlkZXIoKTtcclxuXHRpbml0RXhwZXJ0c1NsaWRlcigpO1xyXG5cdGluaXRTZXJ2aWNlc1NsaWRlcnMoKTtcclxuXHRpbml0UmV2aWV3c1NsaWRlcigpO1xyXG5cdGluaXRQcmljZVNsaWRlcigpO1xyXG5cdGluaXRPdXJXb3JrZXJzU2xpZGVyKCk7XHJcblx0aW5pdE5ld3NJbm5lclBhZ2VuU2xpZGVyKCk7XHJcblxyXG5cdGNvbnNvbGUubG9nKCdzY3JpcHQgZW5kLicpO1xyXG59KTtcclxuXHJcbiQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpIHtcclxuXHR2YXIgc2Nyb2xsYm9keSA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHRpZiAoc2Nyb2xsYm9keSA+PSAyMDApIHtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZExpbmUnKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZExpbmUgLmxvZ28nKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRMaW5lIC5sb2dvJykuYWRkQ2xhc3MoJ2NvbCcpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTWVudUxlZnQnKS5wYXJlbnQoKS5hZGRDbGFzcygnZC14bC1ibG9jayBjb2wteGwtMyBjb2wtbGctMycpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTWVudVJpZ2h0JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0xMicpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTWVudVJpZ2h0JykucGFyZW50KCkuYWRkQ2xhc3MoJ2Qtbm9uZSBkLXhsLWJsb2NrIGNvbC14bCBjb2wtbGctNScpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkU3ViTWVudScpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZFN1Yk1lbnUnKS5wYXJlbnQoKS5hZGRDbGFzcygnY29sLTEwIGNvbC14bC0yIGNvbC1sZy0xMCcpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRMaW5lJykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRMaW5lIC5sb2dvJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTGluZSAubG9nbycpLnJlbW92ZUNsYXNzKCdjb2wnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZE1lbnVMZWZ0JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2QteGwtYmxvY2sgY29sLXhsLTMgY29sLWxnLTMnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZE1lbnVSaWdodCcpLnBhcmVudCgpLmFkZENsYXNzKCdjb2wtbGctMTInKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZE1lbnVSaWdodCcpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdkLW5vbmUgZC14bC1ibG9jayBjb2wteGwgY29sLWxnLTUnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZFN1Yk1lbnUnKS5wYXJlbnQoKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRTdWJNZW51JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2NvbC0xMCBjb2wteGwtMiBjb2wtbGctMTAnKTtcclxuXHR9XHJcbn0pIl0sImZpbGUiOiJzY3JpcHRzLmpzIn0=
