function callPromise(n) {
	console.log(n);
	return new Promise((resolve, reject) => {
		if (n % 2 == 0) {
			setTimeout(() => {
				resolve("yes");
			}, 5000);
		} else {
			setTimeout(() => {
				reject("no");
			}, 5000);
		}
	});
}

for (let i = 0; i < 10; i++) {
	callPromise(i)
		.then((message) => console.log(message))
		.catch((message) => console.log(message));
}
