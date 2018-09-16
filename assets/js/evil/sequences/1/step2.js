"use strict";

let front1SpritesheetImg;
let front1Animation;

let drawMessageInterval;

let messageIndex = 0;
let charIndex = 0;

let messages = [
	"Fantastique...",
	"Je comprends pas pourquoi tu as mis autant de temps pour résoudre une énigme aussi triviale...",
	"Le jeu a même pas commencé et toi tu galères déjà...",
	"Mais passons..."
];

let isShowingPassIcon = false;
let isShowingChar = false;

function startSequence1Step2() {
	canvas.classList.add("hidden");
	body.removeEventListener("click", startSequence1Step2);
	currentSequence1Step = Sequence1Step.STEP2;

	front1SpritesheetImg = new Image();
	
	front1SpritesheetImg.onload = function () {
		front1Animation = new Animation(new SpriteSheet(front1SpritesheetImg, new Vector(288, 256), 5),
						new Vector((canvas.width - 288)/2, (canvas.height - 256)/2), 
						[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
			 			[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);
	}
	front1SpritesheetImg.src = "assets/img/sprites/front1.png";
	setTimeout(() => {
		canvas.classList.remove("hidden")
		isShowingChar = true;
	}, 2000);
	setTimeout(() => drawMessageInterval = setInterval(drawNextChar, 30), 5000);
	body.addEventListener("click", nextMessages);
}

function showSequence1Step2() {
	if(front1Animation !== undefined && isShowingChar)
		front1Animation.draw();
	if(isShowingPassIcon)
		drawImage(passIcon, canvas.width - (passIcon.width + 10), canvas.height - (passIcon.height + 10));
}

function nextMessages() {
	clearInterval(drawMessageInterval);
	isShowingPassIcon = false;
	messageBox.innerHTML = "";

	if(messageIndex < messages.length - 1) {
		messageIndex++;
		charIndex = 0;
		drawMessageInterval = setInterval(drawNextChar, 30);
	} else {

	}
}

function drawNextChar() {
	if(charIndex === messages[messageIndex].length) {
		clearInterval(drawMessageInterval);
		isShowingPassIcon = true;
		return;
	}
	messageBox.insertAdjacentText("beforeend", messages[messageIndex][charIndex]);
	charIndex++;
}
