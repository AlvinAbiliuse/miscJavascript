let documentContainer = document.getElementById("container");

let p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm Red";


let h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";

let div = document.createElement("div");
div.style.cssText = "border: 1px solid black; background: pink";
let divh1 = document.createElement("h1");
divh1.textContent = "I'm in a div!";
let divp = document.createElement("p");
divp.textContent = "Me too!!";

div.appendChild(divh1);
div.appendChild(p);

documentContainer.appendChild(p);
documentContainer.appendChild(h3);
documentContainer.appendChild(div);

