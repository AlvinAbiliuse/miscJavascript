function all(arr, callback) {
	if (arr.length === 0) return true;
	if (callback(arr[0])) {
		arr.splice(0, 1);
		return all(arr, callback);
	} else {
		return false;
	}
}

var allAreLessThanSeven = all([1, 2, 9], function (num) {
	return num < 7;
});

console.log(allAreLessThanSeven); // false
