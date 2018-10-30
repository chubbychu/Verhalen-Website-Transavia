/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var downloadButtons = document.querySelectorAll("article footer button:first-of-type");

if (downloadButtons) {
    for (var i = 0; i < downloadButtons.length; i++) {
        downloadButtons[i].addEventListener("click", addDownload);
    }
}

function addDownload(event) {
    console.log("downloadButtons");
    var downloadButtons = event.target; // met event target, target ik de daadwerkelijke aangeklikte button.
    downloadButtons.classList.toggle("color");
    var notificatie = document.querySelector('header nav ul li span');
    notificatie.classList.toggle("shownote");
}


//bundel tonen
var bundelButton = document.querySelector("section:nth-of-type(2) button");
if (bundelButton) {
        bundelButton.addEventListener("click", myBundle);
}

function myBundle() {
    var downloadButtons = document.querySelector('section:nth-of-type(3)');
    downloadButtons.classList.toggle("show");
}
