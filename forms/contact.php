<?php
if(isset($_POST['email'])) {
 
    // Récupération des données du formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
 
    // Construction du message à envoyer
    $to = "nico.pereire@gmail.com";
    $subject = "Nouveau message de $name";
    $body = "Nom : $name\n\nE-mail : $email\n\nMessage : $message";
 
    // Envoi du message
    mail($to, $subject, $body);
 
    // Message de confirmation
    echo "Merci pour votre message ! Je vous réponds dès que possible.";
}
?>
