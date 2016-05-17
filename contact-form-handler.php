<!DOCTYPE html>
<html>

<head lang="en">
    <title>James Volmert | Contact Confirmation </title>
    <link rel="stylesheet" href="style/main.css">
    <style>
        .container {
            margin: auto;
            top: 40%;
            left: 25%;
            position: absolute;
            background: #ffffff;
            border-radius: 2px;
            width: 50%;
            text-align: center;
            padding-bottom: 20px;
            padding-top: 10px;
        }
        body {
            background-image: url("img/Sparrow%20Voice%20Logo.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
        }
    </style>
</head>
<body>
<div class="container">
    <?php
    if(isset($_POST['email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "james.volmert@gmail.com";

    $email_subject = "Contact From Portfolio Site";

    function died($error) {
        // your error code can go here

        echo "We are very sorry, but there were error(s) found with the form you submitted. ";

        echo "These errors appear below.<br /><br />";

        echo $error."<br /><br />";

        echo "Please go back and fix these errors.<br /><br />";

        die();
    }

    // validation expected data exists

        if(!isset($_POST['email']) ||

        !isset($_POST['message'])) {

        died('We are sorry, but there appears to be a problem with the form you submitted.');

    }


    $email_from = $_POST['email']; // required

    $message = $_POST['message']; // required

    $error_message = "";

    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if(!preg_match($email_exp,$email_from)) {

        $error_message .= 'The Email Address you entered does not appear to be valid.<br />';

    }

    $string_exp = "/^[A-Za-z .'-]+$/";



    if(strlen($message) < 2) {

        $error_message .= 'The Message you entered do not appear to be valid.<br />';

    }

    if(strlen($error_message) > 0) {

        died($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string) {

        $bad = array("content-type","bcc:","to:","cc:","href");

        return str_replace($bad,"",$string);

    }


    $email_message .= "Email: ".clean_string($email_from)."\n";

    $email_message .= "Comments: ".clean_string($message)."\n";


    // create email headers

    $headers = 'From: '.$email_from."\r\n";

    $headers .=  'Reply-To: '.$email_from."\r\n";

    $headers .=    'X-Mailer: PHP/' . phpversion();

    @mail($email_to, $email_subject, $email_message, $headers);

    ?>
    <!-- include your own success html here -->

    <h4>
        Thank you for connecting with us. We'll be in touch.
    </h4>
    <br>
    <a href="index.html">
        <button class="btn btn-primary">Go Back to Site</button>
    </a>
</div>
<?php

}

?>
</body>
</html>