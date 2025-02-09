const server = {
	people: [
		{
			name: "Odin",
			age: 20,
		},
		{
			name: "Thor",
			age: 35,
		},
		{
			name: "Freyja",
			age: 29,
		},
	],

	getPeople() {
		return new Promise((resolve, reject) => {
			// Simulating a delayed network call to the server
			setTimeout(() => {
				resolve(this.people);
			}, 2000);
		});
	},
};

async function getPersonsInfo(name) {
	const people = await server.getPeople();
	const person = people.find((person) => {
		return person.name === name;
	});
	return person;
}

async function start() {
	for (let i = 0; i < 3; i++) {
		let person = await getPersonsInfo(["Odin", "Thor", "Freyja"][i]);
		console.log(person);
	}
}

start();
