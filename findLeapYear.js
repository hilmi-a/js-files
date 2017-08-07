function findLeapYear () {
	// body... 
	var minYear = document.getElementById('a').value; 
	var maxYear = document.getElementById('b').value;
	console.log(minYear,maxYear);
	var yearRange = [];
	for (var i = minYear; i <= maxYear; i++) {
		yearRange.push(i);
	}
	var newArray = [];
	yearRange.forEach( 
		function(year) {
		// statements
			if (testLeapYear(year)) 
				newArray.push(year);
	});
	var result = document.getElementById('result');
	result.innerHTML = newArray;
	console.log(yearRange);
	console.log(newArray);
}

function testLeapYear (year) {
	// body... 
	if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0&& year % 400 === 0)) {
		return year;
	} else {
		return false;
	}
}