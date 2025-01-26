let email = document.getElementById("email");
let country = document.getElementById("country");
let zipcode = document.getElementById("zipcode");
let pass = document.getElementById("pass");
let passConfirm = document.getElementById("passConfirm");
let form = document.querySelector("form");

function checkValidity() {
	if (!email.checkValidity.validiti) {
		console.log(email.value);
		email.nextElementSibling.textContent = "yolo";
	}
}

function checkPass() {
	if (pass.value != passConfirm.value) {
	}
}

email.addEventListener("focusout", checkValidity);
country.addEventListener("focusout", checkValidity);
zipcode.addEventListener("focusout", checkValidity);
pass.addEventListener("focusout", checkValidity);
passConfirm.addEventListener("focusout", checkValidity);
form.addEventListener("submit", checkValidity);
