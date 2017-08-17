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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuZnVuY3Rpb24gd2luV0QoKSB7XHJcblx0dmFyIHJlc3VsdCA9ICQod2luZG93KS53aWR0aCgpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHRjb25zb2xlLmxvZygnc2NyaXB0IHJ1bi4uLicpO1xyXG5cdGNvbnNvbGUubG9nKHdpbldEKCkpO1xyXG5cdGNvbnNvbGUubG9nKCdzY3JpcHQgZW5kLicpO1xyXG59KTtcclxuXHJcbiQod2luZG93KS5vbignc2Nyb2xsJyxmdW5jdGlvbigpIHtcclxuXHR2YXIgc2Nyb2xsYm9keSA9ICQoJ2JvZHknKS5zY3JvbGxUb3AoKTtcclxuXHRpZiAoc2Nyb2xsYm9keSA+PSAyMDApIHtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZExpbmUnKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZExpbmUgLmxvZ28nKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRMaW5lIC5sb2dvJykuYWRkQ2xhc3MoJ2NvbC0yJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRNZW51TGVmdCcpLnBhcmVudCgpLmFkZENsYXNzKCdkLXhsLWJsb2NrIGNvbC14bC0zIGNvbC1sZy0zJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRNZW51UmlnaHQnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnY29sLWxnLTEyJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRNZW51UmlnaHQnKS5wYXJlbnQoKS5hZGRDbGFzcygnZC1ub25lIGQteGwtYmxvY2sgY29sLXhsLTUgY29sLWxnLTUnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZFN1Yk1lbnUnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZC1ub25lJyk7XHJcblx0XHQkKCcuaGVhZGVyRml4ZWRTdWJNZW51JykucGFyZW50KCkuYWRkQ2xhc3MoJ2NvbC0xMCBjb2wteGwtMiBjb2wtbGctMTAnKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTGluZScpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkTGluZSAubG9nbycpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZExpbmUgLmxvZ28nKS5yZW1vdmVDbGFzcygnY29sLTInKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZE1lbnVMZWZ0JykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2QteGwtYmxvY2sgY29sLXhsLTMgY29sLWxnLTMnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZE1lbnVSaWdodCcpLnBhcmVudCgpLmFkZENsYXNzKCdjb2wtbGctMTInKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZE1lbnVSaWdodCcpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdkLW5vbmUgZC14bC1ibG9jayBjb2wteGwtNSBjb2wtbGctNScpO1xyXG5cdFx0JCgnLmhlYWRlckZpeGVkU3ViTWVudScpLnBhcmVudCgpLmFkZENsYXNzKCdkLW5vbmUnKTtcclxuXHRcdCQoJy5oZWFkZXJGaXhlZFN1Yk1lbnUnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnY29sLTEwIGNvbC14bC0yIGNvbC1sZy0xMCcpO1xyXG5cdH1cclxufSkiXSwiZmlsZSI6InNjcmlwdHMuanMifQ==
