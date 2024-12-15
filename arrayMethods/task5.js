let copySorted = (arr) => {
		let newArr = new Array();
		for (i in arr) {
			newArr.push(arr[i]);
		}
		return newArr.sort();
}



let array = ["HTML", "Javascript", "CSS"];
let newArray = copySorted(array);
console.log(array);
console.log(newArray);
