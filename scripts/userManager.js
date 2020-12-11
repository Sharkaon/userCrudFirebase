firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
        var uid = user.uid;
        console.log(uid);
        let url="http://localhost/crudFirebase/user/userPageAction";
        if (window.location.href == "http://localhost/crudFirebase/" || window.location.href == "http://localhost/crudFirebase/User/formLoginAction/" || window.location.href == "http://localhost/crudFirebase/User/formSignInAction/" || window.location.href == "http://localhost/crudFirebase" || window.location.href == "http://localhost/crudFirebase/User/formLoginAction" || window.location.href == "http://localhost/crudFirebase/User/formSignInAction"){
            window.location.replace(url);
        }
        if(window.location.href.toUpperCase == url.toUpperCase){
            mostrarDados(user);
        }
    } else {
        
    }
});

mostrarDados = function (user) {
    document.body.querySelector("#email").innerText += " " + user.email;
}

