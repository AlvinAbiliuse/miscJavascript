
function filterRange(arr, n1, n2) {
	let newArr = arr.filter((n) => n > n1 && n < n2);
	return newArr;
}

let array = [1, 3, 5, 19, 25];
console.log(filterRange(array, 2, 20)); 
