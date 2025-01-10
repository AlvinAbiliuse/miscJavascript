



function timer({template}) {
	let timer, newTime, hours, minutes, seconds, output;
	
	function render() {
		newTime = new Date();

		hours = newTime.getHours();
		if (hours < 10) hours = "0" + hours;
	
		minutes = newTime.getMinutes();
		if (minutes < 10) minutes = "0" + minutes;

		seconds = newTime.getSeconds();
		if (seconds < 10) seconds = "0" + seconds;

		output = template 
				.replace("h", hours)
				.replace("m", minutes)
				.replace("s", seconds);
		
		console.log(output);
	}

	this.stop = function() {
		clearInterval(timer);
	}
	
	this.start = function() {
		render();
		timer = setInterval(render, 1000);
	}
}




let clock = new timer({template: "h:m:s"});	
clock.start();
			
