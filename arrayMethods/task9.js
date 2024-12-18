function getAverageAge(array) {
 	let average = array.reduce((total, num ) =>	total + num.age, 0)/
					array.length;
	return average;
};



let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

