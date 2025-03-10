function multiple(max, current = 0) {
	if (max < 3) return 0;
	if (current === max) return 0;

	let curr = 0;
	if (current % 3 === 0 || current % 5 === 0) {
		curr = current;
	}
	return curr + multiple(max, current + 1);
}

console.log(multiple(1000));
