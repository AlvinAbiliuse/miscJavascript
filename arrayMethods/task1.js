

function capitalize(str) {
	let string = str; 
	let arr = string.split("-");
	for (i=1; i < arr.length; i++) {
		arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
	}
	console.log(arr)
}

capitalize("background-color-of-doom-and-shrooms")
