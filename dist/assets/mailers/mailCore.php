<?php 
/*print_r($_POST);
print_r($_FILES);*/
$mailto = 'a.kislicyn@raz-vitie.ru';
$boundary = "--".md5(uniqid(time()));
$subject = 'Заявка с сайта '.$_SERVER['HTTP_HOST'].'!';
$msg = '';
$headers = "MIME-Version: 1.0;\r\n"; 
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n"; 
$headers .= "From: <no-reply@".$_SERVER['HTTP_HOST'].">\r\n"; 


if (isset($_POST['antiSpam']) && empty($_POST['antiSpam'])) {
	if (isset($_POST['name']) && isset($_POST['phone'])) {

		if (isset($_POST['phone'])) {
			$phone = trim($_POST['phone']);
			$msg .= 'Телефон :'.$phone.'<br />';
		}

		if (isset($_POST['name'])) {
			$name = trim($_POST['name']);
			$msg .= 'Имя клиента :'.$name.'<br />';
		}

		if (isset($_POST['email'])) {
			$email = trim($_POST['email']);
			$msg .= 'Почта клиента :'.$email.'<br />';
		}

		if (isset($_POST['data'])) {
			$data = $_POST['data'];
			$msg .= 'Дата :'.$data.'<br />';
		}

		if (isset($_POST['doctors'])) {
			$doctors = $_POST['doctors'];
			$msg .= 'Доктор :'.$doctors[0].'<br />';
		}

		if (isset($_POST['position'])) {
			$position = trim($_POST['position']);
			$msg .= 'Должность :'.$position.'<br />';
		}

		if (isset($_POST['message'])) {
			$message = trim($_POST['message']);
			$msg .= 'Сообщение :'.$message.'<br />';
		}

		/*$uploaddir = $_SERVER['DOCUMENT_ROOT'].'/uploads/';
		$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

		echo '<pre>';
		var_dump($_FILES);
		if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
		    echo "Файл корректен и был успешно загружен.\n";
		} else {
		    echo "Возможная атака с помощью файловой загрузки!\n";
		}

		echo 'Некоторая отладочная информация:';
		

		print "</pre>";*/
		$multipart = "--$boundary\r\n"; 
		$multipart .= "Content-Type: text/html; charset=windows-1251\r\n";
		$multipart .= "Content-Transfer-Encoding: base64\r\n";    
		$multipart .= "\r\n";
		$multipart .= chunk_split(base64_encode(iconv("utf8", "windows-1251", $msg)));
		if (isset($_FILES['userfile'])) {
			$filename = $_FILES['userfile']['name'];
			$filepath = $_FILES['userfile']['tmp_name'];
			$fp = fopen($filepath,"r"); 
			if (!$fp) 
			{ 
				print ($_FILES); 
				exit(); 
			} 
			$file = fread($fp, filesize($filepath)); 
			fclose($fp); 

			$message_part = "\r\n--$boundary\r\n"; 
			$message_part .= "Content-Type: application/octet-stream; name=\"$filename\"\r\n";  
			$message_part .= "Content-Transfer-Encoding: base64\r\n"; 
			$message_part .= "Content-Disposition: attachment; filename=\"$filename\"\r\n"; 
			$message_part .= "\r\n";
			$message_part .= chunk_split(base64_encode($file));
			$message_part .= "\r\n--$boundary--\r\n";
			// второй частью прикрепляем файл, можно прикрепить два и более файла

			$multipart .= $message_part;
			if (time_nanosleep(5, 0)) {
				unlink($filepath);
			}
		}
		$result = mail($mailto, $subject, $multipart, $headers);
		
		if ($result) {
			echo 'OK';
		} else {
			echo 'error';
		}
	}
} else {
	echo 'SPAM';
}
?>