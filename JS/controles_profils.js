var identifiant;
var motPasse;
var nom;
var prenom;
var email;
var adresse;
var codePostal;
var commune;
var statut;
var submit;
var regId = /^[0-9]{10}$/;
var regPin = /^[0-9]{6}$/;
var regName = /^[a-zA-Z]{2,}(?:[-\s][a-zA-Z]{2,})*$/;
var regFirstName = /^[a-zA-Z]{2,}(?:[-\s][a-zA-Z]{2,})*$/;
var regEmail = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/;
var regAdress = /^[0-9]{1,4}\s(.+)[a-zA-Z]{2,}\s(.+)[a-zA-Z]{2,}$/;
var regPostCode = /^(((0[1-9])|([1-8][0-9])|(9[0-8]))[0-9]{3})|((2A)|(2B))$/;
var regCity = /^[a-zA-Z]{2,}(?:[-\s][a-zA-Z]{2,})*$/;

console.log(users);

$(document).ready(function() {

    identifiant = $("#identifiant");
    motPasse = $("#pin");
    nom = $("#nom");
    prenom = $("#prenom");
    email = $("#email");
    adresse = $("#adresse");
    codePostal = $("#postcode");
    commune = $("#ville");
    statut = $("#statut");
    submit = $("#btn_save_new_profile");

    $(identifiant).attr("maxlength", "10");
    $(motPasse).attr("maxlength", "6");
    $(nom).attr("maxlength", "26");
    $(prenom).attr("maxlength", "26");
    $(email).attr("maxlength", "50");
    $(adresse).attr("maxlength", "50");
    $(codePostal).attr("maxlength", "5");
    $(commune).attr("maxlength", "50");

    identifiant.on("keyup", function() {
        getValue(identifiant, regId);
    });

    motPasse.on("keyup", function() {
        getValue(motPasse, regPin);
    });

    nom.on("keyup", function() {
        getValue(nom, regName);
    });

    prenom.on("keyup", function() {
        getValue(prenom, regFirstName);
    });

    email.on("keyup", function() {
        getValue(email, regEmail);
    });

    adresse.on("keyup", function() {
        getValue(adresse, regAdress);
    });

    codePostal.on("keyup", function() {
        getValue(codePostal, regPostCode);
    });

    commune.on("keyup", function() {
        getValue(commune, regCity);
    });

    submit.on("click", verifProfil);

});


function verifProfil(e) {
    console.log(users);
    var monId = $(identifiant).val();
    var monPin = (motPasse).val();
    var monNom = $(nom).val();
    var monPrenom = $(prenom).val();
    var monEmail = $(email).val();
    var monAdresse = $(adresse).val();
    var monCodePostal = $(codePostal).val();
    var maCommune = $(commune).val();
    var monStatut = $("#statut option:selected").val();
    if (!regId.test(monId) || !regName.test(monNom) || !regFirstName.test(monPrenom) ||
        !regEmail.test(monEmail) || !regAdress.test(monAdresse) || !regPostCode.test(monCodePostal) ||
        !regCity.test(maCommune)) {
        e.preventDefault();
        alert("Veuillez respecter les formats requis");
    } else {
        for (let i in users) {
            if (users[i].identifiant == monId || users[i].email == monEmail) {
                e.preventDefault();
                alert("ID et / ou email déjà utilisé(s). Voulez-vous modifier un profil existant ?");
            } else if (i == users.length - 1 && (users[i].identifiant != monId && users[i].email != monEmail)) {
                console.log(monId + " " + monPin + " " + monNom + " " +
                    monPrenom + " " + monEmail + " " + monAdresse + " " +
                    monCodePostal + " " + maCommune + " " + monStatut)
                var myUser = {
                    type: monStatut,
                    identifiant: monId,
                    pin: monPin,
                    name: monNom + " " + monPrenom,
                    email: monEmail,
                    adress: monAdresse,
                    zipCode: monCodePostal,
                    city: maCommune
                }

                users.push(myUser);
                console.log(users);
            }


        }


    }

}



function getValue(monInput, maRegEx) {
    $(monInput).on("keyup", function(e) {
        var monText = $(this).val();
        alertFormat(monInput, maRegEx, monText);

    });
}


function alertFormat(input, reg, text) {

    if (reg.test(text) === false) {
        $(input).css("border", "solid red");
    } else {
        $(input).css("border", "solid green");
    }
}

