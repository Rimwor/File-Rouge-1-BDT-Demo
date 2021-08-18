// ------------------------------------------------------------------------------------------- //
/*
var html = "<table border='1|1' class='tab1' id='myTab' >";

 for(var [idSerie, serie] of series.entries()) {
     // Recherche des albums de la série - la list
     for (var [idAlbum, album] of albums.entries()) {
         if (album.idSerie == idSerie) {
           if (album.titre.includes("ast")) {
             html+="<tr class='tr1'>";
             html+="<td class='td1'>"+serie.nom+", Album N°"+album.numero+" "+album.titre+", Auteur : "+auteurs.get(album.idAuteur).nom+"</td>";
             html+="</tr>";
           }
         }
     }
     
 }
 html+="</table>";
 console.log(html);
 document.getElementById("box_auteurs").innerHTML += html;

/**/

function myFunction() {
  // Declare variables
  var input, filter, table, tr1, td1, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tab1");
  tr1 = table.getElementsByClassName("tr1");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr1.length; i++) {
    td1 = tr1[i].getElementsByClassName("td1")[0];
    if (td1) {
      txtValue = td1.textContent || td1.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr1[i].style.display = "";
      } else {
        tr1[i].style.display = "none";
      }
    }
  }
}