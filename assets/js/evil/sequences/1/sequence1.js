"use strict";

let currentSequence1Step;

function startSequence1() {
	currentSequence = Sequence.SEQUENCE1;
	currentSequence1Step = Sequence1Step.STEP1;
	startSequence1Step1();
}

function showSequence1() {
	if(currentSequence1Step === Sequence1Step.STEP1)
		showSequence1Step1();
	else if(currentSequence1Step == Sequence1Step.STEP2)
		showSequence1Step2();
}