function regEx(maRegEx, text) {
    return maRegEx.test(text);
}

QUnit.module('regEx', function() {
    QUnit.test('2501036587 ==> bon', function(assert) {
        assert.true(regEx(regId, 2501036587));
    });
    QUnit.test('25010365877 ==> faux', function(assert) {
        assert.false(regEx(regId, 25010365877));
    });

    QUnit.test('250103658 ==> faux', function(assert) {
        assert.false(regEx(regId, 250103658));
    });

    QUnit.test('250103658A ==> faux', function(assert) {
        assert.false(regEx(regId, 250103658 + "A"));
    });
    QUnit.test('25010 36587 ==> faux', function(assert) {
        assert.false(regEx(regId, 25010 + " " + 36587));
    });
});

QUnit.module('regEx', function() {
    QUnit.test('2501036587 ==> bon', function(assert) {
        assert.true(regEx(regPin, 123456));
    });
    QUnit.test('25010365877 ==> faux', function(assert) {
        assert.false(regEx(regPin, 1234567));
    });

    QUnit.test('250103658 ==> faux', function(assert) {
        assert.false(regEx(regPin, 12345));
    });

    QUnit.test('250103658A ==> faux', function(assert) {
        assert.false(regEx(regPin, 12345 + "A"));
    });
    QUnit.test('25010 36587 ==> faux', function(assert) {
        assert.false(regEx(regPin, 123 + " " + 456));
    });
});


QUnit.module('regEx', function() {
    QUnit.test('Nom ==> bon', function(assert) {
        assert.true(regEx(regName, "Martin"));
    });
    QUnit.test('Nom composé espace ==> bon', function(assert) {
        assert.true(regEx(regName, "Anne Marie"));
    });
    QUnit.test('Nom composé trait union ==> bon', function(assert) {
        assert.true(regEx(regName, "Anne-Marie"));
    });
    QUnit.test('nom ==> bon', function(assert) {
        assert.true(regEx(regName, "martin"));
    });
    QUnit.test('chiffre ==> faux', function(assert) {
        assert.false(regEx(regName, "Martin1"));
    });
    QUnit.test('Nom composé point ==> faux', function(assert) {
        assert.false(regEx(regName, "Anne.Marie"));
    });
    QUnit.test('Nom composé interrogation ==> faux', function(assert) {
        assert.false(regEx(regName, "Anne?Marie"));
    });
    QUnit.test('espace final ==> faux', function(assert) {
        assert.false(regEx(regName, "Martin "));
    });
    QUnit.test('espace initial ==> faux', function(assert) {
        assert.false(regEx(regName, " Martin"));
    });
});


QUnit.module('regEx', function() {
    QUnit.test('Nom ==> bon', function(assert) {
        assert.true(regEx(regFirstName, "Martin"));
    });
    QUnit.test('Nom composé espace ==> bon', function(assert) {
        assert.true(regEx(regFirstName, "Anne Marie"));
    });
    QUnit.test('Nom composé trait union ==> bon', function(assert) {
        assert.true(regEx(regFirstName, "Anne-Marie"));
    });
    QUnit.test('nom ==> bon', function(assert) {
        assert.true(regEx(regFirstName, "martin"));
    });
    QUnit.test('chiffre ==> faux', function(assert) {
        assert.false(regEx(regFirstName, "Martin1"));
    });
    QUnit.test('Nom composé point ==> faux', function(assert) {
        assert.false(regEx(regFirstName, "Anne.Marie"));
    });
    QUnit.test('Nom composé interrogation ==> faux', function(assert) {
        assert.false(regEx(regFirstName, "Anne?Marie"));
    });
    QUnit.test('espace final ==> faux', function(assert) {
        assert.false(regEx(regFirstName, "Martin "));
    });
    QUnit.test('espace initial ==> faux', function(assert) {
        assert.false(regEx(regFirstName, " Martin"));
    });
});

