var profil = localStorage.getItem("type");
var nom = localStorage.getItem("name");
var statut;
var identite;
var bibliothecaire;
var adherent;
var gestionnaire;
var responsable;
var administrateur;
console.log(profil);
console.log(nom);

$(document).ready(function() {
    statut = $("#user_status");
    identite = $("#user_name");
    bibliothecaire = $("#bibliothecaire");
    adherent = $("#adherent");
    gestionnaire = $("#gestionnaire");
    responsable = $("#responsable");
    administrateur = $("#administrateur");
    $(statut).append(profil);
    $(identite).append(nom);
    affichCompte();
});
function affichCompte() {
    switch (profil) {
        case "bibliothécaire": $(responsable).attr("style", "visibility: hidden");
        $(adherent).attr("style", "visibility: hidden");
        $(administrateur).attr("style", "visibility: hidden");
        $(gestionnaire).attr("style", "visibility: hidden");
        $(bibliothecaire).attr("style", "visibility: visible");
        break;
        case "adhérent": $(responsable).attr("style", "visibility: hidden");
        $(adherent).attr("style", "visibility: visible");
        $(administrateur).attr("style", "visibility: hidden");
        $(gestionnaire).attr("style", "visibility: hidden");
        $(bibliothecaire).attr("style", "visibility: hidden");;
        break;
        case "administrateur": $(responsable).attr("style", "visibility: hidden");
        $(adherent).attr("style", "visibility: hidden");
        $(administrateur).attr("style", "visibility: visible");
        $(gestionnaire).attr("style", "visibility: hidden");
        $(bibliothecaire).attr("style", "visibility: hidden");
        break;
        case "responsable": $(responsable).attr("style", "visibility: visible");
        $(adherent).attr("style", "visibility: hidden");
        $(administrateur).attr("style", "visibility: hidden");
        $(gestionnaire).attr("style", "visibility: hidden");
        $(bibliothecaire).attr("style", "visibility: hidden");
        break;
        case "gestionnaire": $(responsable).attr("style", "visibility: hidden");
        $(adherent).attr("style", "visibility: hidden");
        $(administrateur).attr("style", "visibility: hidden");
        $(gestionnaire).attr("style", "visibility: visible");
        $(bibliothecaire).attr("style", "visibility: hidden");
        break;
        case null: location.replace("index.html");
        break;
    
    }

}
