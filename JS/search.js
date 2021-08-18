var search_bar = document.getElementById("myInput");
search_bar.addEventListener("keyup", mySearch_serie);

function mySearch_serie() {
  /**
 * Table list
 * @param {string}
 * Beata
 */
 var html = "<table border='1|1' class='tab1' id='myTab' >";

 for(var [idSerie, serie] of series.entries()) {
     // Recherche des albums de la série - la list
     for (var [idAlbum, album] of albums.entries()) {
        if (album.idSerie == idSerie) {
            if (serie.nom.includes(search_bar.value)) {
              html+="<tr class='tr1'>";
              html+="<td class='td1'>"+serie.nom+", Album N°"+album.numero+" "+album.titre+", Auteur : "+auteurs.get(album.idAuteur).nom+"</td>";
              html+="</tr>";
            }
          }
     }
     
 }
 html+="</table>";
 document.getElementById("box_auteurs").innerHTML = html;

}

var search_bar1 = document.getElementById("myInput1");
search_bar1.addEventListener("keyup", mySearch_titre);

function mySearch_titre() {
  /**
 * Table list
 * @param {string}
 * Beata
 */
 var html = "<table border='1|1' class='tab1' id='myTab' >";

 for(var [idSerie, serie] of series.entries()) {
     // Recherche des albums de la série - la list
     for (var [idAlbum, album] of albums.entries()) {
        if (album.idSerie == idSerie) {
            if (album.titre.includes(search_bar1.value)) {
              html+="<tr class='tr1'>";
              html+="<td class='td1'>"+album.titre+", "+serie.nom+", Album N°"+album.numero+", Auteur : "+auteurs.get(album.idAuteur).nom+"</td>";
              html+="</tr>";
            }
          }
     }
     
 }
 html+="</table>";
 document.getElementById("box_auteurs").innerHTML = html;

}
 
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