// Wave Function
var wave = (function (){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	var x = 0;
	var y = window.innerHeight / 2;
	var radius = 1/2;
    var frameRate = 1;
	context.fillStyle = "rgba(0, 0, 0, 1.0)";
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context.fillRect(0, 0, canvas.width, canvas.height);


	var setUp = function () {
	};

	var draw = function () {
		context.beginPath();
		context.arc(x, y, radius, 0, 2 * Math.PI, false);
		context.fillStyle = '#0f0';
		context.fill();
	};

	var animate = function () {
		draw();
    	r = Math.random()
		if (x > canvas.width) {
			x = 0;
  			context.clearRect(0, 0, canvas.width, canvas.height);
		} else {
			x++;
		}
		if (x > 0) {
    		if (r < 0.5) {
    		    y++;
    		} else {
    			y--;
    		}
    	}
	}

	var start = function () {
    	setInterval(animate, frameRate)
	}

	return {
		start: start
	}
})();
wave.start();
