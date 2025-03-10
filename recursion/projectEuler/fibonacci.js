function fibRecEven(c, n1 = 0, n2 = 1) {
	if (c == 0) return 0;
	if (n1 % 2) {
		return fibRecEven(c - 1, n2, n1 + n2);
	} else {
		return n1 + fibRecEven(c - 1, n2, n1 + n2);
	}
}

console.log(fibRecEven(10));
