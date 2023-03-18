<?php
$name = $_POST['naem'];
$visitor_email = $_POST['email'];
$visitor_message = $_POST['message'];

$email_from = 'project-foodfiesta.netlify.app';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n" .
    "User Email: $visitor_email.\n" .
    "User Message: $visitor_message.\n";

$to = 'saurabhleuva@gmail.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to, $visitor_subject, $email_body, $headers);

header("Location: ./components/ContactContainer.jsx");

?>