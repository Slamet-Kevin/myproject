window.addEventListener('load', function() {
  // wait until the page loads before working with HTML elements
  document.addEventListener('click', function(event) {
    //click listener on the document
    document.querySelectorAll('.mdropdown2-content').forEach(function(el) {
      if (el !== event.target) el.classList.remove('show1')
      // close any showing dropdown that isn't the one just clicked
    });
    if (event.target.matches('.mdropbtn1')) {
      event.target.closest('.mdropdown1').querySelector('.mdropdown2-content').classList.toggle('show1')
    }
    // if this is a dropdown button being clicked, toggle the show class
  })
})