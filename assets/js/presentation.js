"use strict";

let hint;

window.onload = init;

function init() {
	hint = document.getElementById("hint");

	if(document.cookie.indexOf("isPresentationBugFixed") === -1) {
		hint.addEventListener("click", fixBugMessages);
		hint.addEventListener("click", ()=> {
			hint.style.opacity = "0";
			hint.classList.remove("clickable");
			hint.removeEventListener("click", fixBugMessages);
			document.cookie = "isPresentationBugFixed=true";
		});
	} else {
		fixBug();	
	}
}

function fixBug() {
	hint.style.opacity = "0";
	hint.classList.remove("clickable");
}

function fixBugMessages() {
	alert("Vous venez de corriger un bug !\n" + 
	      "C'est étrange, il n'était pas là pendant le développement...\n" + 
	      "On dirait qu'il y en a un autre dans le menu principal, vous pouvez le trouver et le faire disparaître s'il vous plait ?\n" + 
	      "Si vous le faites, je vais vous récompenser !");
}
