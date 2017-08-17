'use strict';
function winWD() {
	var result = $(window).width();
	return result;
}

$(document).ready(function () {
	console.log('script run...');
	console.log(winWD());
	console.log('script end.');
});

$(window).on('scroll',function() {
	var scrollbody = $('body').scrollTop();
	if (scrollbody >= 200) {
		$('.headerFixedLine').addClass('fixed');
		$('.headerFixedLine .logo').removeClass('d-none');
		$('.headerFixedLine .logo').addClass('col-2');
		$('.headerFixedMenuLeft').parent().addClass('d-xl-block col-xl-3 col-lg-3');
		$('.headerFixedMenuRight').parent().removeClass('col-lg-12');
		$('.headerFixedMenuRight').parent().addClass('d-none d-xl-block col-xl-5 col-lg-5');
		$('.headerFixedSubMenu').parent().removeClass('d-none');
		$('.headerFixedSubMenu').parent().addClass('col-10 col-xl-2 col-lg-10');
	} else {
		$('.headerFixedLine').removeClass('fixed');
		$('.headerFixedLine .logo').addClass('d-none');
		$('.headerFixedLine .logo').removeClass('col-2');
		$('.headerFixedMenuLeft').parent().removeClass('d-xl-block col-xl-3 col-lg-3');
		$('.headerFixedMenuRight').parent().addClass('col-lg-12');
		$('.headerFixedMenuRight').parent().removeClass('d-none d-xl-block col-xl-5 col-lg-5');
		$('.headerFixedSubMenu').parent().addClass('d-none');
		$('.headerFixedSubMenu').parent().removeClass('col-10 col-xl-2 col-lg-10');
	}
})