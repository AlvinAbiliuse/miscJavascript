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

function getPersonsInfo(name) {
	return server.getPeople().then((people) => {
		return people.find((person) => {
			return person.name === name;
		});
	});
}

getPersonsInfo("Odin").then((message) => console.log(message));
getPersonsInfo("Thor").then((message) => console.log(message));
getPersonsInfo("Freyja").then((message) => console.log(message));
