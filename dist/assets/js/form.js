function clearForm(param) {
	$(param).find('textarea').val('');
	q = $(param).find('input');
	q = $.makeArray(q);
	q.forEach(function(item) {
		if($(item).attr('type') != 'hidden' && $(item).attr('type') != 'submit'){
			$(item).val('');
		}
	})
}

$('form').submit(function(e) {
	e.preventDefault();
	var error = false;
	var url = '/assets/mailers/mailCore.php';
	var msg = $(this).serialize();
	
	var form = $(this);
	var fd = new FormData(this);
	/*if ($(form).find('input[type="file"]').val() != '') {
		console.log($(form).find('input[type="file"]'));
		msg += '&userfile='+$(form).find('input[type="file"]').val();
	}*/
	fd.append('antiSpam','');
	var msgArr = form.find('input');
	var msgArrPush = form.find('select');
	msgArr.push(msgArrPush);
	var msgArr = $.makeArray(msgArr);
	var checkSpam = false;
	console.log(fd.get('antiSpam'));
	//console.log(msg);
	//console.log(form);
	//console.log(msgArr);
	msgArr.forEach(function(item) {
		thisItem = $(item).attr('type');

		console.log('----------------------');
		console.log(thisItem);
		switch (thisItem) {
			/*case 'file' : {
				console.log($(item).attr('name'));
				var files = $(item).prop('files')[0];
				console.log(files);
				fd.append('userfile', files.name);
				break;
			}*/
			case 'data': {
				if ($(item).val() == '') {
					error = true;
				}
				console.log($(item).val());
				break;
			}
			case 'doctors': {
				if ($(item).val() == '') {
					error = true;
				}
				console.log($(item).val());
				break;
			}
			case 'name': {
				if ($(item).val() == '') {
					error = true;
				}
				console.log($(item).val());
				break;
			}
			case 'tel': {
				if($(item).val() !== '') {
					pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
					result = pattern.test($(item).val());
					if (!result) {
						error = true;
					}
				} else {
					error = true;
					/*clearForm(form);*/
				}
				console.log($(item).val());
				break;
			}
			case 'email': {
				if($(item).val() !== '') {
					pattern = /^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i;
					result = pattern.test($(item).val());
					if (!result) {
						error = true;
					}
				} else {
					error = true;
					/*clearForm(form);*/
				}
				console.log($(item).val());
				break;
			}
			case 'file': {
				//prop('files')[0]
				var userfile = this.querySelector('input[type="file"]').files[0];
				console.log(userfile);
				fd.append('userfile', $('input[type=file]')[0].files[0]); 
				console.log(fd);
			}
			default: {
				
			}
		}
		if ($(form).find('textarea').length > 0) {
			if ($(form).find('textarea').val() === '') {
				error = true;
			}
		}
	});

	if (!error) {
		$.ajax({
			type: "POST",
			url: url,
			/*dataType: 'json',*/
			data: fd,
	        processData: false,
	        contentType: false,
			success: function(msg){
				if(msg === "OK"){
					result = "Заявка успешно отправлена!";
					console.log('ok');
					$('.modal').modal('hide');
					clearForm(form);
					swal(
						'Сообщение отправлено успешно!',
						msg,
						'success'
					);
				}
				else{
					if (msg == 'SPAM') {
						swal(
							'Здесь нет места спаму!!!',
							msg,
							'warning'
						);
						$('.antiSpam').val('')
					} else {
						swal(
							'Произошла ошибка, попробуйте еще раз!',
							msg,
							'error'
						);
					}
				}
				/*console.log(form);*/
			}
		});                
	} else {
		swal(
			'Заполните все поля',
			'',
			'warning'
		);
	}
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNsZWFyRm9ybShwYXJhbSkge1xyXG5cdCQocGFyYW0pLmZpbmQoJ3RleHRhcmVhJykudmFsKCcnKTtcclxuXHRxID0gJChwYXJhbSkuZmluZCgnaW5wdXQnKTtcclxuXHRxID0gJC5tYWtlQXJyYXkocSk7XHJcblx0cS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdGlmKCQoaXRlbSkuYXR0cigndHlwZScpICE9ICdoaWRkZW4nICYmICQoaXRlbSkuYXR0cigndHlwZScpICE9ICdzdWJtaXQnKXtcclxuXHRcdFx0JChpdGVtKS52YWwoJycpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbiQoJ2Zvcm0nKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR2YXIgZXJyb3IgPSBmYWxzZTtcclxuXHR2YXIgdXJsID0gJy9hc3NldHMvbWFpbGVycy9tYWlsQ29yZS5waHAnO1xyXG5cdHZhciBtc2cgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xyXG5cdFxyXG5cdHZhciBmb3JtID0gJCh0aGlzKTtcclxuXHR2YXIgZmQgPSBuZXcgRm9ybURhdGEodGhpcyk7XHJcblx0LyppZiAoJChmb3JtKS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLnZhbCgpICE9ICcnKSB7XHJcblx0XHRjb25zb2xlLmxvZygkKGZvcm0pLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykpO1xyXG5cdFx0bXNnICs9ICcmdXNlcmZpbGU9JyskKGZvcm0pLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykudmFsKCk7XHJcblx0fSovXHJcblx0ZmQuYXBwZW5kKCdhbnRpU3BhbScsJycpO1xyXG5cdHZhciBtc2dBcnIgPSBmb3JtLmZpbmQoJ2lucHV0Jyk7XHJcblx0dmFyIG1zZ0FyclB1c2ggPSBmb3JtLmZpbmQoJ3NlbGVjdCcpO1xyXG5cdG1zZ0Fyci5wdXNoKG1zZ0FyclB1c2gpO1xyXG5cdHZhciBtc2dBcnIgPSAkLm1ha2VBcnJheShtc2dBcnIpO1xyXG5cdHZhciBjaGVja1NwYW0gPSBmYWxzZTtcclxuXHRjb25zb2xlLmxvZyhmZC5nZXQoJ2FudGlTcGFtJykpO1xyXG5cdC8vY29uc29sZS5sb2cobXNnKTtcclxuXHQvL2NvbnNvbGUubG9nKGZvcm0pO1xyXG5cdC8vY29uc29sZS5sb2cobXNnQXJyKTtcclxuXHRtc2dBcnIuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcblx0XHR0aGlzSXRlbSA9ICQoaXRlbSkuYXR0cigndHlwZScpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblx0XHRjb25zb2xlLmxvZyh0aGlzSXRlbSk7XHJcblx0XHRzd2l0Y2ggKHRoaXNJdGVtKSB7XHJcblx0XHRcdC8qY2FzZSAnZmlsZScgOiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJChpdGVtKS5hdHRyKCduYW1lJykpO1xyXG5cdFx0XHRcdHZhciBmaWxlcyA9ICQoaXRlbSkucHJvcCgnZmlsZXMnKVswXTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhmaWxlcyk7XHJcblx0XHRcdFx0ZmQuYXBwZW5kKCd1c2VyZmlsZScsIGZpbGVzLm5hbWUpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9Ki9cclxuXHRcdFx0Y2FzZSAnZGF0YSc6IHtcclxuXHRcdFx0XHRpZiAoJChpdGVtKS52YWwoKSA9PSAnJykge1xyXG5cdFx0XHRcdFx0ZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zb2xlLmxvZygkKGl0ZW0pLnZhbCgpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlICdkb2N0b3JzJzoge1xyXG5cdFx0XHRcdGlmICgkKGl0ZW0pLnZhbCgpID09ICcnKSB7XHJcblx0XHRcdFx0XHRlcnJvciA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCQoaXRlbSkudmFsKCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgJ25hbWUnOiB7XHJcblx0XHRcdFx0aWYgKCQoaXRlbSkudmFsKCkgPT0gJycpIHtcclxuXHRcdFx0XHRcdGVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJChpdGVtKS52YWwoKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSAndGVsJzoge1xyXG5cdFx0XHRcdGlmKCQoaXRlbSkudmFsKCkgIT09ICcnKSB7XHJcblx0XHRcdFx0XHRwYXR0ZXJuID0gL14oKDh8XFwrNylbXFwtIF0/KT8oXFwoP1xcZHszfVxcKT9bXFwtIF0/KT9bXFxkXFwtIF17NywxMH0kLztcclxuXHRcdFx0XHRcdHJlc3VsdCA9IHBhdHRlcm4udGVzdCgkKGl0ZW0pLnZhbCgpKTtcclxuXHRcdFx0XHRcdGlmICghcmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdGVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdFx0LypjbGVhckZvcm0oZm9ybSk7Ki9cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJChpdGVtKS52YWwoKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSAnZW1haWwnOiB7XHJcblx0XHRcdFx0aWYoJChpdGVtKS52YWwoKSAhPT0gJycpIHtcclxuXHRcdFx0XHRcdHBhdHRlcm4gPSAvXltcXHctXFwuXStAW1xcdy1dK1xcLlthLXpdezIsM30kL2k7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSBwYXR0ZXJuLnRlc3QoJChpdGVtKS52YWwoKSk7XHJcblx0XHRcdFx0XHRpZiAoIXJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRlcnJvciA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRcdC8qY2xlYXJGb3JtKGZvcm0pOyovXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCQoaXRlbSkudmFsKCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgJ2ZpbGUnOiB7XHJcblx0XHRcdFx0Ly9wcm9wKCdmaWxlcycpWzBdXHJcblx0XHRcdFx0dmFyIHVzZXJmaWxlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmZpbGVzWzBdO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHVzZXJmaWxlKTtcclxuXHRcdFx0XHRmZC5hcHBlbmQoJ3VzZXJmaWxlJywgJCgnaW5wdXRbdHlwZT1maWxlXScpWzBdLmZpbGVzWzBdKTsgXHJcblx0XHRcdFx0Y29uc29sZS5sb2coZmQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGRlZmF1bHQ6IHtcclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKCQoZm9ybSkuZmluZCgndGV4dGFyZWEnKS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGlmICgkKGZvcm0pLmZpbmQoJ3RleHRhcmVhJykudmFsKCkgPT09ICcnKSB7XHJcblx0XHRcdFx0ZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdGlmICghZXJyb3IpIHtcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHR5cGU6IFwiUE9TVFwiLFxyXG5cdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0LypkYXRhVHlwZTogJ2pzb24nLCovXHJcblx0XHRcdGRhdGE6IGZkLFxyXG5cdCAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG5cdCAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihtc2cpe1xyXG5cdFx0XHRcdGlmKG1zZyA9PT0gXCJPS1wiKXtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IFwi0JfQsNGP0LLQutCwINGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdCwIVwiO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ29rJyk7XHJcblx0XHRcdFx0XHQkKCcubW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0XHRcdFx0Y2xlYXJGb3JtKGZvcm0pO1xyXG5cdFx0XHRcdFx0c3dhbChcclxuXHRcdFx0XHRcdFx0J9Ch0L7QvtCx0YnQtdC90LjQtSDQvtGC0L/RgNCw0LLQu9C10L3QviDRg9GB0L/QtdGI0L3QviEnLFxyXG5cdFx0XHRcdFx0XHRtc2csXHJcblx0XHRcdFx0XHRcdCdzdWNjZXNzJ1xyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdGlmIChtc2cgPT0gJ1NQQU0nKSB7XHJcblx0XHRcdFx0XHRcdHN3YWwoXHJcblx0XHRcdFx0XHRcdFx0J9CX0LTQtdGB0Ywg0L3QtdGCINC80LXRgdGC0LAg0YHQv9Cw0LzRgyEhIScsXHJcblx0XHRcdFx0XHRcdFx0bXNnLFxyXG5cdFx0XHRcdFx0XHRcdCd3YXJuaW5nJ1xyXG5cdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHQkKCcuYW50aVNwYW0nKS52YWwoJycpXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRzd2FsKFxyXG5cdFx0XHRcdFx0XHRcdCfQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwLCDQv9C+0L/RgNC+0LHRg9C50YLQtSDQtdGJ0LUg0YDQsNC3IScsXHJcblx0XHRcdFx0XHRcdFx0bXNnLFxyXG5cdFx0XHRcdFx0XHRcdCdlcnJvcidcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lypjb25zb2xlLmxvZyhmb3JtKTsqL1xyXG5cdFx0XHR9XHJcblx0XHR9KTsgICAgICAgICAgICAgICAgXHJcblx0fSBlbHNlIHtcclxuXHRcdHN3YWwoXHJcblx0XHRcdCfQl9Cw0L/QvtC70L3QuNGC0LUg0LLRgdC1INC/0L7Qu9GPJyxcclxuXHRcdFx0JycsXHJcblx0XHRcdCd3YXJuaW5nJ1xyXG5cdFx0KTtcclxuXHR9XHJcbn0pOyJdLCJmaWxlIjoiZm9ybS5qcyJ9
