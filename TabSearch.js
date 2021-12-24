function performSearch() {

  // Declare search string 
  var filter = searchBox.value.toUpperCase();

  // Loop through first tbody's rows
  for (var rowI = 0; rowI < trs.length; rowI++) {

    // define the row's cells
    var tds = trs[rowI].getElementsByTagName("td");

    // hide the row
    trs[rowI].style.display = "none";

    // loop through row cells
    for (var cellI = 0; cellI < tds.length; cellI++) {

      // if there's a match
      if (tds[cellI].innerHTML.toUpperCase().indexOf(filter) > -1) {

        // show the row
        trs[rowI].style.display = "";

        // skip to the next row
        continue;

      }
    }
  }

}

// declare elements
const searchBox = document.getElementById('searchBox');
const table = document.getElementById("tabcontent");
const trs = table.tBodies[0].getElementsByTagName("tr");

// add event listener to search box
searchBox.addEventListener('keyup', performSearch);