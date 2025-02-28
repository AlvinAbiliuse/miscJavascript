function productOfArray(arr) {
	if (arr.length == 0) return 1;
	return arr.shift() * productOfArray(arr);
}

var six = productOfArray([1, 2, 3]); // 6
var sixty = productOfArray([1, 2, 3, 10]); // 60

console.log(six);
console.log(sixty);