QUnit.module('regEx', function() {
    QUnit.test('Nom ==> bon', function(assert) {
        assert.true(regEx(regCity, "Martin"));
    });
    QUnit.test('Nom composé espace ==> bon', function(assert) {
        assert.true(regEx(regCity, "Anne Marie"));
    });
    QUnit.test('Nom composé trait union ==> bon', function(assert) {
        assert.true(regEx(regCity, "Anne-Marie"));
    });
    QUnit.test('nom ==> bon', function(assert) {
        assert.true(regEx(regCity, "martin"));
    });
    QUnit.test('chiffre ==> faux', function(assert) {
        assert.false(regEx(regCity, "Martin1"));
    });
    QUnit.test('Nom composé point ==> faux', function(assert) {
        assert.false(regEx(regCity, "Anne.Marie"));
    });
    QUnit.test('Nom composé interrogation ==> faux', function(assert) {
        assert.false(regEx(regCity, "Anne?Marie"));
    });
    QUnit.test('espace final ==> faux', function(assert) {
        assert.false(regEx(regCity, "Martin "));
    });
    QUnit.test('espace initial ==> faux', function(assert) {
        assert.false(regEx(regCity, " Martin"));
    });
});

QUnit.module('regEx', function() {
    QUnit.test('Nom ==> bon', function(assert) {
        assert.true(regEx(regEmail, "paul@gmail.com"));
    });
    QUnit.test('Nom composé espace ==> bon', function(assert) {
        assert.true(regEx(regEmail, "paul.briand@ac-caen.fr"));
    });
    QUnit.test('Nom composé trait union ==> bon', function(assert) {
        assert.true(regEx(regEmail, "paul21@123.com"));
    });
    QUnit.test('nom ==> bon', function(assert) {
        assert.true(regEx(regEmail, "paul_briand@dom1.dom2.dom-3.dom-4.com"));
    });
    QUnit.test('chiffre ==> faux', function(assert) {
        assert.false(regEx(regEmail, "paul@yahoo.f"));
    });
    QUnit.test('Nom composé point ==> faux', function(assert) {
        assert.false(regEx(regEmail, "paul@gmail..com"));
    });
    QUnit.test('Nom composé interrogation ==> faux', function(assert) {
        assert.false(regEx(regEmail, "_paul@gmail.com"));
    });
    QUnit.test('espace final ==> faux', function(assert) {
        assert.false(regEx(regEmail, "paul@gmail.com."));
    });
    QUnit.test('espace initial ==> faux', function(assert) {
        assert.false(regEx(regEmail, "paul.briand@ac_caen.fr"));
    });
});


QUnit.module('regEx', function() {
    QUnit.test('Nom ==> bon', function(assert) {
        assert.true(regEx(regAdress, "4 Rue Pasteur"));
    });
    QUnit.test('Nom composé espace ==> bon', function(assert) {
        assert.true(regEx(regAdress, "40 rue Fernand-Leger"));
    });
    QUnit.test('Nom composé trait union ==> bon', function(assert) {
        assert.true(regEx(regAdress, "23 Bvd Richemont"));
    });
    QUnit.test('nom ==> bon', function(assert) {
        assert.true(regEx(regAdress, "101 Avenue du Marechal Joffre"));
    });
    QUnit.test('chiffre ==> bon', function(assert) {
        assert.true(regEx(regAdress, "1000 Boulevard de Brest"));
    });
    QUnit.test('Nom composé point ==> faux', function(assert) {
        assert.false(regEx(regAdress, "11000 rue Barbet"));
    });
    QUnit.test('Nom composé interrogation ==> faux', function(assert) {
        assert.false(regEx(regAdress, "4 rue Pasteur "));
    });
    QUnit.test('espace final ==> faux', function(assert) {
        assert.false(regEx(regAdress, "Avenue du Marechal Joffre"));
    });
});

QUnit.module('regEx', function() {
    QUnit.test('Nom ==> bon', function(assert) {
        assert.true(regEx(regPostCode, "14000"));
    });
    QUnit.test('Nom composé espace ==> bon', function(assert) {
        assert.true(regEx(regPostCode, "2A"));
    });
    QUnit.test('Nom composé trait union ==> bon', function(assert) {
        assert.true(regEx(regPostCode, "2B"));
    });
    QUnit.test('chiffre ==> bon', function(assert) {
        assert.false(regEx(regPostCode, "140"));
    });
    QUnit.test('Nom composé point ==> faux', function(assert) {
        assert.false(regEx(regPostCode, "2C"));
    });
    QUnit.test('Nom composé interrogation ==> faux', function(assert) {
        assert.false(regEx(regPostCode, "14 000"));
    });
    QUnit.test('espace final ==> faux', function(assert) {
        assert.false(regEx(regPostCode, "1400B"));
    });
});