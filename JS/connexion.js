// Déclaration de variables

var identifiant;
var motPasse;
var key;
var form;
var btnConfirmer;
var monId = /^[0-9]{10}$/;
var monPin = /^[0-9]{6}$/;


/**
 * function JQuery ==> initialiser les variables issues du doc html
 * Flavie
 */

$(document).ready(function() {
    identifiant = $("#username");
    motPasse = $("#password");
    form = $("#connexion");
    btnConfirmer = $("#btn_confirm");

    //L'utilisateur saisit son identifiant personnel
    identifiant.on("keyup", getIdValue);

    //L'utilisateur saisit son code PIN à l'aide du clavier numérique contextuel
    motPasse.on("change",getPinValue);

    // L'utilisateur soumet le formulaire de connexion
    btnConfirmer.on("click", verifCredentials);
});

/**
 * vérifie les identifiants saisis par l'utilisateur : contrôle le format et la correspondance
 *  avec les identifiants des comptes existants
 * Si tout OK ==> renvoie vers la page correspondant au type de compte associé aux identifiants
 * Si format invalide ==> renvoie une alerte "format invalide"
 * Si identifiants incorrects ==> renvoie vers la page d'échec de connexion
 * Flavie
 */
function verifCredentials(e) {
    var username = $(identifiant).val();
    var password = $(motPasse).val();
    var count = users.length-1;
    console.log(username);
    console.log(password);
    if (!monId.test(username) || !monPin.test(password)) {
        e.preventDefault();
        alert("Le format de vos identifiants est invalide");
    } else {
        for (let i in users) {
            if (username == users[i].identifiant && password == users[i].pin) {
                if (users[i].type == "bibliothécaire") {
                    $(form).attr("action", "compte_bibliothecaire.html");
                } else if (users[i].type == "administrateur") {
                    $(form).attr("action", "compte_administrateur.html");
                } else if (users[i].type == "gestionnaire") {
                    $(form).attr("action", "compte_gestionnaire.html");
                } else if (users[i].type == "responsable") {
                    $(form).attr("action", "compte_responsable.html");
                } else if (users[i].type == "adhérent") {
                    $(form).attr("action", "compte_adherent.html");
                }
                break;
            } else if (i == count && (username != users[i].identifiant || password != users[i].pin)) {
                $(form).attr("action", "error_connection.html");
            }
            
        }
        
    }

}

/**
 * récupère la valeur du code pin au fur et à mesure de la saisie
 * lance la fonction alertPin à chaque caractère saisi
 * Flavie
 */
function getPinValue() {

    $(motPasse).on("change", function(e) {
        var nombre = $(this).val();
        alertPin(nombre);


    });
}

/**
 * récupère la valeur de l'identifiant au fur et à mesure de la saisie
 * lance la fonction alertId à chaque caractère saisi
 * Flavie
 */
function getIdValue() {
    $(identifiant).on("keyup", function(e) {
        var nombre = $(this).val();
        alertId(nombre);

    });
}

/**
 * compare le format de la saisie avec le format requis (regEx)
 * Si tout OK ==> bordure saisie verte
 * Tant que format invalide ==> bordure saisie rouge
 * Flavie
 */
function alertId (text) {
    
    if (monId.test(text) === false) {
        $(identifiant).css("border", "solid red");
    } else {
        $(identifiant).css("border", "solid green");
    }
}

/**
 * compare le format de la saisie avec le format requis (regEx)
 * Si tout OK ==> bordure saisie verte
 * Tant que format invalide ==> bordure saisie rouge
 * Flavie
 */
function alertPin (text) {
    if (monPin.test(text) === false) {
        $(".key").css("border", "solid red");
    } else {
        $(".key").css("border", "solid green");
    }
}



/**
 * TESTS UNITAIRES regEx pour l'ID
 * Flavie
 */

function regExId (text) {
    return monId.test(text);
}

QUnit.module('regExId', function() {
    QUnit.test('2501036587 ==> bon', function(assert) {
      assert.true(regExId(2501036587));
    }); 
    QUnit.test('25010365877 ==> faux', function(assert) {
        assert.false(regExId(25010365877));
      });

    QUnit.test('250103658 ==> faux', function(assert) {
        assert.false(regExId(250103658));
    });

    QUnit.test('250103658A ==> faux', function(assert) {
        assert.false(regExId(250103658+"A"));
    });
    QUnit.test('25010 36587 ==> faux', function(assert) {
        assert.false(regExId(25010+" "+36587));
    });
});


/**
 * TESTs UNITAIRES regEx pour le PIN
 * Flavie
 */
function regExPin (text) {
    return monPin.test(text);
}

QUnit.module('regExId', function() {
    QUnit.test('123456 ==> bon', function(assert) {
      assert.true(regExPin(123456));
    }); 
    QUnit.test('1234567 ==> faux', function(assert) {
        assert.false(regExPin(1234567));
      });

    QUnit.test('12345 ==> faux', function(assert) {
        assert.false(regExPin(12345));
    });

    QUnit.test('12345A ==> faux', function(assert) {
        assert.false(regExPin(12345+"A"));
    });
    QUnit.test('123 456 ==> faux', function(assert) {
        assert.false(regExPin(123+" "+456));
    });
});

