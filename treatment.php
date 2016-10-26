<?php
//chargement de la bibliothèque
require_once('PHPMailer/PHPMailerAutoload.php');
require_once('PHPMailer/class.phpmailer.php');

$errors = array();  	// array contenant les erreurs de validation
$data = array(); 		// array pour la transmission des données

// validation des variables ======================================================


	if (empty($_POST['yourName']))
		$errors['yourName'] = 'Veuillez entrer votre nom.';

	if (empty($_POST['yourEmail']))
		$errors['yourEmail'] = 'Veuillez renseigner votre email.';

	if (!empty($_POST['yourEmail']) && !filter_var($_POST['yourEmail'], FILTER_VALIDATE_EMAIL))//ne fonctionne que s'il y a 2 chaines de caractères de part et d'autre d'un @
		$errors['yourEmail'] = 'Email invalide';

	if (empty($_POST['content']))
		$errors['content'] = 'Veuillez écrire un message';

// Réponse ===========================================================
		// En cas d'erreurs : 
	if ( ! empty($errors)) {
		// Si l'array errors n'est pas vide, on le renvoie
		$data['success'] = false;
		$data['errors']  = $errors;	
	} else {
		//lire un fichier de config /!\ ne pas le mettre en racine du site
		//$ini=parse_ini_file('/*********/contact.ini');
		$mail = new PHPMailer(); // instancie un objet PHPMailer
		//fonctionne : 
		$mail->IsSMTP(); // définit SMTP comme protocole de communication
		$mail->SMTPAuth = true; // authentification requise
		$mail->SMTPSecure = 'ssl'; // transfert sécurisé indispensable pour GMail
		$mail->Host = "smtp.gmail.com";
		$mail->Port = 465; // or 587
		$mail->IsHTML(true);
		$mail->Username = "juliette.mijeon@gmail.com"; //Email pour l'utilisation du SMTP gmail
		$mail->Password = "43r0pl4n3"; // Password

		//à tester : renvoie un message de success mais le mail n'arrive pas à destination
		/*$mail->Mailer = $ini['mail_issmtp']; 
		$mail->SMTPAuth = $ini['mail_smtpauth'];
		$mail->SMTPSecure = $ini['mail_smtpsecure'];
		$mail->Host = $ini['mail_host'];
		$mail->Port = $ini['mail_port'];
		$mail->IsHTML(true);
		$mail->Username = $ini['mail_username']; 
		$mail->Password = $ini['mail_password'];*/ 
		$mail->Subject = "Nouveau message de " . $_POST['yourName'] . ", e-mail: " .$_POST['yourEmail']. "";
		$mail->Body = $_POST['content'];
		$mail->AddAddress("juliette.mijeon@gmail.com");
		 if(!$mail->Send())
		    {
		    		//au lieu de echo : mettre en log
					//echo "Mailer Error: " . $mail->ErrorInfo;
		    		$data['message']  = "Erreur lors de l'envoi du mail";
					error_log($data['message']);
					http_response_code(500);

		    }
		    else
		    {
		    	$data['success'] = true;
	    		$data['message'] = 'Merci pour votre email!';
		    }

		
	}
	echo json_encode($data);

