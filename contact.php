<?php
require_once("includes/header.php");
?>
<form method="post" action="treatment.php" id="contactform">
	Votre nom : <br/>
	<input type="text" name="last_name"><br/>
	Votre prénom : <br/>
	<input type="text" name="first_name"><br/>
	Votre téléphone : <br/>
	<input type="tel" name="phone"><br/>
	Votre mail : <br/>
	<input type="email" name="sender_email"><br/>
	Sujet de votre message : <br/>
	<input type="text" name="subject"><br/>
	Votre message : <br/>
	<textarea form="contactform" rows="10" cols="50" name="message" id="message"></textarea>
	<br/>
	<input type="submit" name="send" value="Envoyer"><br/>
</form>

<?php
require_once("includes/footer.php");
?>
<script>
	$(document).ready(function(){
		$('submit').on('click',function(){
			alert ("votre message a bien été envoyé!");
		});
	})
</script>