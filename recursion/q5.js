function productOfArray(arr) {
	if (arr.length == 0) return 1;
	let first = arr[0];
	arr.shift();
	return first * productOfArray(arr);
}

var six = productOfArray([1, 2, 3]); // 6
var sixty = productOfArray([1, 2, 3, 10]); // 60

console.log(six);
console.log(sixty);
