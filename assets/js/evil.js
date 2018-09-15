"use strict";

window.onload = init;

function init() {
	document.querySelector("title").insertAdjacentText("beforeend", new Array(10).fill().map(()=>randomChar()).join(""));

	let password = prompt("4d 6f 74 20 64 65 20 70 61 73 73 65").toLowerCase();

	if(password !== "0d" && password !== "d") {
		setWrongPasswordConfig();
		return;
	}
}

function setWrongPasswordConfig() {
	// indicate bad password
	alert("4c 65 20 6d 6f 74 20 64 65 20 70 61 73 73 65 20 73 61 69 73 69 20 65 73 74 20 69 6e 63 6f 72 72 65 63 74 20 21");
	// insert forgotten password button
	document.querySelector("body").insertAdjacentHTML("beforeend", "<button>4d 6f 74 20 64 65 20 70 61 73 73 65 20 6f 75 62 6c 69 c3 a9 20 3f</button>");
	// display hint if button's clicked
	document.querySelector("button").addEventListener("click", () => alert("49 6e 64 69 63 65 20 3a 20 4c 65 20 6d 6f 74 20 64 65 20 70 61 73 73 65 20 65 73 74 20 63 61 63 68 c3 a9 20 64 61 6e 73 20 6c 61 20 70 61 67 65 20 20 22 50 72 c3 a9 73 65 6e 74 61 74 69 6f 6e 22"));
}
