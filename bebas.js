// Get the modal
var modals = document.getElementsByClassName("modal");
// Get the button that opens the modal
var modalOpenBtn = document.getElementsByClassName("modalOpenBtn");
// Get the <span> element that closes the modal
var currentModal = null;

// Function to open modal by id
function openModal(id) {
  for (i = 0; i < modals.length; i++) {
    if (modals[i].getAttribute('id') == id) {
      currentModal = modals[i];
      currentModal.style.display = "block";
      break;
    }
  }
}

// ini penting, When the user clicks the button, open modal with the same id
modalOpenBtn.onclick = function() {
  let currentID = modalOpenBtn.getAttribute('id');
  openModal(currentID);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == currentModal || event.target.getAttribute('class') == 'close') {
    currentModal.style.display = "none";
  }
}