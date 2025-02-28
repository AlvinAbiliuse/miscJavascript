function replicate(count, num) {
	if (count <= 0) return [];
	return [num].concat(replicate(count - 1, num));
}

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
