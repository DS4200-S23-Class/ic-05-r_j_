
// JS File for ic-05

let numCount = 0

function clickedTimes(){

	numCount += 1;
	let countTracker = "Number of times button clicked: " + numCount;
	
	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = countTracker; 
}

