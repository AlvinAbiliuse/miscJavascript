function sumOfTripledEvens(array) {
	console.log(array
			.filter((n) => n % 2 === 0)
			.map((n) => n * 3)
			.reduce((total, n) => total + n))
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
sumOfTripledEvens(array);
