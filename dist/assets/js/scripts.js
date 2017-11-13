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
/*		reviewsSlider.on('refresh.owl.carousel', function(e) {
			console.log(e.item.index);
		});*/
		reviewsSlider.on('translated.owl.carousel', function(e) {
			checkMainSlide(e);
			reviewsSliderDescription.trigger('to.owl.carousel',e.item.index-3);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuZnVuY3Rpb24gd2luV0QoKSB7XHJcblx0dmFyIHJlc3VsdCA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gaW5pdEhlYWRlck1lbnUoKSB7XHJcblx0JCgnI2hlYWRlckRyb3Bkb3duTWVudUJ1dHRvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblx0fSk7XHJcblx0JCgnLmhlYWRlckRyb3BEb3duTWVudUl0ZW1NYWluTGluaycpLm9uKCdjbGljaycsZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKHR5cGVvZiAkKGUudGFyZ2V0KS5uZXh0KClbMF0gIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKHRoaXMpLm5leHQoKS50b2dnbGVDbGFzcygnc2hvdycpO1xyXG5cdFx0fVxyXG5cdFx0JCgnLmhlYWRlckRyb3Bkb3duTWVudUlubmVySXRlbUxpbmsuc3ViQ2F0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLm5leHQoKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cdH0pO1xyXG5cdCQoJy5oZWFkZXJEcm9wZG93bk1lbnVJbm5lckl0ZW1MaW5rLnN1YkNhdCcpLm9uKCdjbGljaycsZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhpcykubmV4dCgpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcblx0fSk7XHJcbn1cclxuZnVuY3Rpb24gaW5pdFByaWNlRm9ybSgpIHtcclxuXHQkKCcucHJpY2VTbGlkZSAuaXRlbSBzZWxlY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuXHRcdCQodGhpcykucGFyZW50KCkubmV4dCgnLnByaWNlJykuZmluZCgnLnZhbHVlJykudGV4dCh2YWwpO1xyXG5cdH0pO1xyXG5cdCQoJyNwcmljZU1vZGFsJykub24oJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcclxuXHQgIGxldCBjdXJJdGVtID0gJChlLnJlbGF0ZWRUYXJnZXQpLnBhcmVudHMoJy5pdGVtJyk7XHJcblx0ICBsZXQgcHJpY2VOYW1lID0gY3VySXRlbS5maW5kKCcudGl0bGVCbG9jaycpLmZpbmQoJy50aXRsZScpLnRleHQoKTtcclxuXHQgIGxldCBwcmljZURlc2NyID0gY3VySXRlbS5maW5kKCcudGl0bGVCbG9jaycpLmZpbmQoJy5kZXNjcicpLnRleHQoKTtcclxuXHQgIGxldCBwcmljZVR5cGUgPSBjdXJJdGVtLmZpbmQoJy5hY3Rpdml0eScpLmZpbmQoJy52YWx1ZScpLnRleHQoKTtcclxuXHQgIGxldCBwcmljZVZhbCA9IGN1ckl0ZW0uZmluZCgnLnByaWNlJykuZmluZCgnLnZhbHVlJykudGV4dCgpO1xyXG5cclxuXHQgICQoJyNwcmljZUZvcm0nKS5maW5kKCdpbnB1dFtuYW1lPVwicHJpY2VOYW1lXCJdJykudmFsKHByaWNlTmFtZSk7XHJcblx0ICAkKCcjcHJpY2VGb3JtJykuZmluZCgnaW5wdXRbbmFtZT1cInByaWNlRGVzY3JcIl0nKS52YWwocHJpY2VEZXNjcik7XHJcblx0ICAkKCcjcHJpY2VGb3JtJykuZmluZCgnaW5wdXRbbmFtZT1cInByaWNlVHlwZVwiXScpLnZhbChwcmljZVR5cGUpO1xyXG5cdCAgJCgnI3ByaWNlRm9ybScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcmljZVZhbFwiXScpLnZhbChwcmljZVZhbCk7XHJcblx0fSlcclxufVxyXG5mdW5jdGlvbiBpbml0TmV3c0lubmVyUGFnZW5TbGlkZXIoKSB7XHJcblx0dmFyIG5ld3NJbm5lclBhZ2VuU2xpZGVyID0gJCgnLm5ld3NJbm5lclBhZ2VuU2xpZGVyJyk7XHJcblx0bmV3c0lubmVyUGFnZW5TbGlkZXIub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0bmF2OiB0cnVlLFxyXG5cdFx0bmF2VGV4dDogWyc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVMZWZ0LnBuZ1wiPicsJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZVJpZ2h0LnBuZ1wiPiddLFxyXG5cdFx0bWFyZ2luOiAyMCxcclxuXHRcdGRvdHM6ZmFsc2UsXHJcblx0XHRsb29wOnRydWUsXHJcblx0XHRyZXNwb25zaXZlQ2xhc3M6dHJ1ZSxcclxuXHRcdHJlc3BvbnNpdmUgOiB7XHJcblx0XHRcdDAgOiB7XHJcblx0XHRcdFx0aXRlbXM6MSxcclxuXHRcdFx0XHRuYXY6ZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0NzY4IDoge1xyXG5cdFx0XHRcdGl0ZW1zOjIsXHJcblx0XHRcdFx0bmF2OnRydWVcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRBZHZhbnRhZ2VzU2xpZGVyKCkge1xyXG5cdHZhciBhZHZhbnRhZ2VzU2xpZGVyID0gJCgnLmFkdmFudGFnZXNTbGlkZXInKTtcclxuXHRpZiAodHlwZW9mIGFkdmFudGFnZXNTbGlkZXJbMF0gIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdGZ1bmN0aW9uIGNoZWNrTWFpblNsaWRlKGUpIHtcclxuXHRcdFx0LyppZiAodHlwZW9mIGUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHQkKCcuYWR2YW50YWdlc0Jsb2NrICNjdXJyZW50SXRlbScpLnRleHQoZS5pdGVtLmluZGV4ICsgMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIHNsaWRlRWxlbUNvdW50ID0gYWR2YW50YWdlc1NsaWRlclswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZEVsZW1lbnRDb3VudDsqL1xyXG5cdFx0XHQvKiQoJy5hZHZhbnRhZ2VzQmxvY2sgI21heEl0ZW0nKS50ZXh0KHNsaWRlRWxlbUNvdW50KTsqL1xyXG5cdFx0XHRhZHZhbnRhZ2VzU2xpZGVyLmZpbmQoJy5vd2wtaXRlbScpLnJlbW92ZUNsYXNzKCdiaWcnKTtcclxuXHRcdFx0YWR2YW50YWdlc1NsaWRlci5maW5kKCcuYWN0aXZlOmVxKDEpJykuYWRkQ2xhc3MoJ2JpZycpO1xyXG5cdFx0fVxyXG5cdFx0YWR2YW50YWdlc1NsaWRlci5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdG5hdjogdHJ1ZSxcclxuXHRcdFx0bmF2VGV4dDogWyc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVMZWZ0LnBuZ1wiPicsJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZVJpZ2h0LnBuZ1wiPiddLFxyXG5cdFx0XHRtYXJnaW46IDEwLFxyXG5cdFx0XHRsb29wOnRydWUsXHJcblx0XHRcdHJlc3BvbnNpdmVDbGFzczp0cnVlLFxyXG5cdFx0XHRyZXNwb25zaXZlIDoge1xyXG5cdFx0XHRcdDAgOiB7XHJcblx0XHRcdFx0XHRpdGVtczoxLFxyXG5cdFx0XHRcdFx0bmF2OmZhbHNlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3NjggOiB7XHJcblx0XHRcdFx0XHRpdGVtczozLFxyXG5cdFx0XHRcdFx0bmF2OnRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDk5MiA6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjMsXHJcblx0XHRcdFx0XHRuYXY6dHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTIwMCA6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjMsXHJcblx0XHRcdFx0XHRuYXY6dHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTkwMCA6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjMsXHJcblx0XHRcdFx0XHRuYXY6dHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRjaGVja01haW5TbGlkZSgpO1xyXG5cdFx0YWR2YW50YWdlc1NsaWRlci5vbigndHJhbnNsYXRlZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGNoZWNrTWFpblNsaWRlKGUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIGluaXRFeHBlcnRzU2xpZGVyKCkge1xyXG5cdHZhciBleHBlcnRzU2xpZGVyID0gJCgnLmV4cGVydHNTbGlkZXInKTtcclxuXHRleHBlcnRzU2xpZGVyLm93bENhcm91c2VsKHtcclxuXHRcdG5hdjpmYWxzZSxcclxuXHRcdGRvdHM6IHRydWUsXHJcblx0XHRsb29wOnRydWUsXHJcblx0XHRpdGVtczoxLFxyXG5cdFx0bmF2VGV4dDogWyc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVMZWZ0LnBuZ1wiPicsJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZVJpZ2h0LnBuZ1wiPiddLFxyXG5cdFx0cmVzcG9uc2l2ZToge1xyXG5cdFx0XHQwOiB7XHJcblx0XHRcdFx0bmF2OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRuYXY6ZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRTZXJ2aWNlc1NsaWRlcnMoKSB7XHJcblx0dmFyIHNlcnZpY2VzU2xpZGVyMSA9ICQoJy5zZXJ2aWNlc1NsaWRlcjEnKTtcclxuXHR2YXIgc2VydmljZXNTbGlkZXIyID0gJCgnLnNlcnZpY2VzU2xpZGVyMicpO1xyXG5cdHZhciBzZXJ2aWNlc1NsaWRlcjMgPSAkKCcuc2VydmljZXNTbGlkZXIzJyk7XHJcblx0dmFyIHNlcnZpY2VzU2xpZGVyc09wdGlvbnMgPSB7XHJcblx0XHRuYXY6dHJ1ZSxcclxuXHRcdG5hdlRleHQ6IFsnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlTGVmdC5wbmdcIj4nLCc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVSaWdodC5wbmdcIj4nXSxcclxuXHRcdGRvdHM6dHJ1ZSxcclxuXHRcdHJlc3BvbnNpdmVDbGFzczp0cnVlLFxyXG5cdFx0bWFyZ2luOjUwLFxyXG5cdFx0cmVzcG9uc2l2ZSA6IHtcclxuXHRcdFx0MCA6IHtcclxuXHRcdFx0XHRpdGVtczoxLFxyXG5cdFx0XHRcdG5hdjpmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ3NjggOiB7XHJcblx0XHRcdFx0aXRlbXM6MyxcclxuXHRcdFx0XHRuYXY6ZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0OTkyIDoge1xyXG5cdFx0XHRcdGl0ZW1zOjMsXHJcblx0XHRcdFx0bmF2OnRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0MTIwMCA6IHtcclxuXHRcdFx0XHRpdGVtczozLFxyXG5cdFx0XHRcdG5hdjp0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdDE5MDAgOiB7XHJcblx0XHRcdFx0aXRlbXM6MyxcclxuXHRcdFx0XHRuYXY6dHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdCQoJy5zZXJ2aWNlc1RhYnNCbG9jayBhW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykub24oJ3Nob3cuYnMudGFiJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0JCgnLnNlcnZpY2VzVGFic0Jsb2NrIC50YWItcGFuZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUgc2hvdycpO1xyXG5cdH0pO1xyXG5cdHNlcnZpY2VzU2xpZGVyMS5vd2xDYXJvdXNlbChzZXJ2aWNlc1NsaWRlcnNPcHRpb25zKTtcclxuXHRzZXJ2aWNlc1NsaWRlcjIub3dsQ2Fyb3VzZWwoc2VydmljZXNTbGlkZXJzT3B0aW9ucyk7XHJcblx0c2VydmljZXNTbGlkZXIzLm93bENhcm91c2VsKHNlcnZpY2VzU2xpZGVyc09wdGlvbnMpO1xyXG59XHJcbmZ1bmN0aW9uIGluaXRTZXJ0aWZpY2F0ZXNTbGlkZXIoKSB7XHJcblx0dmFyIHNlcnRpZmljYXRlc1NsaWRlciA9ICQoJy5zZXJ0aWZpY2F0ZXNTbGlkZXInKTtcclxuXHRpZiAodHlwZW9mIHNlcnRpZmljYXRlc1NsaWRlclswXSAhPSAndW5kZWZpbmVkJykge1xyXG5cdFx0dmFyIHNlcnRpZmljYXRlc1NsaWRlckRlc2NyaXB0aW9uID0gJCgnLnNlcnRpZmljYXRlc1NsaWRlckRlc2NyaXB0aW9uJyk7XHJcblx0XHQvKmZ1bmN0aW9uIGNoZWNrTWFpblNsaWRlKGUpIHtcclxuXHRcdFx0dmFyIHNsaWRlRWxlbUNvdW50ID0gc2VydGlmaWNhdGVzU2xpZGVyWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkRWxlbWVudENvdW50O1xyXG5cdFx0XHRzZXJ0aWZpY2F0ZXNTbGlkZXIuZmluZCgnLm93bC1pdGVtJykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQnKTtcclxuXHRcdFx0c2VydGlmaWNhdGVzU2xpZGVyLmZpbmQoJy5hY3RpdmU6ZXEoMSknKS5hZGRDbGFzcygnY3VycmVudCcpO1xyXG5cdFx0fSovXHJcblx0XHRzZXJ0aWZpY2F0ZXNTbGlkZXIub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHRkb3RzOiBmYWxzZSxcclxuXHRcdFx0bmF2OnRydWUsXHJcblx0XHRcdG5hdlRleHQ6IFsnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlTGVmdC5wbmdcIj4nLCc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVSaWdodC5wbmdcIj4nXSxcclxuXHRcdFx0bG9vcDp0cnVlLFxyXG5cdFx0XHRhdXRvcGxheTp0cnVlLFxyXG5cdFx0XHRtYXJnaW46MjUsXHJcblx0XHRcdC8qYXV0b1dpZHRoOnRydWUsKi9cclxuXHRcdFx0aXRlbXM6MyxcclxuXHRcdFx0cmVzcG9uc2l2ZToge1xyXG5cdFx0XHRcdDA6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjEsXHJcblx0XHRcdFx0XHRuYXY6ZmFsc2VcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdFx0aXRlbXM6MyxcclxuXHRcdFx0XHRcdG5hdjp0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdC8qY2hlY2tNYWluU2xpZGUoKTsqL1xyXG5cdFx0LypzZXJ0aWZpY2F0ZXNTbGlkZXIub24oJ3RyYW5zbGF0ZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRjaGVja01haW5TbGlkZShlKVxyXG5cdFx0XHRzZXJ0aWZpY2F0ZXNTbGlkZXJEZXNjcmlwdGlvbi50cmlnZ2VyKCd0by5vd2wuY2Fyb3VzZWwnLCBlLml0ZW0uaW5kZXgrMik7XHJcblx0XHR9KTsqL1xyXG4vKlx0XHRzZXJ0aWZpY2F0ZXNTbGlkZXJEZXNjcmlwdGlvbi5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0XHRuYXY6ZmFsc2UsXHJcblx0XHRcdGxvb3A6dHJ1ZSxcclxuXHRcdFx0bWFyZ2luOjI1LFxyXG5cdFx0XHRpdGVtczoxLFxyXG5cdFx0XHRzdGFydFBvc2l0aW9uOjEsXHJcblx0XHRcdG1vdXNlRHJhZzpmYWxzZSxcclxuXHRcdFx0dG91Y2hEcmFnOmZhbHNlXHJcblx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdDA6IHtcclxuXHRcdFx0XHRzdGFydFBvc2l0aW9uOjFcclxuXHRcdFx0fSxcclxuXHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0c3RhcnRQb3NpdGlvbjo0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHRcdHNlcnRpZmljYXRlc1NsaWRlckRlc2NyaXB0aW9uLm9uKCd0cmFuc2xhdGVkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZS5pdGVtLmluZGV4KTtcclxuXHRcdH0pOyovXHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIGluaXRSZXZpZXdzU2xpZGVyKCkge1xyXG5cdHZhciByZXZpZXdzU2xpZGVyID0gJCgnLnJldmlld3NTbGlkZXInKTtcclxuXHRpZiAodHlwZW9mIHJldmlld3NTbGlkZXJbMF0gIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdHZhciByZXZpZXdzU2xpZGVyRGVzY3JpcHRpb24gPSAkKCcucmV2aWV3c1NsaWRlckRlc2NyaXB0aW9uJyk7XHJcblx0XHRmdW5jdGlvbiBjaGVja01haW5TbGlkZShlKSB7XHJcblx0XHRcdHZhciBzbGlkZUVsZW1Db3VudCA9IHJldmlld3NTbGlkZXJbMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRFbGVtZW50Q291bnQ7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXZpZXdzU2xpZGVyLmZpbmQoJy5vd2wtaXRlbScpLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XHJcblx0XHRcdHJldmlld3NTbGlkZXIuZmluZCgnLmFjdGl2ZTplcSgxKScpLmFkZENsYXNzKCdjdXJyZW50Jyk7XHJcblx0XHR9XHJcblx0XHRyZXZpZXdzU2xpZGVyLm93bENhcm91c2VsKHtcclxuXHRcdFx0ZG90czogZmFsc2UsXHJcblx0XHRcdG5hdjp0cnVlLFxyXG5cdFx0XHRuYXZUZXh0OiBbJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZUxlZnQucG5nXCI+JywnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlUmlnaHQucG5nXCI+J10sXHJcblx0XHRcdGxvb3A6dHJ1ZSxcclxuXHRcdFx0bWFyZ2luOjI1LFxyXG5cdFx0XHQvKmF1dG9XaWR0aDp0cnVlLCovXHJcblx0XHRcdGl0ZW1zOjMsXHJcblx0XHRcdHJlc3BvbnNpdmU6IHtcclxuXHRcdFx0XHQwOiB7XHJcblx0XHRcdFx0XHRpdGVtczoxLFxyXG5cdFx0XHRcdFx0bmF2OmZhbHNlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjMsXHJcblx0XHRcdFx0XHRuYXY6dHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRjaGVja01haW5TbGlkZSgpO1xyXG4vKlx0XHRyZXZpZXdzU2xpZGVyLm9uKCdyZWZyZXNoLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZS5pdGVtLmluZGV4KTtcclxuXHRcdH0pOyovXHJcblx0XHRyZXZpZXdzU2xpZGVyLm9uKCd0cmFuc2xhdGVkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Y2hlY2tNYWluU2xpZGUoZSk7XHJcblx0XHRcdHJldmlld3NTbGlkZXJEZXNjcmlwdGlvbi50cmlnZ2VyKCd0by5vd2wuY2Fyb3VzZWwnLGUuaXRlbS5pbmRleC0zKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1VwOicpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlLml0ZW0uaW5kZXgpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV2aWV3c1NsaWRlckRlc2NyaXB0aW9uLm93bENhcm91c2VsKHtcclxuXHRcdFx0ZG90czogZmFsc2UsXHJcblx0XHRcdG5hdjpmYWxzZSxcclxuXHRcdFx0bG9vcDp0cnVlLFxyXG5cdFx0XHRtYXJnaW46MjUsXHJcblx0XHRcdGl0ZW1zOjEsXHJcblx0XHRcdHN0YXJ0UG9zaXRpb246MSxcclxuXHRcdFx0bW91c2VEcmFnOmZhbHNlLFxyXG5cdFx0XHR0b3VjaERyYWc6ZmFsc2VcclxuXHRcdC8qcmVzcG9uc2l2ZToge1xyXG5cdFx0XHQwOiB7XHJcblx0XHRcdFx0c3RhcnRQb3NpdGlvbjoxXHJcblx0XHRcdH0sXHJcblx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdHN0YXJ0UG9zaXRpb246NFxyXG5cdFx0XHR9XHJcblx0XHR9Ki9cclxuXHR9KTtcclxuXHRcdHJldmlld3NTbGlkZXJEZXNjcmlwdGlvbi5vbigndHJhbnNsYXRlZC5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdEb3duOicpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlLml0ZW0uaW5kZXgpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5mdW5jdGlvbiBpbml0UHJpY2VTbGlkZXIoKSB7XHJcblx0dmFyIHByaWNlU2xpZGUgPSAkKCcucHJpY2VTbGlkZScpO1xyXG5cdGlmICh0eXBlb2YgcHJpY2VTbGlkZVswXSAhPSAndW5kZWZpbmVkJykge1xyXG5cdFx0ZnVuY3Rpb24gY2hlY2tNYWluU2xpZGUoZSkge1xyXG5cdFx0XHR2YXIgc2xpZGVFbGVtQ291bnQgPSBwcmljZVNsaWRlWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkRWxlbWVudENvdW50O1xyXG5cdFx0XHRwcmljZVNsaWRlLmZpbmQoJy5vd2wtaXRlbScpLnJlbW92ZUNsYXNzKCdjdXJyZW50JykuZmluZCgnc2VsZWN0JykucHJvcCgnZGlzYWJsZWQnLHRydWUpO1xyXG5cdFx0XHRwcmljZVNsaWRlLmZpbmQoJy5hY3RpdmU6ZXEoMSknKS5hZGRDbGFzcygnY3VycmVudCcpLmZpbmQoJ3NlbGVjdCcpLnByb3AoJ2Rpc2FibGVkJyxmYWxzZSk7O1xyXG5cdFx0fVxyXG5cdFx0cHJpY2VTbGlkZS5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdG5hdjp0cnVlLFxyXG5cdFx0XHRkb3RzOiB0cnVlLFxyXG5cdFx0XHRpdGVtczozLFxyXG5cdFx0XHRsb29wOnRydWUsXHJcblx0XHRcdG1hcmdpbjo1MCxcclxuXHRcdFx0bmF2VGV4dDogWyc8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvc2xpZGVMZWZ0LnBuZ1wiPicsJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZVJpZ2h0LnBuZ1wiPiddLFxyXG5cdFx0XHRyZXNwb25zaXZlOiB7XHJcblx0XHRcdFx0MDoge1xyXG5cdFx0XHRcdFx0aXRlbXM6MSxcclxuXHRcdFx0XHRcdG5hdjpmYWxzZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0XHRpdGVtczozLFxyXG5cdFx0XHRcdFx0bmF2OnRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Y2hlY2tNYWluU2xpZGUoKTtcclxuXHRcdHByaWNlU2xpZGUub24oJ3RyYW5zbGF0ZWQub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRjaGVja01haW5TbGlkZShlKVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIGluaXRPdXJXb3JrZXJzU2xpZGVyKCkge1xyXG5cdHZhciBvdXJXb3JrZXJzU2xpZGVyID0gJCgnLm91cldvcmtlcnNTbGlkZXInKTtcclxuXHRvdXJXb3JrZXJzU2xpZGVyLm93bENhcm91c2VsKHtcclxuXHRcdFx0bmF2OnRydWUsXHJcblx0XHRcdGRvdHM6IHRydWUsXHJcblx0XHRcdGxvb3A6dHJ1ZSxcclxuXHRcdFx0bWFyZ2luOjUwLFxyXG5cdFx0XHRuYXZUZXh0OiBbJzxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9zbGlkZUxlZnQucG5nXCI+JywnPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3NsaWRlUmlnaHQucG5nXCI+J10sXHJcblx0XHRcdHJlc3BvbnNpdmU6IHtcclxuXHRcdFx0XHQwOiB7XHJcblx0XHRcdFx0XHRpdGVtczoxLFxyXG5cdFx0XHRcdFx0bmF2OmZhbHNlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdGl0ZW1zOjMsXHJcblx0XHRcdFx0XHRuYXY6dHJ1ZVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0OTkyOiB7XHJcblx0XHRcdFx0XHRpdGVtczo0LFxyXG5cdFx0XHRcdFx0bmF2OnRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG59XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHRjb25zb2xlLmxvZygnc2NyaXB0IHJ1bi4uLicpO1xyXG5cclxuXHQkKCdpbnB1dFt0eXBlPVwidGVsXCJdJykubWFzayhcIis3KDk5OSktOTk5LTk5OTlcIik7XHJcblx0aW5pdEhlYWRlck1lbnUoKTtcclxuXHRpbml0QWR2YW50YWdlc1NsaWRlcigpO1xyXG5cdGluaXRFeHBlcnRzU2xpZGVyKCk7XHJcblx0aW5pdFNlcnZpY2VzU2xpZGVycygpO1xyXG5cdGluaXRTZXJ0aWZpY2F0ZXNTbGlkZXIoKTtcclxuXHRpbml0UmV2aWV3c1NsaWRlcigpO1xyXG5cdGluaXRQcmljZVNsaWRlcigpO1xyXG5cdGluaXRPdXJXb3JrZXJzU2xpZGVyKCk7XHJcblx0aW5pdE5ld3NJbm5lclBhZ2VuU2xpZGVyKCk7XHJcblx0aW5pdFByaWNlRm9ybSgpO1xyXG5cdGNvbnNvbGUubG9nKCdzY3JpcHQgZW5kLicpO1xyXG59KTtcclxuXHJcbiQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpIHtcclxuXHR2YXIgc2Nyb2xsYm9keSA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHRpZiAoc2Nyb2xsYm9keSA+PSAyMDApIHtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZExpbmUnKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZExpbmUgLmxvZ28nKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRMaW5lIC5sb2dvJykuYWRkQ2xhc3MoJ2NvbCcpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTWVudUxlZnQnKS5wYXJlbnQoKS5hZGRDbGFzcygnZC14bC1ibG9jayBjb2wteGwtMyBjb2wtbGctMycpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTWVudVJpZ2h0JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2NvbC1sZy0xMicpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTWVudVJpZ2h0JykucGFyZW50KCkuYWRkQ2xhc3MoJ2Qtbm9uZSBkLXhsLWJsb2NrIGNvbC14bCBjb2wtbGctNScpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkU3ViTWVudScpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZFN1Yk1lbnUnKS5wYXJlbnQoKS5hZGRDbGFzcygnY29sLTEwIGNvbC14bC0yIGNvbC1sZy0xMCcpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRMaW5lJykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRMaW5lIC5sb2dvJykuYWRkQ2xhc3MoJ2Qtbm9uZScpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTGluZSAubG9nbycpLnJlbW92ZUNsYXNzKCdjb2wnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZE1lbnVMZWZ0JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2QteGwtYmxvY2sgY29sLXhsLTMgY29sLWxnLTMnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZE1lbnVSaWdodCcpLnBhcmVudCgpLmFkZENsYXNzKCdjb2wtbGctMTInKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZE1lbnVSaWdodCcpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdkLW5vbmUgZC14bC1ibG9jayBjb2wteGwgY29sLWxnLTUnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZFN1Yk1lbnUnKS5wYXJlbnQoKS5hZGRDbGFzcygnZC1ub25lJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRTdWJNZW51JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2NvbC0xMCBjb2wteGwtMiBjb2wtbGctMTAnKTtcclxuXHR9XHJcbn0pIl0sImZpbGUiOiJzY3JpcHRzLmpzIn0=
