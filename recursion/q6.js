function contains(object, search) {
	if (Array.isArray(object)) {
		if (object.length === 0) return false;
		for (let i in object) {
			console.log(object[i]);
		}
}
	if (typeof object === "object") {
		console.log("yes");
		return contains(Object.keys(object));
	} else {
		
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
