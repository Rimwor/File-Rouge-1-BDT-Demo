// ------------------------------------------------------------------------------------------------------------------- >>>
/**
 * SEARCH BY SERIES NAME
 * @param {string}
 * Beata
 */

var search_bar = document.getElementById("myInput");
search_bar.addEventListener("keyup", mySearch_serieEdit);

function mySearch_serieEdit() {
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
                    html.addEventListener("click", function() { clickResultEdit(idBD) });
                    console.log(html);
                    list.appendChild(html);
                }
            }
        }

    }



}

function clickResultEdit(key) {
    window.location = "edit_delete_bd.html?idbd=" + key;
}

// ------------------------------------------------------------------------------------------------------------------- >>>
/**
 * SEARCH BY SERIES TITLE
 * @param {string}
 * Beata
 */

var search_bar1 = document.getElementById("myInput1");
search_bar1.addEventListener("keyup", mySearch_titreEdit);

function mySearch_titreEdit() {
    var list = document.getElementById("box");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    for (var [idSerie, serie] of series.entries()) {
        // Recherche des albums par TITRE
        for (var [idAlbum, album] of albums.entries()) {
            if (album.idSerie == idSerie) {
                if (album.titre.toLowerCase().includes(search_bar1.value.toLowerCase())) {
                    var html = document.createElement("table");
                    html.innerHTML = "<tr class='tr1'>" + "<td class='td1'>" + serie.nom + ", Album N°" + album.numero + " " + album.titre + ", Auteur : " + auteurs.get(album.idAuteur).nom + "</td>" + "</tr>";
                    var idBD = idAlbum;
                    html.addEventListener("click", function() { clickResultEdit(idBD) });
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
search_bar2.addEventListener("keyup", mySearch_auteurEdit);

function mySearch_auteurEdit() {
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
                    html.addEventListener("click", function() { clickResultEdit(idBD) });
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