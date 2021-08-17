
// var db = []; //array of fake album database

// function Album(id, title, artist, price, relDate, qty, tracks) {
//     "use strict";
//     this.id = id;
//     this.title = title;
//     this.artist = artist;
//     this.price = price;
//     this.relDate = relDate;
//     this.qty = qty;
//     this.tracks = tracks;
//     db.push(this);
// }

// var album1 = new Album("01", "Animals", "Pink Floyd", 18.99, "01/23/1977", 1000, ["1. Pigs on the Wing 1", "2. Dogs", "3. Pigs (Three Different Ones)", "4. Sheep", "5. Pigs on the Wing 2"]);

// var album2 = new Album("02", "Cosmic Slop", "Funkadelic", 19.99, "07/09/1973", 500, ["1. Nappy Dugout", "2. You Can’t Miss What You Can’t Measure", "3. March to the Witch’s Castle", "4. Let’s Make It Last", "5. Cosmic Slop", "6. No Compute", "7. This Broken Heart", "8. Trash A-Go-Go", "9. Can’t Stand the Strain"]);

// var album3 = new Album("03", "Ghost Reveries", "Opeth", 14.99, "08/29/2005", 1500, ["1. Ghost of Perdition", "2. The Baying of the Hounds", "3. Beneath the Mire", "4. Atonement", "5. Reverie/Harlequin Forest", "6. Hours of Wealth", "7. The Grand Conjuration", "8. Isolation Years"]);


/**
 * v01
 */

// function displaySearch() {
//     "use strict";

//     var displayResult = document.getElementById("displayResult");

//     window.open("search.html") //How do I display the result in this page?

//     displayResult.style.display = "block";
//     displayResult.innerHTML = result;
// }

// function doSearch() {
//     "use strict";

//     var searchField = document.getElementById("searchField").value;

//     for (var i = 0; i < db.length; i++) {
//         if (db[i].artist.toUpperCase() === searchField.toUpperCase()) {
//             result = db[i].artist;
//         }
//     }

//     displaySearch();

// }

// function search() {
//     "use strict";

//     var searchButton = document.getElementById("searchButton");
//     searchButton.addEventListener("click", doSearch, false);
// }

// window.addEventListener("load", search, false);


/**
 * v02
 */

function myFunction() {
    // Declare variables
    var input, filter, td, tr, td, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById("myTab");
    tr = ul.getElementsByTagName('tr');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }