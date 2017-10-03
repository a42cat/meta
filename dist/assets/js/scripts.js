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
function initPriceForm() {
	$('.priceSlide .item select').on('change', function() {
		let val = $(this).val();
		$(this).parent().next('.price').find('.value').text(val);
	});
	$('#priceModal').on('shown.bs.modal', function (e) {
	  let curItem = $(e.relatedTarget).parents('.item');
	  let priceName = curItem.find('.titleBlock').find('.title').text();
	  let priceDescr = curItem.find('.titleBlock').find('.descr').text();
	  let priceType = curItem.find('.activity').find('.value').text();
	  let priceVal = curItem.find('.price').find('.value').text();

	  $('#priceForm').find('input[name="priceName"]').val(priceName);
	  $('#priceForm').find('input[name="priceDescr"]').val(priceDescr);
	  $('#priceForm').find('input[name="priceType"]').val(priceType);
	  $('#priceForm').find('input[name="priceVal"]').val(priceVal);
	})
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
				items:1,
				nav:false
			},
			768 : {
				items:2,
				nav:true
			}
		}
	});
}
function initAdvantagesSlider() {
	var advantagesSlider = $('.advantagesSlider');
	if (typeof advantagesSlider[0] != 'undefined') {
		function checkMainSlide(e) {
			/*if (typeof e != 'undefined') {
				$('.advantagesBlock #currentItem').text(e.item.index + 1);
			}
			var slideElemCount = advantagesSlider[0].children[0].children[0].childElementCount;*/
			/*$('.advantagesBlock #maxItem').text(slideElemCount);*/
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
					items:1,
					nav:false
				},
				768 : {
					items:3,
					nav:true
				},
				992 : {
					items:3,
					nav:true
				},
				1200 : {
					items:3,
					nav:true
				},
				1900 : {
					items:3,
					nav:true
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
		loop:true,
		items:1,
		navText: ['<img src="assets/images/slideLeft.png">','<img src="assets/images/slideRight.png">'],
		responsive: {
			0: {
				nav: false
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
				items:1,
				nav:false
			},
			768 : {
				items:3,
				nav:false
			},
			992 : {
				items:3,
				nav:true
			},
			1200 : {
				items:3,
				nav:true
			},
			1900 : {
				items:3,
				nav:true
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
function initSertificatesSlider() {
	var sertificatesSlider = $('.sertificatesSlider');
	if (typeof sertificatesSlider[0] != 'undefined') {
		var sertificatesSliderDescription = $('.sertificatesSliderDescription');
		/*function checkMainSlide(e) {
			var slideElemCount = sertificatesSlider[0].children[0].children[0].childElementCount;
			sertificatesSlider.find('.owl-item').removeClass('current');
			sertificatesSlider.find('.active:eq(1)').addClass('current');
		}*/
		sertificatesSlider.owlCarousel({
			dots: false,
			nav:true,
			navText: ['<img src="assets/images/slideLeft.png">','<img src="assets/images/slideRight.png">'],
			loop:true,
			autoplay:true,
			margin:25,
			/*autoWidth:true,*/
			items:3,
			responsive: {
				0: {
					items:1,
					nav:false
				},
				768: {
					items:3,
					nav:true
				}
			}
		});
		/*checkMainSlide();*/
		/*sertificatesSlider.on('translated.owl.carousel', function(e) {
			checkMainSlide(e)
			sertificatesSliderDescription.trigger('to.owl.carousel', e.item.index+2);
		});*/
/*		sertificatesSliderDescription.owlCarousel({
			dots: false,
			nav:false,
			loop:true,
			margin:25,
			items:1,
			startPosition:1,
			mouseDrag:false,
			touchDrag:false
		responsive: {
			0: {
				startPosition:1
			},
			768: {
				startPosition:4
			}
		}
	});
		sertificatesSliderDescription.on('translated.owl.carousel', function(e) {
			console.log(e.item.index);
		});*/
	}
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
			items:3,
			responsive: {
				0: {
					items:1,
					nav:false
				},
				768: {
					items:3,
					nav:true
				}
			}
		});
		checkMainSlide();
		reviewsSlider.on('refresh.owl.carousel', function(e) {
			console.log(e.item.index);
		});
		reviewsSlider.on('translated.owl.carousel', function(e) {
			checkMainSlide(e);
			/*reviewsSliderDescription.trigger('to.owl.carousel',e.item.index+2);*/
			console.log('Up:');
			console.log(e.item.index);
			console.log(e);
		});
		reviewsSliderDescription.owlCarousel({
			dots: false,
			nav:false,
			loop:true,
			margin:25,
			items:1,
			startPosition:1,
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
			console.log('Down:');
			console.log(e.item.index);
			console.log(e);
		});
	}
}
function initPriceSlider() {
	var priceSlide = $('.priceSlide');
	if (typeof priceSlide[0] != 'undefined') {
		function checkMainSlide(e) {
			var slideElemCount = priceSlide[0].children[0].children[0].childElementCount;
			priceSlide.find('.owl-item').removeClass('current').find('select').prop('disabled',true);
			priceSlide.find('.active:eq(1)').addClass('current').find('select').prop('disabled',false);;
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
					items:1,
					nav:false
				},
				768: {
					items:3,
					nav:true
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
					items:1,
					nav:false
				},
				768: {
					items:3,
					nav:true
				},
				992: {
					items:4,
					nav:true
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
	initSertificatesSlider();
	initReviewsSlider();
	initPriceSlider();
	initOurWorkersSlider();
	initNewsInnerPagenSlider();
	initPriceForm();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuZnVuY3Rpb24gd2luV0QoKSB7XHJcblx0dmFyIHJlc3VsdCA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gaW5pdEhlYWRlck1lbnUoKSB7XHJcblx0JCgnI2hlYWRlckRyb3Bkb3duTWVudUJ1dHRvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblx0fSk7XHJcblx0JCgnLmhlYWRlckRyb3BEb3duTWVudUl0ZW1NYWluTGluaycpLm9uKCdjbGljaycsZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKHR5cGVvZiAkKGUudGFyZ2V0KS5uZXh0KClbMF0gIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKHRoaXMpLm5leHQoKS50b2dnbGVDbGFzcygnc2hvdycpO1xyXG5cdFx0fVxyXG5cdFx0JCgnLmhlYWRlckRyb3Bkb3duTWVudUlubmVySXRlbUxpbmsuc3ViQ2F0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLm5leHQoKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cdH0pO1xyXG5cdCQoJy5oZWFkZXJEcm9wZG93bk1lbnVJbm5lckl0ZW1MaW5rLnN1YkNhdCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhpcykubmV4dCgpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblx0fSk7XHJcbn1cclxuZnVuY3Rpb24gaW5pdFByaWNlRm9ybSgpIHtcclxuXHQkKCcucHJpY2VTbGlkZSAuaXRlbSBzZWxlY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuXHRcdCQodGhpcykucGFyZW50KCkubmV4dCgnLnByaWNlJykuZmluZCgnLnZhbHVlJykudGV4dCh2YWwpO1xyXG5cdH0pO1xyXG5cdCQoJyNwcmljZU1vZGFsJykub24oJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcclxuXHQgIGxldCBjdXJJdGVtID0gJChlLnJlbGF0ZWRUYXJnZXQpLnBhcmVudHMoJy5pdGVtJyk7XHJcblx0ICBsZXQgcHJpY2VOYW1lID0gY3VySXRlbS5maW5kKCcudGl0bGVCbG9jaycpLmZpbmQoJy50aXRsZScpLnRleHQoKTtcclxuXHQgIGxldCBwcmljZURlc2NyID0gY3VySXRlbS5maW5kKCcudGl0bGVCbG9jaycpLmZpbmQoJy5kZXNjcicpLnRleHQoKTtcclxuXHQgIGxldCBwcmljZVR5cGUgPSBjdXJJdGVtLmZpbmQoJy5hY3Rpdml0eScpLmZpbmQoJy52YWx1ZScpLnRleHQoKTtcclxuXHQgIGxldCBwcmljZVZhbCA9IGN1ckl0ZW0uZmluZCgnLnByaWNlJykuZmluZCgnLnZhbHVlJykudGV4dCgpO1xyXG5cclxuXHQgICQoJyNwcmljZUZvcm0nKS5maW5kKCdpbnB1dFtuYW1lPVwicHJpY2VOYW1lXCJdJykudmFsKHByaWNlTmFtZSk7XHJcblx0ICAkKCcjcHJpY2VGb3JtJykuZmluZCgnaW5wdXRbbmFtZT1cInByaWNlRGVzY3JcIl0nKS52YWwocHJpY2VEZXNjcik7XHJcblx0ICAkKCcjcHJpY2VGb3JtJykuZmluZCgnaW5wdXRbbmFtZT1cInByaWNlVHlwZVwiXScpLnZhbChwcmljZVR5cGUpO1xyXG5cdCAgJCgnI3ByaWNlRm9ybScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcmljZVZhbFwiXScpLnZhbChwcmljZVZhbCk7XHJcblx0fSlcclxufVxyXG5mdW5jdGlvbiBpbml0TmV3c0lubmVyUGFnZW5TbGlkZXIoKSB7XHJcblx0dmFyIG5ld3NJbm5lclBhZ2VuU2xpZGVyID0gJCgnLm5ld3NJbm5lclBhZ2VuU2xpZGVyJyk7XHJcblx0bmV3c0lubmVyUGFnZW5TbGlkZXIub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0bmF2OiB0cnVlLFxyXG5cdFx0bmF2VGV4dDogWyc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVMZWZ0LnBuZ1wiPicsJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZVJpZ2h0LnBuZ1wiPiddLFxyXG5cdFx0bWFyZ2luOiAyMCxcclxuXHRcdGRvdHM6ZmFsc2UsXHJcblx0XHRsb29wOnRydWUsXHJcblx0XHRyZXNwb25zaXZlQ2xhc3M6dHJ1ZSxcclxuXHRcdHJlc3BvbnNpdmUgOiB7XHJcblx0XHRcdDAgOiB7XHJcblx0XHRcdFx0aXRlbXM6MSxcclxuXHRcdFx0XHRuYXY6ZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0NzY4IDoge1xyXG5cdFx0XHRcdGl0ZW1zOjIsXHJcblx0XHRcdFx0bmF2OnRydWVcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRBZHZhbnRhZ2VzU2xpZGVyKCkge1xyXG5cdHZhciBhZHZhbnRhZ2VzU2xpZGVyID0gJCgnLmFkdmFudGFnZXNTbGlkZXInKTtcclxuXHRpZiAodHlwZW9mIGFkdmFudGFnZXNTbGlkZXJbMF0gIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdGZ1bmN0aW9uIGNoZWNrTWFpblNsaWRlKGUpIHtcclxuXHRcdFx0LyppZiAodHlwZW9mIGUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHQkKCcuYWR2YW50YWdlc0Jsb2NrICNjdXJyZW50SXRlbScpLnRleHQoZS5pdGVtLmluZGV4ICsgMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIHNsaWRlRWxlbUNvdW50ID0gYWR2YW50YWdlc1NsaWRlclswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZEVsZW1lbnRDb3VudDsqL1xyXG5cdFx0XHQvKiQoJy5hZHZhbnRhZ2VzQmxvY2sgI21heEl0ZW0nKS50ZXh0KHNsaWRlRWxlbUNvdW50KTsqL1xyXG5cdFx0XHRhZHZhbnRhZ2VzU2xpZGVyLmZpbmQoJy5vd2wtaXRlbScpLnJlbW92ZUNsYXNzKCdiaWcnKTtcclxuXHRcdFx0YWR2YW50YWdlc1NsaWRlci5maW5kKCcuYWN0aXZlOmVxKDEpJykuYWRkQ2xhc3MoJ2JpZycpO1xyXG5cdFx0fVxyXG5cdFx0YWR2YW50YWdlc1NsaWRlci5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdG5hdjogdHJ1ZSxcclxuXHRcdFx0bmF2VGV4dDogWyc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVMZWZ0LnBuZ1wiPicsJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZVJpZ2h0LnBuZ1wiPiddLFxyXG5cdFx0XHRtYXJnaW46IDEwLFxyXG5cdFx0XHRsb29wOnRydWUsXHJcblx0XHRcdHJlc3BvbnNpdmVDbGFzczp0cnVlLFxyXG5cdFx0XHRyZXNwb25zaXZlIDoge1xyXG5cdFx0XHRcdDAgOiB7XHJcblx0XHRcdFx0XHRpdGVtczoxLFxyXG5cdFx0XHRcdFx0bmF2OmZhbHNlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3NjggOiB7XHJcblx0XHRcdFx0XHRpdGVtczozLFxyXG5cdFx0XHRcdFx0bmF2OnRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDk5MiA6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjMsXHJcblx0XHRcdFx0XHRuYXY6dHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTIwMCA6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjMsXHJcblx0XHRcdFx0XHRuYXY6dHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTkwMCA6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjMsXHJcblx0XHRcdFx0XHRuYXY6dHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRjaGVja01haW5TbGlkZSgpO1xyXG5cdFx0YWR2YW50YWdlc1NsaWRlci5vbigndHJhbnNsYXRlZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGNoZWNrTWFpblNsaWRlKGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIGluaXRFeHBlcnRzU2xpZGVyKCkge1xyXG5cdHZhciBleHBlcnRzU2xpZGVyID0gJCgnLmV4cGVydHNTbGlkZXInKTtcclxuXHRleHBlcnRzU2xpZGVyLm93bENhcm91c2VsKHtcclxuXHRcdG5hdjpmYWxzZSxcclxuXHRcdGRvdHM6IHRydWUsXHJcblx0XHRsb29wOnRydWUsXHJcblx0XHRpdGVtczoxLFxyXG5cdFx0bmF2VGV4dDogWyc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVMZWZ0LnBuZ1wiPicsJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZVJpZ2h0LnBuZ1wiPiddLFxyXG5cdFx0cmVzcG9uc2l2ZToge1xyXG5cdFx0XHQwOiB7XHJcblx0XHRcdFx0bmF2OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRuYXY6ZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRTZXJ2aWNlc1NsaWRlcnMoKSB7XHJcblx0dmFyIHNlcnZpY2VzU2xpZGVyMSA9ICQoJy5zZXJ2aWNlc1NsaWRlcjEnKTtcclxuXHR2YXIgc2VydmljZXNTbGlkZXIyID0gJCgnLnNlcnZpY2VzU2xpZGVyMicpO1xyXG5cdHZhciBzZXJ2aWNlc1NsaWRlcjMgPSAkKCcuc2VydmljZXNTbGlkZXIzJyk7XHJcblx0dmFyIHNlcnZpY2VzU2xpZGVyc09wdGlvbnMgPSB7XHJcblx0XHRuYXY6dHJ1ZSxcclxuXHRcdG5hdlRleHQ6IFsnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlTGVmdC5wbmdcIj4nLCc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVSaWdodC5wbmdcIj4nXSxcclxuXHRcdGRvdHM6dHJ1ZSxcclxuXHRcdHJlc3BvbnNpdmVDbGFzczp0cnVlLFxyXG5cdFx0bWFyZ2luOjUwLFxyXG5cdFx0cmVzcG9uc2l2ZSA6IHtcclxuXHRcdFx0MCA6IHtcclxuXHRcdFx0XHRpdGVtczoxLFxyXG5cdFx0XHRcdG5hdjpmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ3NjggOiB7XHJcblx0XHRcdFx0aXRlbXM6MyxcclxuXHRcdFx0XHRuYXY6ZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0OTkyIDoge1xyXG5cdFx0XHRcdGl0ZW1zOjMsXHJcblx0XHRcdFx0bmF2OnRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0MTIwMCA6IHtcclxuXHRcdFx0XHRpdGVtczozLFxyXG5cdFx0XHRcdG5hdjp0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdDE5MDAgOiB7XHJcblx0XHRcdFx0aXRlbXM6MyxcclxuXHRcdFx0XHRuYXY6dHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdCQoJy5zZXJ2aWNlc1RhYnNCbG9jayBhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykub24oJ3Nob3cuYnMudGFiJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0JCgnLnNlcnZpY2VzVGFic0Jsb2NrIC50YWItcGFuZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUgc2hvdycpO1xyXG5cdH0pO1xyXG5cdHNlcnZpY2VzU2xpZGVyMS5vd2xDYXJvdXNlbChzZXJ2aWNlc1NsaWRlcnNPcHRpb25zKTtcclxuXHRzZXJ2aWNlc1NsaWRlcjIub3dsQ2Fyb3VzZWwoc2VydmljZXNTbGlkZXJzT3B0aW9ucyk7XHJcblx0c2VydmljZXNTbGlkZXIzLm93bENhcm91c2VsKHNlcnZpY2VzU2xpZGVyc09wdGlvbnMpO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRTZXJ0aWZpY2F0ZXNTbGlkZXIoKSB7XHJcblx0dmFyIHNlcnRpZmljYXRlc1NsaWRlciA9ICQoJy5zZXJ0aWZpY2F0ZXNTbGlkZXInKTtcclxuXHRpZiAodHlwZW9mIHNlcnRpZmljYXRlc1NsaWRlclswXSAhPSAndW5kZWZpbmVkJykge1xyXG5cdFx0dmFyIHNlcnRpZmljYXRlc1NsaWRlckRlc2NyaXB0aW9uID0gJCgnLnNlcnRpZmljYXRlc1NsaWRlckRlc2NyaXB0aW9uJyk7XHJcblx0XHQvKmZ1bmN0aW9uIGNoZWNrTWFpblNsaWRlKGUpIHtcclxuXHRcdFx0dmFyIHNsaWRlRWxlbUNvdW50ID0gc2VydGlmaWNhdGVzU2xpZGVyWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkRWxlbWVudENvdW50O1xyXG5cdFx0XHRzZXJ0aWZpY2F0ZXNTbGlkZXIuZmluZCgnLm93bC1pdGVtJykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKTtcclxuXHRcdFx0c2VydGlmaWNhdGVzU2xpZGVyLmZpbmQoJy5hY3RpdmU6ZXEoMSknKS5hZGRDbGFzcygnY3VycmVudCcpO1xyXG5cdFx0fSovXHJcblx0XHRzZXJ0aWZpY2F0ZXNTbGlkZXIub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHRkb3RzOiBmYWxzZSxcclxuXHRcdFx0bmF2OnRydWUsXHJcblx0XHRcdG5hdlRleHQ6IFsnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlTGVmdC5wbmdcIj4nLCc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVSaWdodC5wbmdcIj4nXSxcclxuXHRcdFx0bG9vcDp0cnVlLFxyXG5cdFx0XHRhdXRvcGxheTp0cnVlLFxyXG5cdFx0XHRtYXJnaW46MjUsXHJcblx0XHRcdC8qYXV0b1dpZHRoOnRydWUsKi9cclxuXHRcdFx0aXRlbXM6MyxcclxuXHRcdFx0cmVzcG9uc2l2ZToge1xyXG5cdFx0XHRcdDA6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjEsXHJcblx0XHRcdFx0XHRuYXY6ZmFsc2VcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdFx0aXRlbXM6MyxcclxuXHRcdFx0XHRcdG5hdjp0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdC8qY2hlY2tNYWluU2xpZGUoKTsqL1xyXG5cdFx0LypzZXJ0aWZpY2F0ZXNTbGlkZXIub24oJ3RyYW5zbGF0ZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRjaGVja01haW5TbGlkZShlKVxyXG5cdFx0XHRzZXJ0aWZpY2F0ZXNTbGlkZXJEZXNjcmlwdGlvbi50cmlnZ2VyKCd0by5vd2wuY2Fyb3VzZWwnLCBlLml0ZW0uaW5kZXgrMik7XHJcblx0XHR9KTsqL1xyXG4vKlx0XHRzZXJ0aWZpY2F0ZXNTbGlkZXJEZXNjcmlwdGlvbi5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0XHRuYXY6ZmFsc2UsXHJcblx0XHRcdGxvb3A6dHJ1ZSxcclxuXHRcdFx0bWFyZ2luOjI1LFxyXG5cdFx0XHRpdGVtczoxLFxyXG5cdFx0XHRzdGFydFBvc2l0aW9uOjEsXHJcblx0XHRcdG1vdXNlRHJhZzpmYWxzZSxcclxuXHRcdFx0dG91Y2hEcmFnOmZhbHNlXHJcblx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdDA6IHtcclxuXHRcdFx0XHRzdGFydFBvc2l0aW9uOjFcclxuXHRcdFx0fSxcclxuXHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0c3RhcnRQb3NpdGlvbjo0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHRcdHNlcnRpZmljYXRlc1NsaWRlckRlc2NyaXB0aW9uLm9uKCd0cmFuc2xhdGVkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZS5pdGVtLmluZGV4KTtcclxuXHRcdH0pOyovXHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIGluaXRSZXZpZXdzU2xpZGVyKCkge1xyXG5cdHZhciByZXZpZXdzU2xpZGVyID0gJCgnLnJldmlld3NTbGlkZXInKTtcclxuXHRpZiAodHlwZW9mIHJldmlld3NTbGlkZXJbMF0gIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdHZhciByZXZpZXdzU2xpZGVyRGVzY3JpcHRpb24gPSAkKCcucmV2aWV3c1NsaWRlckRlc2NyaXB0aW9uJyk7XHJcblx0XHRmdW5jdGlvbiBjaGVja01haW5TbGlkZShlKSB7XHJcblx0XHRcdHZhciBzbGlkZUVsZW1Db3VudCA9IHJldmlld3NTbGlkZXJbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRFbGVtZW50Q291bnQ7XHJcblx0XHRcdHJldmlld3NTbGlkZXIuZmluZCgnLm93bC1pdGVtJykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKTtcclxuXHRcdFx0cmV2aWV3c1NsaWRlci5maW5kKCcuYWN0aXZlOmVxKDEpJykuYWRkQ2xhc3MoJ2N1cnJlbnQnKTtcclxuXHRcdH1cclxuXHRcdHJldmlld3NTbGlkZXIub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHRkb3RzOiBmYWxzZSxcclxuXHRcdFx0bmF2OnRydWUsXHJcblx0XHRcdG5hdlRleHQ6IFsnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlTGVmdC5wbmdcIj4nLCc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVSaWdodC5wbmdcIj4nXSxcclxuXHRcdFx0bG9vcDp0cnVlLFxyXG5cdFx0XHRtYXJnaW46MjUsXHJcblx0XHRcdC8qYXV0b1dpZHRoOnRydWUsKi9cclxuXHRcdFx0aXRlbXM6MyxcclxuXHRcdFx0cmVzcG9uc2l2ZToge1xyXG5cdFx0XHRcdDA6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjEsXHJcblx0XHRcdFx0XHRuYXY6ZmFsc2VcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdFx0aXRlbXM6MyxcclxuXHRcdFx0XHRcdG5hdjp0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGNoZWNrTWFpblNsaWRlKCk7XHJcblx0XHRyZXZpZXdzU2xpZGVyLm9uKCdyZWZyZXNoLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZS5pdGVtLmluZGV4KTtcclxuXHRcdH0pO1xyXG5cdFx0cmV2aWV3c1NsaWRlci5vbigndHJhbnNsYXRlZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGNoZWNrTWFpblNsaWRlKGUpO1xyXG5cdFx0XHQvKnJldmlld3NTbGlkZXJEZXNjcmlwdGlvbi50cmlnZ2VyKCd0by5vd2wuY2Fyb3VzZWwnLGUuaXRlbS5pbmRleCsyKTsqL1xyXG5cdFx0XHRjb25zb2xlLmxvZygnVXA6Jyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUuaXRlbS5pbmRleCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXZpZXdzU2xpZGVyRGVzY3JpcHRpb24ub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHRkb3RzOiBmYWxzZSxcclxuXHRcdFx0bmF2OmZhbHNlLFxyXG5cdFx0XHRsb29wOnRydWUsXHJcblx0XHRcdG1hcmdpbjoyNSxcclxuXHRcdFx0aXRlbXM6MSxcclxuXHRcdFx0c3RhcnRQb3NpdGlvbjoxLFxyXG5cdFx0XHRtb3VzZURyYWc6ZmFsc2UsXHJcblx0XHRcdHRvdWNoRHJhZzpmYWxzZVxyXG5cdFx0LypyZXNwb25zaXZlOiB7XHJcblx0XHRcdDA6IHtcclxuXHRcdFx0XHRzdGFydFBvc2l0aW9uOjFcclxuXHRcdFx0fSxcclxuXHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0c3RhcnRQb3NpdGlvbjo0XHJcblx0XHRcdH1cclxuXHRcdH0qL1xyXG5cdH0pO1xyXG5cdFx0cmV2aWV3c1NsaWRlckRlc2NyaXB0aW9uLm9uKCd0cmFuc2xhdGVkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ0Rvd246Jyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUuaXRlbS5pbmRleCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIGluaXRQcmljZVNsaWRlcigpIHtcclxuXHR2YXIgcHJpY2VTbGlkZSA9ICQoJy5wcmljZVNsaWRlJyk7XHJcblx0aWYgKHR5cGVvZiBwcmljZVNsaWRlWzBdICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRmdW5jdGlvbiBjaGVja01haW5TbGlkZShlKSB7XHJcblx0XHRcdHZhciBzbGlkZUVsZW1Db3VudCA9IHByaWNlU2xpZGVbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRFbGVtZW50Q291bnQ7XHJcblx0XHRcdHByaWNlU2xpZGUuZmluZCgnLm93bC1pdGVtJykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKS5maW5kKCdzZWxlY3QnKS5wcm9wKCdkaXNhYmxlZCcsdHJ1ZSk7XHJcblx0XHRcdHByaWNlU2xpZGUuZmluZCgnLmFjdGl2ZTplcSgxKScpLmFkZENsYXNzKCdjdXJyZW50JykuZmluZCgnc2VsZWN0JykucHJvcCgnZGlzYWJsZWQnLGZhbHNlKTs7XHJcblx0XHR9XHJcblx0XHRwcmljZVNsaWRlLm93bENhcm91c2VsKHtcclxuXHRcdFx0bmF2OnRydWUsXHJcblx0XHRcdGRvdHM6IHRydWUsXHJcblx0XHRcdGl0ZW1zOjMsXHJcblx0XHRcdGxvb3A6dHJ1ZSxcclxuXHRcdFx0bWFyZ2luOjUwLFxyXG5cdFx0XHRuYXZUZXh0OiBbJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZUxlZnQucG5nXCI+JywnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlUmlnaHQucG5nXCI+J10sXHJcblx0XHRcdHJlc3BvbnNpdmU6IHtcclxuXHRcdFx0XHQwOiB7XHJcblx0XHRcdFx0XHRpdGVtczoxLFxyXG5cdFx0XHRcdFx0bmF2OmZhbHNlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjMsXHJcblx0XHRcdFx0XHRuYXY6dHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRjaGVja01haW5TbGlkZSgpO1xyXG5cdFx0cHJpY2VTbGlkZS5vbigndHJhbnNsYXRlZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGNoZWNrTWFpblNsaWRlKGUpXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuZnVuY3Rpb24gaW5pdE91cldvcmtlcnNTbGlkZXIoKSB7XHJcblx0dmFyIG91cldvcmtlcnNTbGlkZXIgPSAkKCcub3VyV29ya2Vyc1NsaWRlcicpO1xyXG5cdG91cldvcmtlcnNTbGlkZXIub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHRuYXY6dHJ1ZSxcclxuXHRcdFx0ZG90czogdHJ1ZSxcclxuXHRcdFx0bG9vcDp0cnVlLFxyXG5cdFx0XHRtYXJnaW46NTAsXHJcblx0XHRcdG5hdlRleHQ6IFsnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlTGVmdC5wbmdcIj4nLCc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVSaWdodC5wbmdcIj4nXSxcclxuXHRcdFx0cmVzcG9uc2l2ZToge1xyXG5cdFx0XHRcdDA6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjEsXHJcblx0XHRcdFx0XHRuYXY6ZmFsc2VcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdFx0aXRlbXM6MyxcclxuXHRcdFx0XHRcdG5hdjp0cnVlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ5OTI6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjQsXHJcblx0XHRcdFx0XHRuYXY6dHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcbn1cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cdGNvbnNvbGUubG9nKCdzY3JpcHQgcnVuLi4uJyk7XHJcblxyXG5cdCQoJ2lucHV0W3R5cGU9XCJ0ZWxcIl0nKS5tYXNrKFwiKzcoOTk5KS05OTktOTk5OVwiKTtcclxuXHRpbml0SGVhZGVyTWVudSgpO1xyXG5cdGluaXRBZHZhbnRhZ2VzU2xpZGVyKCk7XHJcblx0aW5pdEV4cGVydHNTbGlkZXIoKTtcclxuXHRpbml0U2VydmljZXNTbGlkZXJzKCk7XHJcblx0aW5pdFNlcnRpZmljYXRlc1NsaWRlcigpO1xyXG5cdGluaXRSZXZpZXdzU2xpZGVyKCk7XHJcblx0aW5pdFByaWNlU2xpZGVyKCk7XHJcblx0aW5pdE91cldvcmtlcnNTbGlkZXIoKTtcclxuXHRpbml0TmV3c0lubmVyUGFnZW5TbGlkZXIoKTtcclxuXHRpbml0UHJpY2VGb3JtKCk7XHJcblx0Y29uc29sZS5sb2coJ3NjcmlwdCBlbmQuJyk7XHJcbn0pO1xyXG5cclxuJCh3aW5kb3cpLm9uKCdzY3JvbGwnLGZ1bmN0aW9uKCkge1xyXG5cdHZhciBzY3JvbGxib2R5ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdGlmIChzY3JvbGxib2R5ID49IDIwMCkge1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTGluZScpLmFkZENsYXNzKCdmaXhlZCcpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTGluZSAubG9nbycpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZExpbmUgLmxvZ28nKS5hZGRDbGFzcygnY29sJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRNZW51TGVmdCcpLnBhcmVudCgpLmFkZENsYXNzKCdkLXhsLWJsb2NrIGNvbC14bC0zIGNvbC1sZy0zJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRNZW51UmlnaHQnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnY29sLWxnLTEyJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRNZW51UmlnaHQnKS5wYXJlbnQoKS5hZGRDbGFzcygnZC1ub25lIGQteGwtYmxvY2sgY29sLXhsIGNvbC1sZy01Jyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRTdWJNZW51JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZScpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkU3ViTWVudScpLnBhcmVudCgpLmFkZENsYXNzKCdjb2wtMTAgY29sLXhsLTIgY29sLWxnLTEwJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZExpbmUnKS5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZExpbmUgLmxvZ28nKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRMaW5lIC5sb2dvJykucmVtb3ZlQ2xhc3MoJ2NvbCcpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTWVudUxlZnQnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZC14bC1ibG9jayBjb2wteGwtMyBjb2wtbGctMycpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTWVudVJpZ2h0JykucGFyZW50KCkuYWRkQ2xhc3MoJ2NvbC1sZy0xMicpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTWVudVJpZ2h0JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2Qtbm9uZSBkLXhsLWJsb2NrIGNvbC14bCBjb2wtbGctNScpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkU3ViTWVudScpLnBhcmVudCgpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZFN1Yk1lbnUnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnY29sLTEwIGNvbC14bC0yIGNvbC1sZy0xMCcpO1xyXG5cdH1cclxufSkiXSwiZmlsZSI6InNjcmlwdHMuanMifQ==
