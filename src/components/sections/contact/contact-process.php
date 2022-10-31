<?php

// define("WEBMASTER_EMAIL", 'themesflat@gmail.com');
//$address = "example@themeforest.net";


	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];	
	$message = $_POST['message'];

	
	$e_subject = 'You\'ve been contacted by ' . $name . '.';

	// Configuration option.
	// You can change this if you feel that you need to.
	// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

	// $e_body = "You have been contacted by: $name" . PHP_EOL . PHP_EOL;
	// $e_reply = "E-mail: $email" . PHP_EOL . PHP_EOL;
	// $e_subject = "\r\nsubject: $subject";
	// $e_url = "\r\url: $url";	
	// $e_content = "Message:\r\n$message" . PHP_EOL . PHP_EOL;
	// $e_content2 = "MessageContact:\r\n$messagecontact" . PHP_EOL . PHP_EOL;

	

	$mailheader = "From:" .$name. "<" .$email. ">\r\n";

	$address = "seda_sha@yahoo.com";

	// $headers .= "Reply-To: $email" . PHP_EOL;
	// $headers .= "MIME-Version: 1.0" . PHP_EOL;
	// $headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
	// $headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

	mail($address, $subject, $message, $mailheader)
	or die("Error!");

	echo"message sent";


?>