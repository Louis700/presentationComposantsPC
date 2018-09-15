"use strict";

let evilTitle;
let evilSection;

window.onload = init;

function init() {
	evilTitle = document.getElementById("evilTitle");
	evilSection = document.getElementById("evilSection");

	evilTitle.insertAdjacentText("beforeend", new Array(10).fill().map(()=>randomChar()).join(""));
	evilSection.insertAdjacentText("beforeend", new Array(500).fill().map(()=>randomChar()).join(""));

	startEvilBugs();
}

function startEvilBugs() {
	displayEvilOpacityBugs();
	displayEvilContentBugs();
}

function displayEvilOpacityBugs() {
	evilSection.style.opacity = "0";
	
	setTimeout(()=> evilSection.style.opacity = "1", 100);
	setTimeout(displayEvilOpacityBugs, randomInt(100, 5000));
}

function displayEvilContentBugs() {
	let titleContent = new Array(evilTitle.textContent.length).fill().map((x, i) => evilTitle.textContent[i]);
	let sectionContent = new Array(evilSection.textContent.length).fill().map((x, i) => evilSection.textContent[i]);

	// Replace a random char
	titleContent[randomInt(0, titleContent.length)] = randomChar();
	sectionContent[randomInt(0, sectionContent.length)] = randomChar();

	evilTitle.innerHTML = "";
	evilSection.innerHTML = "";


	evilTitle.insertAdjacentText("beforeend", titleContent.join(""));
	evilSection.insertAdjacentText("beforeend", sectionContent.join(""));

	setTimeout(displayEvilContentBugs, 20);
}

