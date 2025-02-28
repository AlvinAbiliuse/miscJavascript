function SumSquares(arr) {
	if (arr.length == 0) return 0;

	let total = 0;
	let first = arr.shift();

	if (Array.isArray(arr)) {
		total += SumSquares(arr);
	} else {
		total += first;
	}

	return total + SumSquares(arr);
}

var l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
