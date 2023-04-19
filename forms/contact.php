<?php
  // Vérifier que le formulaire a été soumis
  if ($_POST) {
    // Récupérer les données du formulaire
    $nom = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // vérification des champs vides
    if(empty($name)) {
      $error .= "<div class='alert alert-warning' role='alert'>
                Veuillez renseigner tous les champs !
                </div>";
    }
    if(empty($message)) {
      $error .= "<div class='alert alert-warning' role='alert'>
                Veuillez renseigner tous les champs !
                </div>";
    }
    if(empty($subject)) {
      $error .= "<div class='alert alert-warning' role='alert'>
                Veuillez renseigner tous les champs !
                </div>";
    }

    // vérification de l'email
    if(!empty($_POST['email'])) {
      if(preg_match("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/", $_POST['email'])) {
      } else {
        // L'adresse e-mail est invalide
        $error .= "<div class='alert alert-warning' role='alert'>
                L'adresse mail saisie est invalide !
                </div>";
      }
    } else {
      // L'adresse e-mail n'a pas été saisie
      $error .= "<div class='alert alert-warning' role='alert'>
                Veuillez renseigner un mail !
                </div>";
    }

    if (strlen($_POST["email"]) < 3 || strlen($_POST["pseudo"]) > 20) {
      $error .= "<div class='alert alert-danger' role='alert'>
              Please enter a pseudo between 3 and 20 char !
                </div>";
  }

    // Envoyer un e-mail avec les données du formulaire
    $destinataire = "nico.pereire@gmail.com";
    $sujet = "Nouveau message du portfolio";
    $contenu = "Nom : " . $nom . "\n"
             . "E-mail : " . $email . "\n"
             . "Sujet : " . $subject
             . "Message : " . $message;
    mail($destinataire, $sujet, $contenu);

  }
?>