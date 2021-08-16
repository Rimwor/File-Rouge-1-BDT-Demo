var deconnexion;
var monProfil;

$(document).ready(function(){
    monProfil = $("#profile");
    deconnexion = $("#logout");

    deconnexion.on("click", logout);
    monProfil.on("click", home);
});

function logout() {
    localStorage.clear();
    location.replace("index.html");
}

function home() {
    location.replace("compte.html");
}