<?php

$frm_name  = "Youname";
$recepient = "dmkndrtnk@gmail.com";
$sitename  = "Golden page";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);
$subject = trim($_POST["subject"]);
$subject_full   = "Новая заявка с сайта \"$sitename\" \"$subject\" ";

$message_full = "
E-mail: $email <br>
Имя: $name <br>
Сообщение: $message
";

mail($recepient, $subject_full, $message_full, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");

?>