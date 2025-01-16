

async function populate() {
	const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

	const request = new Request(requestURL);
	
	const response = await fetch(request);
	const superHeroes = await response.json();

	populateHeader(superHeroes);
	populateHeroes(superHeroes);
};

function populateHeader(heroes) {
	let header = document.querySelector("header");
	let headerTitle = document.createElement("h1");
	headerTitle.textContent = heroes.squadName;
	header.appendChild(headerTitle);
	let headerInfo = document.createElement("p");
	headerInfo.textContent = `Hometown: ${heroes.homeTown} //
		formed: ${heroes.formed}`;
	header.appendChild(headerInfo);
};

function populateHeroes(heroes) {
	let section = document.querySelector("section");
	for (i in heroes.members) {
		let article = document.createElement("article");
		let info = document.createElement("h2");
		info.textContent = heroes.members[i].name;
		article.append(info);
		info = document.createElement("p");
		info.textContent = `Secret Identity: 
					${heroes.members[i].secretIdentity}`;
		article.append(info);
		info = document.createElement("p");
		info.textContent = `Age: ${heroes.members[i].age}`;
		article.append(info);
		info = document.createElement("p");
		info.textContent = "Superpowers:";
		article.append(info);
		info = document.createElement("ul");
		for (j in heroes.members[i].powers) {
			let li = document.createElement("li");
			li.textContent = heroes.members[i].powers[j];
			info.appendChild(li);
		}
		article.appendChild(info);
		section.appendChild(article);
	}	
};


populate();






















