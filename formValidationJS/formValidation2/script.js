

let form = document.querySelector("form");
let email = document.querySelector("#mail");
let emailError = 
	document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
	if (email.validity.valid) {
		emailError.textContent = "";
		emailError.className = "error";
	} else {
		showError();
	}
});

form.addEventListener("submit", (event) => { 
	if (!email.validity.valid) {
		showError();
		event.preventDefault();
	}
});

function showError() {
	if (email.validity.valueMissing) {
		emailError.textContent = 
			"You need to enter an email address";
	} else if (email.validity.typeMismatch) {
		emailError.textContent = 
			"Enter value needs to be an email addres.";
	} else if (email.validity.tooShort) {
			emailError.textContent = `Email should be at least 
				${email.minLength} characters; you entered 
				${email.value.length}`;
	}
	emailError.className = "error active";
};

