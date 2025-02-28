function contains(object, q) {
	let keys = Object.keys(object);
	if (keys.length == 0) return false;
	for (i in keys) {
		console.log(object[keys[i]], q);
		if (object[keys[i]] === q) {
			console.log("gottem");
			return true;
		}
		if (typeof object[keys[i]] === "object") {
			return contains(object[keys[i]]);
		}
	}
	return false;
}

var nestedObject = {
	data: {
		info: {
			stuff: {
				thing: {
					moreStuff: {
						magicNumber: 44,
						something: "foo2",
					},
				},
			},
		},
	},
};

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

console.log(hasIt);
console.log(doesntHaveIt);
