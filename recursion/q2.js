function power(n1, n2) {
	if (n2 === 0) return 1;
	return n1 * power(n1, n2 - 1);
}

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1
