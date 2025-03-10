function fib(n) {
	let n1 = 0;
	let n2 = 1;
	let answer = 0;
	while (n1 < n) {
		if (n1 % 2 === 0) {
			answer = answer + n1;
		}
		let current = n1;
		n1 = n2;
		n2 = current + n2;
	}
	return answer;
	/* comma seperated string version:
  return arr.join(", ")
  */
}

console.log(fib(4000000));
