/* Multiple DropDown 2 start*/
function myFunction(element) {
  var mdropdowns = document.getElementsByClassName("mdropdown-content");
  
  // element.nextSibling is the carriage return… The dropdown menu is the next next.
  var thisDropdown = element.nextSibling.nextSibling;
  
  if (!thisDropdown.classList.contains('showx')) {  // Added to hide dropdown if clicking on the one already open
    var i;
    for (i = 0; i < mdropdowns.length; i++) {
      mdropdowns[i].classList.remove('showx');
    }
  }
  
  // Toggle the dropdown on the element clicked
  thisDropdown.classList.toggle("showx");
}

/* W3Schools function to close the dropdown when clicked outside. */
window.onclick = function(event) {
  if (!event.target.matches('.mdropbtn')) {
    var mdropdowns = document.getElementsByClassName("mdropdown-content");
    var i;
    for (i = 0; i < mdropdowns.length; i++) {
      var openDropdown = mdropdowns[i];
      if (openDropdown.classList.contains('showx')) {
        openDropdown.classList.remove('showx');
      }
    }
  }
}
/* Multiple DropDown 2 end*/