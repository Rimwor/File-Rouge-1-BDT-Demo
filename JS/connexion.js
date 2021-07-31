var identifiant;
var motPasse;
var key;
var monId = /^[0-9]{10}$/;
var monPin = /^[0-9]{6}$/;




$(document).ready(function() {
    identifiant = $("#username");
    motPasse = $("#password");

    btnConfirmer = $("#btn_confirm");


    identifiant.on("keyup", getIdValue);

    motPasse.on("change",getPinValue);
    btnConfirmer.on("click", verifCredentials);
});

function verifCredentials(e) {
    var username = $(identifiant).val();
    var password = $(motPasse).val();
    console.log(username);
    console.log(password);
    if (!monId.test(username) || !monPin.test(password)) {
        e.preventDefault();
        alert("Le format de vos identifiants est invalide");
    } else if (username != 1234567890 || password != 123456) {
        e.preventDefault();
        alert("Identifiant et/ou mot de passe incorrect");
    }

}

function getPinValue() {

    $(motPasse).on("change", function(e) {
        var nombre = $(this).val();
        // regExPin(nombre);
        alertPin(nombre);

        return nombre;

    });
}

function getIdValue() {
    $(identifiant).on("keyup", function(e) {
        var nombre = $(this).val();
        regExId(nombre);
        alertId(nombre);

    });
}

function alertId (text) {
    
    if (monId.test(text) === false) {
        $(identifiant).css("border", "solid red");
    } else {
        $(identifiant).css("border", "solid green");
    }
}

function alertPin (text) {
    if (monPin.test(text) === false) {
        $(".key").css("border", "solid red");
    } else {
        $(".key").css("border", "solid green");
    }
}

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

