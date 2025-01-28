function callPromise(n) {
	console.log(n);
	return new Promise((res, rej) => {
		if (n % 2 == 0) {
			setTimeout(() => {
				res("yes");
			}, 5000);
		} else {
			setTimeout(() => {
				rej("no");
			}, 5000);
		}
	});
}

for (let i = 0; i < 10; i++) {
	callPromise(i)
		.then((message) => console.log(message))
		.catch((message) => console.log(message));
}
