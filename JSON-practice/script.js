

async function populate() {
	const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

	const request = new Request(requestURL);
	
	const response = await fetch(request);
	const superHeroes = await response.json();
	console.log(superHeroes);

	populateHeader(superHeroes);
	populateHeroes(superHeroes);
};

function populateHeader(heroes) {
	let header = document.querySelector("header");
	let headerTitle = document.createElement("h1");
	headerTitle.textContent = heroes.squadName;
	header.appendChild(headerTitle);
	let headerInfo = document.createElement("p");
	headerInfo.textContent = `Hometown: ${heroes.hometown} //
		formed: ${heroes.formed}`;
	header.appendChild(headerInfo);
};

function populateHeroes(heroes) {
	let x = 1;	

};


populate();
