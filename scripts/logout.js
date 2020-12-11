$('#logout').click(() => {
    firebase.auth().signOut().then(function () {
        let url = "http://localhost/crudFirebase/";
        if (window.location.href != url) {
            window.location.replace(url);
        }
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(errorMessage);
    });
})