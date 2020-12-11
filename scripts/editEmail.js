$("#alterar").click(function () {
    let email = document.body.querySelector('#inputEmailEdit').value;

    let currentUser = firebase.auth().currentUser;
    currentUser.updateEmail(email).then(function () {
        window.location.replace("http://localhost/crudFirebase/User/userPageAction");
    }).catch(function (error) {
        window.location.href = "http://localhost/crudFirebase/User/userPageAction";
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorMessage);
    });
})