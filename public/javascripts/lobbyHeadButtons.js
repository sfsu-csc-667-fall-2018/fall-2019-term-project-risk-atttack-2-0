var modal = document.getElementById('id01');
var modalTwo = document.getElementById('id02');

// When the user clicks anywhere outside, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modalTwo) {
        modalTwo.style.display = "none";
    }
}
