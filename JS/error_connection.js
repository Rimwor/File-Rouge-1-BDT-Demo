
// Déclaration de variables
var btnOk;
var tentatives;
var nbEssais =3;
var nbTentatives = 1;
var messageErreur;

/**
 * function JQuery ==> initialiser les variables issues du doc html
 * Flavie
 */
$(document).ready(function () {
    btnOk = $("#btn_ok");
    tentatives = $("#tentatives");
    messageErreur = $("#statut_echec");

    //L'utilisateur confirme la lecture du message d'erreur
    btnOk.on("click", goToSignin);
});

setTimeout (tries, 100);

/**
 * incrémente le nombre de tentatives de connexion effectuées (PB ==> nombre de tentative remis à 0 à chaque chargement des pages ==> besoin du BACK END pour données de session ?);
 * Affiche le nombre d'essais restants ==> OK
 * Change le message concernant le statut du compte ==> compte bloqué si 0 essai restant ==> OK
 * Flavie
 */
function tries () {
    nbEssais -= nbTentatives;
    tentatives.html("<span> "+nbEssais+"</span>");
    if (nbEssais <= 0) {
        messageErreur.html("<p> Votre compte est désormais bloqué !</p><p>Veuillez contacter l'administateur.</p>");
    }
}

/**
 * renvoie à la page de connexion
 * Flavie
 */
function goToSignin () {
    window.location.replace("index.html");
    // nbTentatives++;
}