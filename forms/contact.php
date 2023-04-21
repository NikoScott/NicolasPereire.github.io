<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // récupérer les champs du formulaire
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // construction du message
  $msg = "Nom : $name\n";
  $msg .= "Email : $email\n";
  $msg .= "Sujet : $subject\n";
  $msg .= "Message : \n$message";

  // destinataire de l'e-mail
  $to = "nico.pereire@gmail.com";

  // envoi de l'e-mail
  if (mail($to, $subject, $msg)) {
    $error = "";
    echo "<script>alert('Votre message a été envoyé, merci !');</script>";
  } else {
    $error = "Une erreur s'est produite lors de l'envoi de votre message.";
    echo "<script>alert('$error');</script>";
  }
}
?>