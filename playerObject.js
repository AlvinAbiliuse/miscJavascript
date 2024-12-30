
const log = console.log;

function Player(name, marker) {
	this.name = name;
	this.marker = marker;
	this.sayName = function() {
		log(this.name)
	}
}
Player.prototype.sayHello = function() {
	log("Hello, I'm a player!");
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");
player1.sayName();
player2.sayName();

player1.sayHello();
player2.sayHello();
