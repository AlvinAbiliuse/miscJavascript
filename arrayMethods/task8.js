let sortByAge = (array) => {
	let ages = array.map(e => e.age).sort((a, b) => a - b);
	let newL = new Array();
	for (i in ages) {
		for (j in array) {
			if (ages[i] === array[j].age){
				newL.push(array[j]);
				continue
			}
		}
	}
	arr = newL;
}



let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete
