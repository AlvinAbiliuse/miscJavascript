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
let formSubmit = [document.querySelector("form button")];

function checkValidity(data, e) {
	if (!data[0].validity.valid) {
		data[0].nextElementSibling.textContent = data[1];
		data[0].classList.add("invalid");
		data[0].classList.remove("valid");
		try {
			e.preventDefault();
		} catch {}
	} else {
		data[0].classList.remove("invalid");
		data[0].classList.add("valid");
		data[0].nextElementSibling.textContent = "";
	}
}

function formCheck(e) {
	[email, country, zipcode, pass, passConfirm].forEach((variable) =>
		checkValidity(variable, e)
	);
}

function checkPass(e) {
	if (pass[0].value != passConfirm[0].value) {
		console.log("nyet");
		passConfirm[0].classList.add("invalid");
		passConfirm[0].classList.remove("valid");
		passConfirm[0].nextElementSibling.textContent = passConfirm[1];
		try {
			e.preventDefault();
		} catch {}
	} else {
		passConfirm[0].classList.remove("invalid");
		passConfirm[0].classList.add("valid");
		passConfirm[0].nextElementSibling.textContent = "";
	}
}

email[0].addEventListener("focusout", () => {
	checkValidity(email);
});

country[0].addEventListener("focusout", () => {
	checkValidity(country);
});

zipcode[0].addEventListener("focusout", () => {
	checkValidity(zipcode);
});

pass[0].addEventListener("focusout", () => {
	checkValidity(pass);
	checkPass();
	console.log(pass[0].value.length);
});

passConfirm[0].addEventListener("focusout", () => {
	checkPass();
	console.log(pass[0].value.length);
});

formSubmit[0].addEventListener("click", (e) => {
	console.log(e);
	formCheck(e);
	checkPass(e);
});
