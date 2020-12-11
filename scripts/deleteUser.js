$("#delete").click(function () {
    let user = firebase.auth().currentUser;
    let confirmation = confirm("Você tem certeza que deseja apagar seu usuário?");
    console.log(confirmation);
    if (confirmation) {
        user.delete().then(function () {
            alert("Usuário deletado!");
            let url = "http://localhost/crudFirebase/";
            window.location.replace(url);
        }).catch(function (error) {
            alert("Erro! Não foi possível deletar o usuário!")
            let url = "http://localhost/crudFirebase/user/userPageAction";
            //window.location.replace(url);
        });
    } else {
        let url = "http://localhost/crudFirebase/user/userPageAction";
        window.location.replace(url);
    }
});