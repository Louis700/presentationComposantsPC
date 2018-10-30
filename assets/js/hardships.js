"use strict";

let hardcoreSections;

window.onload = init;

function init() {
	hardcoreSections = document.querySelectorAll(".hardshipSection.hardcore");

	for(let section of hardcoreSections) {
		section.addEventListener("mouseover", hardcoreMouseover);
		section.addEventListener("mouseout", hardcoreMouseout)
	}
}

function hardcoreMouseover() {
	this.classList.add("currentAnimatedHardcore")
	let otherSections = document.querySelectorAll("section:not(.currentAnimatedHardcore)");
	
	for(let section of otherSections)
		section.classList.add("dark");
}

function hardcoreMouseout() {
	let otherSections = document.querySelectorAll("section:not(.currentAnimatedHardcore)");

	for(let section of otherSections)
		section.classList.remove("dark");
	this.classList.remove("currentAnimatedHardcore");
}
