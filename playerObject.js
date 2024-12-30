
const log = console.log;

function Person(name) {
	this.name = name;
}

Person.prototype.sayName = function() {
	log(`Hello, I'm ${this.name}`);
}


function Player(name, marker) {
	this.name = name;
	this.marker = marker;
}
Player.prototype.getMarker = function() {
	log(`My marker is '${this.marker}'`);
}

Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();
