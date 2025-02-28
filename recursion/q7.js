let total = 0;

function totalIntegers(arr) {
	for (let i in arr) {
		if (typeof arr[i] == "object") {
			totalIntegers(arr[i]);
		} else if (typeof arr[i] == "number") {
			total = total + arr[i];
		}
	}
	return total;
}

var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // 7

console.log(seven);
