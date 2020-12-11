<?php require_once 'config.php' ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="<?= HOME_URL?>/styles/style.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
        <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
        <title>Document</title>


        <!-- Scripts de configuração do Firebase -->
        <script src="https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.23.0/firebase-analytics.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.23.0/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.23.0/firebase-firestore.js"></script>
        <script>
            var firebaseConfig = {
                apiKey: "AIzaSyCziymV8_V8lOrhd3sfB04lHfTF6LWkeUg",
                authDomain: "crudexemplo-8c0a8.firebaseapp.com",
                projectId: "crudexemplo-8c0a8",
                storageBucket: "crudexemplo-8c0a8.appspot.com",
                messagingSenderId: "970507456346",
                appId: "1:970507456346:web:57222d8cf2b9e0d44e2d63",
                measurementId: "G-9VY2YMW0WC"
            };

            firebase.initializeApp(firebaseConfig);
            firebase.analytics();
        </script>
        <script src="<?= HOME_URL ?>/scripts/userManager.js"></script>
    </head>
    <body>
        <main>
            <?php require_once 'start.php' ?>
        </main>
    </body>
</html>