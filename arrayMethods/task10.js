function unique(arr) {
	let newArr = new Array();
	for (i in arr) {
		if (!newArr.includes(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O

