
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

document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('popup');
    var popupBtn = document.getElementById('popupBtn');
    var closeBtn = document.querySelector('.close');

    popupBtn.addEventListener('click', function () {
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    // Optional: Close the popup if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
