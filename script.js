// const heightA = 20;
// const heightB = 20;
// const heightC = 20;
// const ageA = 30;
// const ageB = 30;
// const ageC = 30;

// const scoreA = heightA + ageA*5;
// const scoreB = heightB + ageB*5;
// const scoreC = heightC + ageC*5;

// if (scoreA>scoreB && scoreA>scoreC) {
// 	console.log ('A wins')
// }

// else if (scoreB>scoreA && scoreB>scoreC) {
// 	console.log ('B wins')
// }

// else if (scoreC>scoreA && scoreC>scoreB) {
// 	console.log ('C wins')
// }

// else {
// 	console.log ('Draw')
// }

var years = [1889, 2002, 1632];


function printFullAge(years){
  
  var ages = [];
  var fullAges = [];

for (var i = 0; i < years.length; i++) {
	ages[i] = 2017 - years[i];
}

for (i=0; i < ages.length; i++) {
	if (ages[i] >=18) {
		console.log('Person ' + (i +1) + ' is ' + ages[i] + ' year old, and is of full age.');
		fullAges.push(true)
	}
	
	else {
		console.log('Person ' + (i +1) + ' is ' + ages[i] + ' year old, and is NOT of full age.');
		fullAges.push(false)
	}
}

return fullAges
}

var full1 = printFullAge(years)
var full2 = printFullAge([1989, 2001, 2003])