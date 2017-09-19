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