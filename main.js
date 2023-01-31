
// JS File for ic-05

let numCount = 0

function clickedTimes(){

	// count number of time clicked
	numCount += 1;
	let countTracker = "Number of times button clicked: " + numCount;
	
	// change the text
	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = countTracker; 
}

