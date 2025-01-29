let newImage = document.querySelector(".newImg");
let s = "cats";
let key = "sr3YmfucDXY2tWhybfwINnvqbsDSqSRw";

function getImage(search) {
	const img = document.querySelector("img");
	fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${search}`, {
		mode: "cors",
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			img.src = response.data.images.original.url;
		});
}

getImage(s);
newImage.addEventListener("click", () => getImage(s));
