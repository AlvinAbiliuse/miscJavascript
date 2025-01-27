let email = [document.getElementById("email"), "Please enter a valid email!"];
let country = [
	document.getElementById("country"),
	"Please enter a valid country!",
];
let zipcode = [
	document.getElementById("zipcode"),
	"Please enter a valid Zip Code!",
];
let pass = [document.getElementById("pass"), "Please enter a password"];
let passConfirm = [
	document.getElementById("passConfirm"),
	"password confirmation does not match the password!",
];
let form = [document.querySelector("form")];

function checkValidity(data) {
	if (!data[0].validity.valid) {
		data[0].nextElementSibling.textContent = data[1];
		data[0].classList.add("invalid");
	} else {
		data[0].classList.remove("invalid");
		data[0].nextElementSibling.textContent = "";
	}
}

function passCheck(e) {
	console.log(pass.value);
	if (pass.value.length == 0) {
		pass[0].nextElementSibling.textContent = pass[1];
		e.preventDefault();
	} else {
	}
	pass[0].nextElementSibling.textContent = "";
	if ((pass.value.length = pass.value != passConfirm.value)) {
		console.log("pass");
	}
}

function formCheck() {}

email[0].addEventListener("focusout", () => {
	checkValidity(email);
});
country[0].addEventListener("focusout", () => {
	checkValidity(country);
});
zipcode[0].addEventListener("focusout", () => {
	checkValidity(zipcode);
});
passConfirm[0].addEventListener("focusout", passCheck);
form[0].addEventListener("submit", (e) => {
	passCheck(e);
	e.preventDefault();
});
