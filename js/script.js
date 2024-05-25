document.addEventListener("DOMContentLoaded", function() {
    // Get the contact link element
    var contactLink = document.getElementById("contact-link");
    
    // Get the modal element
    var modal = document.getElementById("contact-modal");
    
    // Get the <span> element that closes the modal
    var closeBtn = document.getElementsByClassName("close")[0];
    
    // When the user clicks the contact link, display the modal
    contactLink.onclick = function() {
        modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
