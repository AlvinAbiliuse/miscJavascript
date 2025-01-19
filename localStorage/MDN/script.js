
const images = {
	"Mac and Cheese": "./images/maccheese.webp",
	"Orange Chicken": "./images/orange.webp",
	"Pizza": "./images/pizza.webp"
}


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

let storage = window["localStorage"];

if (storage["MDN-Local-Storage"]) {
	console.log("MDN Local Storage Exists");
	populate(JSON.parse(storage["MDN-Local-Storage"]));
} else {
	storage.setItem("MDN-Local-Storage", 
		JSON.stringify({"bgColor": "blue",
										"font": "sans-serif",
										"image": "Mac and Cheese"
									}));
		populate(JSON.parse(storage["MDN-Local-Storage"]));
	console.log("MDN Local Storage does not Exist");
}

let mdn = JSON.parse(storage["MDN-Local-Storage"]);

function populate(obj) {
	let bg = document.querySelector("body")
	let font = document.querySelector("body")
	let img = document.querySelector(".lowerImage")

	bg.style.background = obj["bgColor"];
	font.style.fontFamily = obj["font"];
	img.setAttribute("src", images[obj["image"]])
	
	let bgInput = document.querySelector("#background");
	let fontInput = document.querySelector("#font");
	let imgInput = document.querySelector("#image");
	bgInput.value = obj["bgColor"];
};
		
		
console.log(mdn);
let backgroundEl = document.querySelector("#background");
let fontEl = document.querySelector("#font");
let imgEl = document.querySelector("#image");


backgroundEl.addEventListener("change", (e) => {
	document.querySelector("body").style.background = 
		e.target.value;
	mdn["bgColor"] = e.target.value;
	storage["MDN-Local-Storage"] = JSON.stringify(mdn);
});

fontEl.addEventListener("change", (e) => {
	document.querySelector("body").style.fontFamily =
		e.target.value;
	mdn["font"] = e.target.value;
	storage["MDN-Local-Storage"] = JSON.stringify(mdn);
});

imgEl.addEventListener("change", (e) => {
	document.querySelector(".lowerImage").setAttribute("src", 
		images[e.target.value])
	mdn["image"] = e.target.value;
	storage["MDN-Local-Storage"] = JSON.stringify(mdn);
});
