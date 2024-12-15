
function filterRange(arr, n1, n2) {
	let newArr= arr.filter((n) => n < n1 || n > n2);
	return newArr;
}

let array = [1, 2, 5, 10, 16, 20, 6, 3];
console.log(filterRange(array, 1, 4));
