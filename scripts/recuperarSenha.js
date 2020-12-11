$("#recuperar").click(function () {
    let email = document.body.querySelector('#inputEmailForgot').value;

    firebase.auth().sendPasswordResetEmail(email).then(function () {
        alert("E-mail de redefinição enviado para " + email);
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorMessage);
    });
})