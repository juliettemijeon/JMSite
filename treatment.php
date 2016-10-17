<?php
//récupération des valeurs
$senderEmail = $_POST["sender_email"];
$firstName = $_POST["first_name"];
$lastName = strtoupper($_POST["last_name"]);
$fullName = $firstName . " " . $lastName;
$subject = $_POST["subject"]; 
$message = $_POST["message"];
$fullMessage = $message . "\n" . $fullName;

//envoi du message
mail ( "juliette.mijeon@gmail.com",$subject,$fullMessage,$senderEmail);
header("Location:contact.php");
exit();
