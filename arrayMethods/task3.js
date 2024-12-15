
function filterRange(arr, n1, n2) {
	array= arr.filter((n) => n < n1 || n > n2);
	
}

let array = [1, 2, 5, 10, 16, 20, 6, 3];
filterRange(array, 1, 4);
console.log(array);
