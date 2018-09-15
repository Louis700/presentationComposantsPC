"use strict";

function startSequence1Step2() {
	canvas.classList.remove("clickable");
	canvas.removeEventListener("click", startSequence1Step2);
	currentSequence1Step = Sequence1Step.STEP2;
}
