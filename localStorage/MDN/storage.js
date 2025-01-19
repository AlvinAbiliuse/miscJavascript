(function () {

let data = window["localStorage"];

let currentData = JSON.parse(data["MDN-Local-Storage"]);




window.addEventListener("storage", () => {
	let storageArr = ["bgColor", "font", "image"];
	for (i in ["","",""]) {
		if (JSON.parse(data["MDN-Local-Storage"])[storageArr[i]]
			!== currentData[storageArr[i]]) {
			console.log(storageArr[i]);
			document.querySelector(".key").textContent = "Key: " +
				storageArr[i];
			document.querySelector(".old").textContent = 
				"Old Value: " + currentData[storageArr[i]];
			document.querySelector(".new").textContent = 
				"New Value: " + JSON.parse(data[
					"MDN-Local-Storage"])[storageArr[i]];
		}
	}
	currentData = JSON.parse(data["MDN-Local-Storage"]);
	document.querySelector(".storage").textContent = "Storage Area: " + data[
		"MDN-Local-Storage"];
});
})();
