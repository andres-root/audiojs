// Wave Function
var wave = (function (){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	var x = 0;
	var y = window.innerHeight / 2;
	var radius = 1/2;
    var frameRate = 10
	context.fillStyle = "rgba(0, 0, 0, 1.0)";
	context.fillRect(0, 0, canvas.width, canvas.height);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context.beginPath();


	var setUp = function () {
	};

	var draw = function () {
		context.arc(x, y, radius, 0, 2 * Math.PI, false);
		context.fillStyle = '#0f0';
		context.fill();
	};

	var animate = function () {
		draw();
		y = Math.sin(x * Math.PI / 180);
		if(y >= 0 ) {
			y = 100 - (y - 0) * 50;
		} else {
			y = 250 + (0 - y) * 50;
		}
		if (x > canvas.width) {
			x = 0;
		} else {
			x++;
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
