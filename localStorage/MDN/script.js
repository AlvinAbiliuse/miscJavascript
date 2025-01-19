
function storageAvailable(type) {
	let storage;
	try {
		storage = window[type];
		const x = "__storage_test__";
		storage.setItem(x, x);
		storage.removeItem(x);
		console.log("storage is available");
	} catch (e) {
		console.log("no storage");
	}
}
storageAvailable("localStorage");


let backgroundEl = document.querySelector("#background");
let fontEl = document.querySelector("#font");
let imgEl = document.querySelector("#image");

const images = {
	"Mac and Cheese": "./images/maccheese.webp",
	"Orange Chicken": "./images/orange.webp",
	"Pizza": "./images/pizza.webp"
}

backgroundEl.addEventListener("change", (e) => {
	document.querySelector("body").style.background = 
		e.target.value;
});

fontEl.addEventListener("change", (e) => {
	document.querySelector("body").style.fontFamily =
		e.target.value;
});

imgEl.addEventListener("change", (e) => {
	document.querySelector(".lowerImage").setAttribute("src", 
		images[e.target.value])
});
