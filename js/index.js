
var modal = document.getElementById("myModal");
var Img = document.getElementById("img01");
var captionText = document.getElementById("caption");


var images = document.getElementsByClassName("image");


var span = document.getElementsByClassName("close")[0];


for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
        modal.style.display = "block";
        Img.src = this.src;
        captionText.innerHTML = this.alt;
    });
}


span.onclick = function() {
    modal.style.display = "none";
}
