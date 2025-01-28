let p = (a, b) =>
	new Promise((resolve, reject) => {
		if ((a + b) % 2 == 0) {
			setTimeout(() => {
				resolve("Resolved");
			}, 2000);
		} else {
			setTimeout(() => {
				reject("Rejected");
			}, 2000);
		}
	});

p(1, 1)
	.then((message) => {
		console.log(message);
	})
	.catch((message) => {
		console.error(message);
	})
	.then(() => console.log("bye"));
