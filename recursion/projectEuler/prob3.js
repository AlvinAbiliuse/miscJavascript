
// incomplete

function prime(max) {
	let current = 0;
	let arr = [];
	while (current !== max) {
		let sol = false;
		for (let i = 2; i < current; i++) {
			if (current % i === 0) {
				sol = false;
				break;
			} else sol = true;
		}
		if (sol) arr.push(current);
		current++;
	}
	return arr;
}

console.log(prime(100));
