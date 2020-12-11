<?php

class User{
    public function index(){
        $this::formSignInAction();
    }

    public function formSignInAction(){
        require_once PATH."/views/formSignIn.phtml";
    }

    public function formLoginAction(){
        require_once PATH."/views/formLogin.phtml";
    }

    public function userPageAction(){
        require_once PATH."/views/userPage.phtml";
    }

    public function errorAction(){
        require_once PATH."/views/erro404.phtml";
    }

    public function formEditUsernameAction(){
        require_once PATH."/views/formEditUsername.phtml";
    }

    public function formEditEmailAction(){
        require_once PATH."/views/formEditEmail.phtml";
    }

    public function formForgotPasswordAction(){
        require_once PATH."/views/formForgotPassword.phtml";
    }
}

?>