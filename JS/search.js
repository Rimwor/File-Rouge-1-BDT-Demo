// ------------------------------------------------------------------------------------------------------------------- >>>
/**
 * SEARCH BY SERIES NAME
 * @param {string}
 * Beata
 */

var search_bar = document.getElementById("myInput");
search_bar.addEventListener("keyup", mySearch_serie);

function mySearch_serie() {
    var list = document.getElementById("box");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    for (var [idSerie, serie] of series.entries()) {
        // Recherche des albums par SÉRIE
        for (var [idAlbum, album] of albums.entries()) {
            if (album.idSerie == idSerie) {
                if (serie.nom.toLowerCase().includes(search_bar.value.toLowerCase())) {
                    var html = document.createElement("table");
                    html.innerHTML = "<tr class='tr1'>" + "<td class='td1'>" + serie.nom + ", Album N°" + album.numero + " " + album.titre + ", Auteur : " + auteurs.get(album.idAuteur).nom + "</td>" + "</tr>";
                    var idBD = idAlbum;
                    html.addEventListener("click", clickResult);
                    console.log(html);
                    document.getElementById("box").appendChild(html);
                }
            }
        }

    }



}

function clickResult(e) {
    for (var [idSerie, serie] of series.entries()) {
        // Recherche des albums par SÉRIE
        for (var [idAlbum, album] of albums.entries()) {
            if (e.target.innerHTML.toLowerCase().includes(album.titre.toLowerCase())) {
                var idBD = idAlbum;
                window.location = "bd_details.html?idbd=" + idBD;

            }
        }
    }
}

// ------------------------------------------------------------------------------------------------------------------- >>>
/**
 * SEARCH BY SERIES TITLE
 * @param {string}
 * Beata
 */

var search_bar1 = document.getElementById("myInput1");
search_bar1.addEventListener("keyup", mySearch_titre);

function mySearch_titre() {

    var list = document.getElementById("box");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    var html = "<table border='1|1' class='tab1' id='myTab' >";

    for (var [idSerie, serie] of series.entries()) {
        // Recherche des albums par TITRE
        for (var [idAlbum, album] of albums.entries()) {
            if (album.idSerie == idSerie) {
                if (album.titre.toLowerCase().includes(search_bar1.value.toLowerCase())) {
                    var html = document.createElement("table");
                    html.innerHTML = "<tr class='tr1'>" + "<td class='td1'>" + serie.nom + ", Album N°" + album.numero + " " + album.titre + ", Auteur : " + auteurs.get(album.idAuteur).nom + "</td>" + "</tr>";
                    var idBD = idAlbum;
                    html.addEventListener("click", clickResult);
                    console.log(html);
                    document.getElementById("box").appendChild(html);
                }
            }
        }

    }

}

// ------------------------------------------------------------------------------------------------------------------- >>>
/**
 * SEARCH BY SERIES AUTHOR
 * @param {string}
 * Beata
 */

var search_bar2 = document.getElementById("myInput2");
search_bar2.addEventListener("keyup", mySearch_auteur);

function mySearch_auteur() {

    var list = document.getElementById("box");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    for (var [idAuteur, auteur] of auteurs.entries()) {
        // Recherche des albums par AUTEUR
        for (var [idAlbum, album] of albums.entries()) {
            if (album.idAuteur == idAuteur) {
                if (auteur.nom.toLowerCase().includes(search_bar2.value.toLowerCase())) {
                    var html = document.createElement("table");
                    html.innerHTML = "<tr class='tr1'>" + "<td class='td1'>" + album.idSerie + ", Album N°" + album.numero + " " + album.titre + ", Auteur : " + auteurs.get(album.idAuteur).nom + "</td>" + "</tr>";
                    var idBD = idAlbum;
                    html.addEventListener("click", clickResult);
                    console.log(html);
                    document.getElementById("box").appendChild(html);
                }
            }
        }

    }


}

// ------------------------------------------------------------------------------------------------------------------- >>>

/**
 * An example for a table list  
 */

// var rows = [{
//     name: "John",
//     age: 20,
//     email: "xx@hotmail.com"
// }, {
//     name: "Jack",
//     age: 50,
//     email: "xxx@hotmail.com"
// }, {
//     name: "Son",
//     age: 45,
//     email: "xxxx@hotmail.com"
// }];

// var html = "<table border='1|1'>";
// for (var i = 0; i < rows.length; i++) {
//     html+="<tr>";
//     html+="<td>"+rows[i].name+"</td>";
//     html+="<td>"+rows[i].age+"</td>";
//     html+="<td>"+rows[i].email+"</td>";

//     html+="</tr>";

// }
// html+="</table>";
// document.getElementById("box").innerHTML = html;