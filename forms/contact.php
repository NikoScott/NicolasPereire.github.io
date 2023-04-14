<?php
  // Vérifier que le formulaire a été soumis
  if ($_POST) {
    // Récupérer les données du formulaire
    $nom = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Envoyer un e-mail avec les données du formulaire
    $destinataire = "nico.pereire@gmail.com";
    $sujet = "Nouveau message du portfolio";
    $contenu = "Nom : " . $nom . "\n"
             . "E-mail : " . $email . "\n"
             . "Sujet : " . $subject
             . "Message : " . $message;
    mail($destinataire, $sujet, $contenu);

    // Rediriger l'utilisateur vers une page de confirmation
    // header("");
    // exit;
  }
?>