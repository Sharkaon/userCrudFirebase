$("#login").click(function () {
    let email = document.body.querySelector('#inputEmailLogin').value;
    let password = document.body.querySelector('#inputPasswordLogin').value;
    //let user = document.body.querySelector('#inputUser').value;

    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
        //console.log(user);
        // 
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorMessage);
    });
})