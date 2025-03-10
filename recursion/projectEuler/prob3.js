function prime(max) {
	let current = 0;
	let arr = [];
	while (current !== max) {
		for (let i = 1; i < current; i++) {
			if (current % i === 0) break;
			arr.push(current);
		}
		current++;
	}
	return arr;
}

console.log(prime(100));
