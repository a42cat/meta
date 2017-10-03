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
	var formType = form.attr('data-form');
	var formSubject = '';
	var fd = new FormData(this);
	console.log(formSubject);
	switch (formType) {
		case 'questionForm':
			formSubject = 'Заявка Задать вопрос';
		break;
		case 'connectForm':
			formSubject = 'Заявка Присоедениться';
		break;
		case 'priceForm':
			formSubject = 'Заказ тарифа';
		break;
		case 'mainPageFollowForm':
			formSubject = 'Заявка Сопроваждение под ключ';
		break;
		case 'callBackForm':
			formSubject = 'Заявка Обратная связь';
		break;
		case 'newsListForm':
			formSubject = 'Заявка на бесплатную консультацию';
		break;
		default:
			formSubject = 'Заявка с сайта '+location.hostname;
		break;
	}
	fd.append('formSubject', formSubject);
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
	console.log(msg);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNsZWFyRm9ybShwYXJhbSkge1xyXG5cdCQocGFyYW0pLmZpbmQoJ3RleHRhcmVhJykudmFsKCcnKTtcclxuXHRxID0gJChwYXJhbSkuZmluZCgnaW5wdXQnKTtcclxuXHRxID0gJC5tYWtlQXJyYXkocSk7XHJcblx0cS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdGlmKCQoaXRlbSkuYXR0cigndHlwZScpICE9ICdoaWRkZW4nICYmICQoaXRlbSkuYXR0cigndHlwZScpICE9ICdzdWJtaXQnKXtcclxuXHRcdFx0JChpdGVtKS52YWwoJycpO1xyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbiQoJ2Zvcm0nKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR2YXIgZXJyb3IgPSBmYWxzZTtcclxuXHR2YXIgdXJsID0gJy9hc3NldHMvbWFpbGVycy9tYWlsQ29yZS5waHAnO1xyXG5cdHZhciBtc2cgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xyXG5cdFxyXG5cdHZhciBmb3JtID0gJCh0aGlzKTtcclxuXHR2YXIgZm9ybVR5cGUgPSBmb3JtLmF0dHIoJ2RhdGEtZm9ybScpO1xyXG5cdHZhciBmb3JtU3ViamVjdCA9ICcnO1xyXG5cdHZhciBmZCA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuXHRjb25zb2xlLmxvZyhmb3JtU3ViamVjdCk7XHJcblx0c3dpdGNoIChmb3JtVHlwZSkge1xyXG5cdFx0Y2FzZSAncXVlc3Rpb25Gb3JtJzpcclxuXHRcdFx0Zm9ybVN1YmplY3QgPSAn0JfQsNGP0LLQutCwINCX0LDQtNCw0YLRjCDQstC+0L/RgNC+0YEnO1xyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlICdjb25uZWN0Rm9ybSc6XHJcblx0XHRcdGZvcm1TdWJqZWN0ID0gJ9CX0LDRj9Cy0LrQsCDQn9GA0LjRgdC+0LXQtNC10L3QuNGC0YzRgdGPJztcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAncHJpY2VGb3JtJzpcclxuXHRcdFx0Zm9ybVN1YmplY3QgPSAn0JfQsNC60LDQtyDRgtCw0YDQuNGE0LAnO1xyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlICdtYWluUGFnZUZvbGxvd0Zvcm0nOlxyXG5cdFx0XHRmb3JtU3ViamVjdCA9ICfQl9Cw0Y/QstC60LAg0KHQvtC/0YDQvtCy0LDQttC00LXQvdC40LUg0L/QvtC0INC60LvRjtGHJztcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnY2FsbEJhY2tGb3JtJzpcclxuXHRcdFx0Zm9ybVN1YmplY3QgPSAn0JfQsNGP0LLQutCwINCe0LHRgNCw0YLQvdCw0Y8g0YHQstGP0LfRjCc7XHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgJ25ld3NMaXN0Rm9ybSc6XHJcblx0XHRcdGZvcm1TdWJqZWN0ID0gJ9CX0LDRj9Cy0LrQsCDQvdCwINCx0LXRgdC/0LvQsNGC0L3Rg9GOINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjic7XHJcblx0XHRicmVhaztcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGZvcm1TdWJqZWN0ID0gJ9CX0LDRj9Cy0LrQsCDRgSDRgdCw0LnRgtCwICcrbG9jYXRpb24uaG9zdG5hbWU7XHJcblx0XHRicmVhaztcclxuXHR9XHJcblx0ZmQuYXBwZW5kKCdmb3JtU3ViamVjdCcsIGZvcm1TdWJqZWN0KTtcclxuXHQvKmlmICgkKGZvcm0pLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykudmFsKCkgIT0gJycpIHtcclxuXHRcdGNvbnNvbGUubG9nKCQoZm9ybSkuZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKSk7XHJcblx0XHRtc2cgKz0gJyZ1c2VyZmlsZT0nKyQoZm9ybSkuZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS52YWwoKTtcclxuXHR9Ki9cclxuXHRmZC5hcHBlbmQoJ2FudGlTcGFtJywnJyk7XHJcblx0dmFyIG1zZ0FyciA9IGZvcm0uZmluZCgnaW5wdXQnKTtcclxuXHR2YXIgbXNnQXJyUHVzaCA9IGZvcm0uZmluZCgnc2VsZWN0Jyk7XHJcblx0bXNnQXJyLnB1c2gobXNnQXJyUHVzaCk7XHJcblx0dmFyIG1zZ0FyciA9ICQubWFrZUFycmF5KG1zZ0Fycik7XHJcblx0dmFyIGNoZWNrU3BhbSA9IGZhbHNlO1xyXG5cdGNvbnNvbGUubG9nKG1zZyk7XHJcblx0Ly9jb25zb2xlLmxvZyhmb3JtKTtcclxuXHQvL2NvbnNvbGUubG9nKG1zZ0Fycik7XHJcblx0bXNnQXJyLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0dGhpc0l0ZW0gPSAkKGl0ZW0pLmF0dHIoJ3R5cGUnKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpc0l0ZW0pO1xyXG5cdFx0c3dpdGNoICh0aGlzSXRlbSkge1xyXG5cdFx0XHQvKmNhc2UgJ2ZpbGUnIDoge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCQoaXRlbSkuYXR0cignbmFtZScpKTtcclxuXHRcdFx0XHR2YXIgZmlsZXMgPSAkKGl0ZW0pLnByb3AoJ2ZpbGVzJylbMF07XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZmlsZXMpO1xyXG5cdFx0XHRcdGZkLmFwcGVuZCgndXNlcmZpbGUnLCBmaWxlcy5uYW1lKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fSovXHJcblx0XHRcdGNhc2UgJ2RhdGEnOiB7XHJcblx0XHRcdFx0aWYgKCQoaXRlbSkudmFsKCkgPT0gJycpIHtcclxuXHRcdFx0XHRcdGVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJChpdGVtKS52YWwoKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSAnZG9jdG9ycyc6IHtcclxuXHRcdFx0XHRpZiAoJChpdGVtKS52YWwoKSA9PSAnJykge1xyXG5cdFx0XHRcdFx0ZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zb2xlLmxvZygkKGl0ZW0pLnZhbCgpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlICduYW1lJzoge1xyXG5cdFx0XHRcdGlmICgkKGl0ZW0pLnZhbCgpID09ICcnKSB7XHJcblx0XHRcdFx0XHRlcnJvciA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCQoaXRlbSkudmFsKCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgJ3RlbCc6IHtcclxuXHRcdFx0XHRpZigkKGl0ZW0pLnZhbCgpICE9PSAnJykge1xyXG5cdFx0XHRcdFx0cGF0dGVybiA9IC9eKCg4fFxcKzcpW1xcLSBdPyk/KFxcKD9cXGR7M31cXCk/W1xcLSBdPyk/W1xcZFxcLSBdezcsMTB9JC87XHJcblx0XHRcdFx0XHRyZXN1bHQgPSBwYXR0ZXJuLnRlc3QoJChpdGVtKS52YWwoKSk7XHJcblx0XHRcdFx0XHRpZiAoIXJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRlcnJvciA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRcdC8qY2xlYXJGb3JtKGZvcm0pOyovXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCQoaXRlbSkudmFsKCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgJ2VtYWlsJzoge1xyXG5cdFx0XHRcdGlmKCQoaXRlbSkudmFsKCkgIT09ICcnKSB7XHJcblx0XHRcdFx0XHRwYXR0ZXJuID0gL15bXFx3LVxcLl0rQFtcXHctXStcXC5bYS16XXsyLDN9JC9pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gcGF0dGVybi50ZXN0KCQoaXRlbSkudmFsKCkpO1xyXG5cdFx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0ZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRlcnJvciA9IHRydWU7XHJcblx0XHRcdFx0XHQvKmNsZWFyRm9ybShmb3JtKTsqL1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zb2xlLmxvZygkKGl0ZW0pLnZhbCgpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlICdmaWxlJzoge1xyXG5cdFx0XHRcdC8vcHJvcCgnZmlsZXMnKVswXVxyXG5cdFx0XHRcdHZhciB1c2VyZmlsZSA9IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5maWxlc1swXTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh1c2VyZmlsZSk7XHJcblx0XHRcdFx0ZmQuYXBwZW5kKCd1c2VyZmlsZScsICQoJ2lucHV0W3R5cGU9ZmlsZV0nKVswXS5maWxlc1swXSk7IFxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGZkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkZWZhdWx0OiB7XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICgkKGZvcm0pLmZpbmQoJ3RleHRhcmVhJykubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRpZiAoJChmb3JtKS5maW5kKCd0ZXh0YXJlYScpLnZhbCgpID09PSAnJykge1xyXG5cdFx0XHRcdGVycm9yID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRpZiAoIWVycm9yKSB7XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR0eXBlOiBcIlBPU1RcIixcclxuXHRcdFx0dXJsOiB1cmwsXHJcblx0XHRcdC8qZGF0YVR5cGU6ICdqc29uJywqL1xyXG5cdFx0XHRkYXRhOiBmZCxcclxuXHQgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuXHQgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24obXNnKXtcclxuXHRcdFx0XHRpZihtc2cgPT09IFwiT0tcIil7XHJcblx0XHRcdFx0XHRyZXN1bHQgPSBcItCX0LDRj9Cy0LrQsCDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3QsCFcIjtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdvaycpO1xyXG5cdFx0XHRcdFx0JCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdFx0XHRcdGNsZWFyRm9ybShmb3JtKTtcclxuXHRcdFx0XHRcdHN3YWwoXHJcblx0XHRcdFx0XHRcdCfQodC+0L7QsdGJ0LXQvdC40LUg0L7RgtC/0YDQsNCy0LvQtdC90L4g0YPRgdC/0LXRiNC90L4hJyxcclxuXHRcdFx0XHRcdFx0bXNnLFxyXG5cdFx0XHRcdFx0XHQnc3VjY2VzcydcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2V7XHJcblx0XHRcdFx0XHRpZiAobXNnID09ICdTUEFNJykge1xyXG5cdFx0XHRcdFx0XHRzd2FsKFxyXG5cdFx0XHRcdFx0XHRcdCfQl9C00LXRgdGMINC90LXRgiDQvNC10YHRgtCwINGB0L/QsNC80YMhISEnLFxyXG5cdFx0XHRcdFx0XHRcdG1zZyxcclxuXHRcdFx0XHRcdFx0XHQnd2FybmluZydcclxuXHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0JCgnLmFudGlTcGFtJykudmFsKCcnKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c3dhbChcclxuXHRcdFx0XHRcdFx0XHQn0J/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCwg0L/QvtC/0YDQvtCx0YPQudGC0LUg0LXRidC1INGA0LDQtyEnLFxyXG5cdFx0XHRcdFx0XHRcdG1zZyxcclxuXHRcdFx0XHRcdFx0XHQnZXJyb3InXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8qY29uc29sZS5sb2coZm9ybSk7Ki9cclxuXHRcdFx0fVxyXG5cdFx0fSk7ICAgICAgICAgICAgICAgIFxyXG5cdH0gZWxzZSB7XHJcblx0XHRzd2FsKFxyXG5cdFx0XHQn0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjycsXHJcblx0XHRcdCcnLFxyXG5cdFx0XHQnd2FybmluZydcclxuXHRcdCk7XHJcblx0fVxyXG59KTsiXSwiZmlsZSI6ImZvcm0uanMifQ==
