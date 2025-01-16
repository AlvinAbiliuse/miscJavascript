

async function populate() {
	console.log("working");
	const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

	const request = new Request(requestURL);
	
	const response = await fetch(request);
	console.log(response);
	const superHeroes = await response.json();
	console.log(superHeroes);

	populateHeader(superHeroes);
	populateHeroes(superHeroes);
};

function populateHeader(heroes) {
	let x = 1;	
};

function populateHeroes(heroes) {
	let x = 1;	

};


populate();
