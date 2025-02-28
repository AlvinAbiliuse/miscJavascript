/* My Solution: 

function contains(object, q) {
	if (object.length == 0) return false;
	for (i in object) {
		if (object[i] === q) {
			return true;
		}
		if (typeof object[i] === "object") {
			return contains(object[i], q);
		}
	}
	return false;
}
*/

// Better Solution:
function contains(object, searchValue) {
	if (typeof object !== "object" || object == null) {
		return object === searchValue;
	}

	for (const value of Object.values(object)) {
		if (contains(value, searchValue)) {
			return true;
		}
	}
	return false;
}

var nestedObject = {
	data: {
		info: {
			stuff: {
				nullValue: null,
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
