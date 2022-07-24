<?php
$firstname = htmlspecialchars($_POST['firstname']);
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$message = htmlspecialchars($_POST['message']);

if (!empty($email) && !empty($message)) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        //enter that email address where you want to receive all messages
        $receiver = "dan-work-mail@protonmail.com"; 
        $subject = "From: $name <$email>";
        $body = "Firstname:$firstname\n Name: $name\nEmail: $email\nPhone: $phone\n
        Message:\n$message\n\nRegards,\n$name";
        $sender = "From: $email";
        if (mail($receiver, $subject, $body, $sender)) {
            echo "Votre message a été envoyé";
        } else {
            echo "Désolé, impossible d'envoyer votre message!";
        }
    } else {
        echo "Entrez une adresse e-mail valide!";
    }
} else {
    echo "Le champ e-mail et message est obligatoire!";
}
