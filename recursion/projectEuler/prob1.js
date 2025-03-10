function multiple(max, current = 0) {
	if (max < 3) return 0;
	if (current === max) return;

	let curr = 1;

	if (current === 3 || current === 5) curr = current;
	return curr * multiple(max, current++);
}

console.log(multiple(10));
