// var clock = document.getElementById('clock');

// setInterval(function () {
//     var now = new Date();
//     var hours = now.getHours();
//     var minute = now.getMinutes();
//     var second = now.getSeconds();
//     var timeString = hours + ":" + minute + ":" + second;
//     clock.innerHTML = timeString;
// }, 1000);

// Array of bugs found during testing
let bugs = [
	{
		description: "Button does not work",
		severity: "high",
		impact: "prevents user from completing a task",
		stepsToReproduce: "Click on the button and observe that nothing happens"
	},
	{
		description: "Text is cut off on mobile devices",
		severity: "medium",
		impact: "affects user experience on mobile devices",
		stepsToReproduce: "View the app on a mobile device and observe that text is cut off"
	},
	{
		description: "Incorrect data displayed in chart",
		severity: "low",
		impact: "minor issue that does not affect overall functionality",
		stepsToReproduce: "Navigate to the chart and observe that the data is incorrect"
	}
];

// Function to display the bug list
function displayBugList() {
	let tableBody = document.querySelector("#bug-list tbody");

	// Clear the table body
	tableBody.innerHTML = "";

	// Loop through the bugs array and add each bug to the table
	for (let bug of bugs) {
		let row = tableBody.insertRow();

		// Add columns for each bug property
		let descriptionCell = row.insertCell(0);
		let severityCell = row.insertCell(1);
		let impactCell = row.insertCell(2);
		let stepsCell = row.insertCell(3);

		// Set the text content of each cell
		descriptionCell.textContent = bug.description;
		severityCell.textContent = bug.severity;
		impactCell.textContent = bug.impact;
		stepsCell.textContent = bug.stepsToReproduce;
	}
}

// Call the displayBugList function to initially populate the table
displayBugList();