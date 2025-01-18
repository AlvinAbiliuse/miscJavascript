






function addToDom() {
	let card = document.createElement("div");
	let mainContent = document.querySelector(".mainContent");
	card.className = "card";
	let h1 = document.createElement("h1");
	let p1 = document.createElement("p");
	let elId = document.createElement("p");
	elId.className = "identification"

	h1.textContent = "header";
	p1.textContent = "paragraph";
	elId.textContent = Math.floor(Math.random() * 100000);
	
	card.appendChild(h1);
	card.appendChild(p1);
	card.appendChild(elId);

	mainContent.appendChild(card);
}
	 





let button = document.querySelector("button");

button.addEventListener("click", addToDom);

