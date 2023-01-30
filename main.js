
// JS File for ic-05

function clickedTimes(){
	let newText = "Number of times button clicked:";
	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = newText + console.count();
}

