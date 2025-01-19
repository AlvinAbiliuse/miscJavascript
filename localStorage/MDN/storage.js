(function () {

let data = window["localStorage"];

let currentData = JSON.parse(data["MDN-Local-Storage"]);




window.addEventListener("storage", () => {
	let storageArr = ["bgColor", "font", "image"];
	for (i in ["","",""]) {
		if (JSON.parse(data["MDN-Local-Storage"])[storageArr[i]]
			!== currentData[storageArr[i]]) {
			console.log(storageArr[i]);
			document.querySelector(".key span").textContent = 
				storageArr[i];
			document.querySelector(".old span").textContent = 
				currentData[storageArr[i]];
			document.querySelector(".new span").textContent = 
				JSON.parse(data["MDN-Local-Storage"])[storageArr[i]];
			if (storageArr[i] == "bgColor") {
				document.querySelector(".newColor").style.
					background = JSON.parse(data[
						"MDN-Local-Storage"])[storageArr[i]];
				document.querySelector(".oldColor").style.
					background = currentData[storageArr[i]];
			};
		}
	}
	currentData = JSON.parse(data["MDN-Local-Storage"]);
	document.querySelector(".storage span").textContent = 
		data["MDN-Local-Storage"];
});
})();
