<?php
//chargement de la bibliothèque
require_once('PHPMailer/PHPMailerAutoload.php');
require_once('PHPMailer/class.phpmailer.php');
require_once('PHPMailer/class.smtp.php');
require_once('PHPMailer/class.pop3.php');


$errors = array();
$data = array();

//validation des variables

if(empty($_POST['yourName'])){
	$errors['yourName'] = "Veuillez écrire votre nom.";
}
if(empty($_POST['yourEmail'])){
	$errors['yourEmail'] = "Veuillez renseigner votre adresse email.";
}
if(empty($_POST['mailSubject'])){
	$errors['mailSubject'] = "Veuillez renseigner le sujet de votre mail.";
}
if(empty($_POST['mailContent'])){
	$errors['mailContent'] = "Votre message est vide.";
}

if(!empty($errors)){
	$data['success'] = false;
	$data['errors'] = $errors;
} else {
	$mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->Mailer = "smtp";//ajout
	$mail->SMTPAuth = true;
	$mail->SMTPSecure = 'tls';
	$mail->SMTPDebug = 2;
	$mail->Username = "juliette.mijeon@gmail.com";
	$mail->Password = "43r0pl4n3";
	$mail->Host = "smtp.gmail.com";
	$mail->Port = 25;
	$mail->IsHTML(true);
	$mail->FromName = $_POST['yourName'];
	$mail->Subject = $_POST['mailSubject'] . " from : " . $_POST['yourEmail'];
	$mail->Body = $_POST['mailContent'];
	$mail->AddAddress("juliette.mijeon@gmail.com");
	if(!$mail->Send()){
		echo "Mailer Error: " . $mail->ErrorInfo;
	} else {
		$data['success'] = true;
		$data['message'] = "Merci pour votre e-mail!";
	}
}
//echo json_encode($data);
header("Location:contact.php");
exit();
