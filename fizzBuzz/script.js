function fizzBuzz(event) {
	let message = '';
	let elNum = document.getElementById("input");
	let num = elNum.value;
	let numList = [1];
	for (i=1; i < num; i++) {
		numList.push(i + 1);
	}
	for (i=0; i < numList.length; i++) {
		if (numList[i] % 3 == 0 && numList[i] % 5 == 0) {
			message += "FizzBuzz</br>";
		} else if (numList[i] % 3 == 0) {
			message += "Fizz</br>";
		} else if (numList[i] % 5 == 0) {
			message += "Buzz</br>";
		} else {
			message += ((i+1) + "</br>")
		}
	}
	elMsg.innerHTML= message;
	elNum.value = "";
	event.preventDefault();
}

let elMsg = document.getElementById("message");
let elForm = document.getElementById("form");

elForm.addEventListener("click", function(e) {
				fizzBuzz(e)})
					
