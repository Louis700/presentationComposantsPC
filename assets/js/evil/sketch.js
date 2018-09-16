"use strict";

let currentSequence;

function setup() {
	startSequence1();
}

function loop() {
	background(Color.rgb(52));
	if(currentSequence === Sequence.SEQUENCE1)
		showSequence1();
}

