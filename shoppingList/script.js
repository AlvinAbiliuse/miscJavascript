const addButton = document.querySelector("#addBtn");
const textBox = document.querySelector("#item");
const delBtn = document.querySelectorAll(".delBtn");
const list = document.querySelector("ul");

function addEl () {
	const newEl = document.createElement("li");
	newEl.textContent = textBox.value;
	const btnAdd = document.createElement("button");
	btnAdd.textContent = "Delete";
	btnAdd.className = "delBtn";
	newEl.appendChild(btnAdd);
	list.appendChild(newEl);	
	textBox.value = "";
	textBox.focus();
}

list.addEventListener("click", (e) => {
			console.log(e.srcElement.parentNode.remove());})

addButton.addEventListener("click", addEl);
