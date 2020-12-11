$("#submit").click(function(){
    let email = document.body.querySelector('#inputEmail').value;
    let password = document.body.querySelector('#inputPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {}).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorMessage);
    });
})