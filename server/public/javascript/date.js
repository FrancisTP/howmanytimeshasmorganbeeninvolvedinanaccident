// Date javascript

function onLoadPage() {
	// accident date
	var accidentDate = new Date("6/16/2018");

	// current date
	var currentDate = new Date();

	// days since accident
	var daysSinceAccident = Math.floor(Math.abs(currentDate - accidentDate)  / (1000*60*60*24));
	document.querySelector("#daysSinceAccident").innerHTML = "<p>" + daysSinceAccident + "</p>";
}