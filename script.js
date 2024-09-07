
// Get the modal
var modal = document.getElementById("modal");

// Get the images and insert them into the modal
var images = document.querySelectorAll('.gallery-item img');
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

images.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
