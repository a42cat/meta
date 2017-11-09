/*$('form[data-form="search"] .searchButton').on('click', function(e) {
	e.preventDefault();
	
});*/

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

$('form:not(form[data-form="search"])').submit(function(e) {
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
		var thisItem = $(item).attr('type');

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
		if ($(form).find('input[name="policy"]').prop('checked')) {
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
							'',
							'success'
						);
					}
					else{
						if (msg == 'SPAM') {
							swal(
								'Здесь нет места спаму!!!',
								'',
								'warning'
							);
							$('.antiSpam').val('')
						} else {
							swal(
								'Произошла ошибка, попробуйте еще раз!',
								'',
								'error'
							);
						}
					}
					/*console.log(form);*/
				}
			});
		} else {
			console.log(formType);
			swal(
				'Вы не дали разрешения на обработку персональных данных!',
				'',
				'warning'
			);	
		}
	} else {
		swal(
			'Заполните все поля',
			'',
			'warning'
		);
	}
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qJCgnZm9ybVtkYXRhLWZvcm09XCJzZWFyY2hcIl0gLnNlYXJjaEJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHJcbn0pOyovXHJcblxyXG5mdW5jdGlvbiBjbGVhckZvcm0ocGFyYW0pIHtcclxuXHQkKHBhcmFtKS5maW5kKCd0ZXh0YXJlYScpLnZhbCgnJyk7XHJcblx0cSA9ICQocGFyYW0pLmZpbmQoJ2lucHV0Jyk7XHJcblx0cSA9ICQubWFrZUFycmF5KHEpO1xyXG5cdHEuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRpZigkKGl0ZW0pLmF0dHIoJ3R5cGUnKSAhPSAnaGlkZGVuJyAmJiAkKGl0ZW0pLmF0dHIoJ3R5cGUnKSAhPSAnc3VibWl0Jyl7XHJcblx0XHRcdCQoaXRlbSkudmFsKCcnKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG4kKCdmb3JtOm5vdChmb3JtW2RhdGEtZm9ybT1cInNlYXJjaFwiXSknKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xyXG5cdGUucHJldmVudERlZmF1bHQoKTtcclxuXHR2YXIgZXJyb3IgPSBmYWxzZTtcclxuXHR2YXIgdXJsID0gJy9hc3NldHMvbWFpbGVycy9tYWlsQ29yZS5waHAnO1xyXG5cdHZhciBtc2cgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xyXG5cdFxyXG5cdHZhciBmb3JtID0gJCh0aGlzKTtcclxuXHR2YXIgZm9ybVR5cGUgPSBmb3JtLmF0dHIoJ2RhdGEtZm9ybScpO1xyXG5cdHZhciBmb3JtU3ViamVjdCA9ICcnO1xyXG5cdHZhciBmZCA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcclxuXHRjb25zb2xlLmxvZyhmb3JtU3ViamVjdCk7XHJcblx0c3dpdGNoIChmb3JtVHlwZSkge1xyXG5cdFx0Y2FzZSAncXVlc3Rpb25Gb3JtJzpcclxuXHRcdFx0Zm9ybVN1YmplY3QgPSAn0JfQsNGP0LLQutCwINCX0LDQtNCw0YLRjCDQstC+0L/RgNC+0YEnO1xyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlICdjb25uZWN0Rm9ybSc6XHJcblx0XHRcdGZvcm1TdWJqZWN0ID0gJ9CX0LDRj9Cy0LrQsCDQn9GA0LjRgdC+0LXQtNC10L3QuNGC0YzRgdGPJztcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAncHJpY2VGb3JtJzpcclxuXHRcdFx0Zm9ybVN1YmplY3QgPSAn0JfQsNC60LDQtyDRgtCw0YDQuNGE0LAnO1xyXG5cdFx0YnJlYWs7XHJcblx0XHRjYXNlICdtYWluUGFnZUZvbGxvd0Zvcm0nOlxyXG5cdFx0XHRmb3JtU3ViamVjdCA9ICfQl9Cw0Y/QstC60LAg0KHQvtC/0YDQvtCy0LDQttC00LXQvdC40LUg0L/QvtC0INC60LvRjtGHJztcclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnY2FsbEJhY2tGb3JtJzpcclxuXHRcdFx0Zm9ybVN1YmplY3QgPSAn0JfQsNGP0LLQutCwINCe0LHRgNCw0YLQvdCw0Y8g0YHQstGP0LfRjCc7XHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgJ25ld3NMaXN0Rm9ybSc6XHJcblx0XHRcdGZvcm1TdWJqZWN0ID0gJ9CX0LDRj9Cy0LrQsCDQvdCwINCx0LXRgdC/0LvQsNGC0L3Rg9GOINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjic7XHJcblx0XHRicmVhaztcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGZvcm1TdWJqZWN0ID0gJ9CX0LDRj9Cy0LrQsCDRgSDRgdCw0LnRgtCwICcrbG9jYXRpb24uaG9zdG5hbWU7XHJcblx0XHRicmVhaztcclxuXHR9XHJcblx0ZmQuYXBwZW5kKCdmb3JtU3ViamVjdCcsIGZvcm1TdWJqZWN0KTtcclxuXHQvKmlmICgkKGZvcm0pLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykudmFsKCkgIT0gJycpIHtcclxuXHRcdGNvbnNvbGUubG9nKCQoZm9ybSkuZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKSk7XHJcblx0XHRtc2cgKz0gJyZ1c2VyZmlsZT0nKyQoZm9ybSkuZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS52YWwoKTtcclxuXHR9Ki9cclxuXHRmZC5hcHBlbmQoJ2FudGlTcGFtJywnJyk7XHJcblx0dmFyIG1zZ0FyciA9IGZvcm0uZmluZCgnaW5wdXQnKTtcclxuXHR2YXIgbXNnQXJyUHVzaCA9IGZvcm0uZmluZCgnc2VsZWN0Jyk7XHJcblx0bXNnQXJyLnB1c2gobXNnQXJyUHVzaCk7XHJcblx0dmFyIG1zZ0FyciA9ICQubWFrZUFycmF5KG1zZ0Fycik7XHJcblx0dmFyIGNoZWNrU3BhbSA9IGZhbHNlO1xyXG5cdGNvbnNvbGUubG9nKG1zZyk7XHJcblx0Ly9jb25zb2xlLmxvZyhmb3JtKTtcclxuXHQvL2NvbnNvbGUubG9nKG1zZ0Fycik7XHJcblx0bXNnQXJyLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0dmFyIHRoaXNJdGVtID0gJChpdGVtKS5hdHRyKCd0eXBlJyk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXNJdGVtKTtcclxuXHRcdHN3aXRjaCAodGhpc0l0ZW0pIHtcclxuXHRcdFx0LypjYXNlICdmaWxlJyA6IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygkKGl0ZW0pLmF0dHIoJ25hbWUnKSk7XHJcblx0XHRcdFx0dmFyIGZpbGVzID0gJChpdGVtKS5wcm9wKCdmaWxlcycpWzBdO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGZpbGVzKTtcclxuXHRcdFx0XHRmZC5hcHBlbmQoJ3VzZXJmaWxlJywgZmlsZXMubmFtZSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH0qL1xyXG5cdFx0XHRjYXNlICdkYXRhJzoge1xyXG5cdFx0XHRcdGlmICgkKGl0ZW0pLnZhbCgpID09ICcnKSB7XHJcblx0XHRcdFx0XHRlcnJvciA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCQoaXRlbSkudmFsKCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgJ2RvY3RvcnMnOiB7XHJcblx0XHRcdFx0aWYgKCQoaXRlbSkudmFsKCkgPT0gJycpIHtcclxuXHRcdFx0XHRcdGVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJChpdGVtKS52YWwoKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSAnbmFtZSc6IHtcclxuXHRcdFx0XHRpZiAoJChpdGVtKS52YWwoKSA9PSAnJykge1xyXG5cdFx0XHRcdFx0ZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zb2xlLmxvZygkKGl0ZW0pLnZhbCgpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlICd0ZWwnOiB7XHJcblx0XHRcdFx0aWYoJChpdGVtKS52YWwoKSAhPT0gJycpIHtcclxuXHRcdFx0XHRcdHBhdHRlcm4gPSAvXigoOHxcXCs3KVtcXC0gXT8pPyhcXCg/XFxkezN9XFwpP1tcXC0gXT8pP1tcXGRcXC0gXXs3LDEwfSQvO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gcGF0dGVybi50ZXN0KCQoaXRlbSkudmFsKCkpO1xyXG5cdFx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0ZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRlcnJvciA9IHRydWU7XHJcblx0XHRcdFx0XHQvKmNsZWFyRm9ybShmb3JtKTsqL1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zb2xlLmxvZygkKGl0ZW0pLnZhbCgpKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXNlICdlbWFpbCc6IHtcclxuXHRcdFx0XHRpZigkKGl0ZW0pLnZhbCgpICE9PSAnJykge1xyXG5cdFx0XHRcdFx0cGF0dGVybiA9IC9eW1xcdy1cXC5dK0BbXFx3LV0rXFwuW2Etel17MiwzfSQvaTtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IHBhdHRlcm4udGVzdCgkKGl0ZW0pLnZhbCgpKTtcclxuXHRcdFx0XHRcdGlmICghcmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdGVycm9yID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ZXJyb3IgPSB0cnVlO1xyXG5cdFx0XHRcdFx0LypjbGVhckZvcm0oZm9ybSk7Ki9cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJChpdGVtKS52YWwoKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSAnZmlsZSc6IHtcclxuXHRcdFx0XHQvL3Byb3AoJ2ZpbGVzJylbMF1cclxuXHRcdFx0XHR2YXIgdXNlcmZpbGUgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuZmlsZXNbMF07XHJcblx0XHRcdFx0Y29uc29sZS5sb2codXNlcmZpbGUpO1xyXG5cdFx0XHRcdGZkLmFwcGVuZCgndXNlcmZpbGUnLCAkKCdpbnB1dFt0eXBlPWZpbGVdJylbMF0uZmlsZXNbMF0pOyBcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhmZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZGVmYXVsdDoge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoJChmb3JtKS5maW5kKCd0ZXh0YXJlYScpLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0aWYgKCQoZm9ybSkuZmluZCgndGV4dGFyZWEnKS52YWwoKSA9PT0gJycpIHtcclxuXHRcdFx0XHRlcnJvciA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0aWYgKCFlcnJvcikge1xyXG5cdFx0aWYgKCQoZm9ybSkuZmluZCgnaW5wdXRbbmFtZT1cInBvbGljeVwiXScpLnByb3AoJ2NoZWNrZWQnKSkge1xyXG5cdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdHR5cGU6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdHVybDogdXJsLFxyXG5cdFx0XHRcdC8qZGF0YVR5cGU6ICdqc29uJywqL1xyXG5cdFx0XHRcdGRhdGE6IGZkLFxyXG5cdFx0ICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcblx0XHQgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihtc2cpe1xyXG5cdFx0XHRcdFx0aWYobXNnID09PSBcIk9LXCIpe1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBcItCX0LDRj9Cy0LrQsCDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3QsCFcIjtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ29rJyk7XHJcblx0XHRcdFx0XHRcdCQoJy5tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdGNsZWFyRm9ybShmb3JtKTtcclxuXHRcdFx0XHRcdFx0c3dhbChcclxuXHRcdFx0XHRcdFx0XHQn0KHQvtC+0LHRidC10L3QuNC1INC+0YLQv9GA0LDQstC70LXQvdC+INGD0YHQv9C10YjQvdC+IScsXHJcblx0XHRcdFx0XHRcdFx0JycsXHJcblx0XHRcdFx0XHRcdFx0J3N1Y2Nlc3MnXHJcblx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0XHRpZiAobXNnID09ICdTUEFNJykge1xyXG5cdFx0XHRcdFx0XHRcdHN3YWwoXHJcblx0XHRcdFx0XHRcdFx0XHQn0JfQtNC10YHRjCDQvdC10YIg0LzQtdGB0YLQsCDRgdC/0LDQvNGDISEhJyxcclxuXHRcdFx0XHRcdFx0XHRcdCcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0J3dhcm5pbmcnXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHQkKCcuYW50aVNwYW0nKS52YWwoJycpXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0c3dhbChcclxuXHRcdFx0XHRcdFx0XHRcdCfQn9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwLCDQv9C+0L/RgNC+0LHRg9C50YLQtSDQtdGJ0LUg0YDQsNC3IScsXHJcblx0XHRcdFx0XHRcdFx0XHQnJyxcclxuXHRcdFx0XHRcdFx0XHRcdCdlcnJvcidcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvKmNvbnNvbGUubG9nKGZvcm0pOyovXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGZvcm1UeXBlKTtcclxuXHRcdFx0c3dhbChcclxuXHRcdFx0XHQn0JLRiyDQvdC1INC00LDQu9C4INGA0LDQt9GA0LXRiNC10L3QuNGPINC90LAg0L7QsdGA0LDQsdC+0YLQutGDINC/0LXRgNGB0L7QvdCw0LvRjNC90YvRhSDQtNCw0L3QvdGL0YUhJyxcclxuXHRcdFx0XHQnJyxcclxuXHRcdFx0XHQnd2FybmluZydcclxuXHRcdFx0KTtcdFxyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRzd2FsKFxyXG5cdFx0XHQn0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjycsXHJcblx0XHRcdCcnLFxyXG5cdFx0XHQnd2FybmluZydcclxuXHRcdCk7XHJcblx0fVxyXG59KTsiXSwiZmlsZSI6ImZvcm0uanMifQ==
