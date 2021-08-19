var submit = document.getElementById("btn_enregistrer");
var regIsbn = /^[0-9]{1,3}$/;
var regAuth = /^[a-zA-Z]{2,}(?:[,][\s][a-zA-Z]{2,})*$/;
var regSerie = /^[\S]{1,}(?:[-\s][\S]{1,})*$/;
var regTitre = /^[\S]{1,}(?:[-\s][\S]{1,})*$/;





jQuery(document).ready(function($) {
    const SRC_IMG = "MEDIA/images/"; // emplacement des images de l'appli
    const ALBUM_DEFAULT_MINI = SRC_IMG + "noComicsMini.jpeg";
    const ALBUM_DEFAULT = SRC_IMG + "noComics.jpeg";
    const SRC_ALBUM_MINI = "MEDIA/albumsMini/"; // emplacement des images des albums en petit
    const SRC_ALBUM = "MEDIA/albums/"; // emplacement des images des albums en grand

    // Lecture d'un album
    /*	console.log("Lecture d'un album");
    	var album = albums.get("4");
    	console.log(album.titre);
    	var serie = series.get(album.idSerie);
    	var auteur = auteurs.get(album.idAuteur);
    	console.log(album.titre+", "+serie.nom+", "+auteur.nom);
    	/**/

    /*	
    	console.log("Liste des albums");
    	albums.forEach(album => {
    	    serie = series.get(album.idSerie);
    	    auteur = auteurs.get(album.idAuteur);
    	    console.log(album.titre+" N°"+album.numero+" Série:"+serie.nom+" Auteur:"+auteur.nom);
    	});
    	/**/


    // console.log("Liste des albums par série");
    // for (var [idSerie, serie] of series.entries()) {
    //     // Recherche des albums de la série
    //     for (var [idAlbum, album] of albums.entries()) {
    //         if (album.idSerie == idSerie) {
    //             console.log(serie.nom + ", Album N°" + album.numero + " " + album.titre + ", Auteur:" + auteurs.get(album.idAuteur).nom);
    //         }
    //     }
    // }
    /**/

    /*
    console.log("Liste des albums par auteur");
    for(var [idAuteur, auteur] of auteurs.entries()) {
        // Recherche des albums de l'auteur
        for (var [idAlbum, album] of albums.entries()) {
            if (album.idAuteur == idAuteur) {
                console.log(auteur.nom+", Album N°"+album.numero+" "+album.titre+", Série:"+series.get(album.idSerie).nom);
            }
        }
        
    }
    /**/

    // Affichage des BD
    var txtSerie = document.getElementById("serie");
    var txtNumero = document.getElementById("numero");
    var txtTitre = document.getElementById("titre");
    var txtAuteur = document.getElementById("auteur");
    var txtPrix = document.getElementById("prix");
    var imgAlbum = document.getElementById("album");
    // var imgAlbumMini = document.getElementById("albumMini");

    imgAlbum.addEventListener("error", function() {
        prbImg(this)
    });

    // imgAlbumMini.addEventListener("error", function() {
    //     prbImg(this)
    // });

    var id = document.getElementById("id");
    var urlParams = new URLSearchParams(window.location.search);
    var bd = urlParams.get("idbd");
    console.log(bd);
    id.value = bd;
    // setTimeout(function() {
    //     console.log(id.value);
    getAlbum(id);
    // }, 0);

    /**
     * Récupération de l'album par son id et appel de 
     * la fonction d'affichage
     * 
     * @param {number} num 
     */
    function getAlbum(num) {

        var album = albums.get(num.value);

        if (album === undefined) {
            txtSerie.value = "";
            // txtNumero.value = "";
            txtTitre.value = "";
            txtAuteur.value = "";
            // txtPrix.value = 0;

            afficheAlbums($("#album"), ALBUM_DEFAULT);

        } else {

            var serie = series.get(album.idSerie);
            var auteur = auteurs.get(album.idAuteur);

            txtSerie.value = serie.nom;
            // txtNumero.value = album.numero;
            txtTitre.value = album.titre;
            txtAuteur.value = auteur.nom;
            // txtPrix.value = album.prix;

            var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;

            // Utilisation d'une expression régulière pour supprimer 
            // les caractères non autorisés dans les noms de fichiers : '!?.":$
            nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");

            afficheAlbums(
                $("#album"),
                SRC_ALBUM + nomFic + ".jpg"
            );
        }
    }

    /**
     * Affichage des images, les effets sont chainés et traités
     * en file d'attente par jQuery d'où les "stop()) et "clearQueue()" 
     * pour éviter l'accumulation d'effets si défilement rapide des albums.
     * 
     * @param {object jQuery} $album 
     * @param {string} nomFic 
     * @param {string} nomFic
     */
    function afficheAlbums($album, nomFic) {
        $album.attr('src', nomFic);
    }

    /**
     * Affichage de l'image par défaut si le chargement de l'image de l'album
     * ne s'est pas bien passé
     * 
     * @param {object HTML} element 
     */
    function prbImg(element) {
        // console.log(element);
        element.src = ALBUM_DEFAULT;
    }


    id.setAttribute("maxlength", "3");
    txtAuteur.setAttribute("maxlength", "50");
    txtTitre.setAttribute("maxlength", "50");
    txtSerie.setAttribute("maxlength", "50");


    txtAuteur.addEventListener("keyup", function() {
        getValue(txtAuteur, regAuth);
    });

    txtTitre.addEventListener("keyup", function() {
        getValue(txtTitre, regTitre);
    });

    txtSerie.addEventListener("keyup", function() {
        getValue(txtSerie, regSerie);
    });

    submit.addEventListener("click", verifProfil);



    function verifProfil(e) {
        var monId = id.value;
        var monAuteur = txtAuteur.value;
        var maSerie = txtSerie.value;
        var monTitre = txtTitre.value;
        if (!regAuth.test(monAuteur) || !regSerie.test(maSerie) ||
            !regTitre.test(monTitre)) {
            e.preventDefault();
            alert("Veuillez respecter les formats requis");
        } else {
            var srcVal = document.getElementById("formFileSm").value.slice(12);
            console.log(srcVal);
            imgAlbum.src = SRC_ALBUM + (srcVal);

            albums.get(monId).titre = monTitre;

            for (var [idSerie, serie] of series.entries()) {
                // Recherche des albums par TITRE
                if (txtSerie.value.includes(serie.nom)) {
                    albums.get(monId).idSerie = idSerie;
                }
            }
            for (var [idAuteur, auteur] of auteurs.entries()) {
                // Recherche des albums par TITRE
                if (txtAuteur.value.includes(auteur.nom)) {
                    albums.get(monId).idAuteur = idAuteur;
                }
            }

            console.log(albums.get(monId));
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


});