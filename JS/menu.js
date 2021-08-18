var deconnexion;
var monProfil;

$(document).ready(function() {
    monProfil = $("#profile");
    deconnexion = $("#logout");

    deconnexion.on("click", logout);
    monProfil.on("click", home);
});

function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("password");
    localStorage.removeItem("name");
    localStorage.removeItem("type");
    location.replace("index.html");
}

function home() {
    location.replace("compte.html");
}