// Wave Function
var wave = (function (){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	var x = 0;
	var y = window.innerHeight / 2;
	var radius = 1;
    var frameRate = 1000/30


	var setUp = function () {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		context.fillStyle = "rgba(0, 0, 0, 1.0)";
		context.fillRect(0, 0, canvas.width, canvas.height);
	};

	var draw = function () {
		setUp();
		context.beginPath();
		context.arc(x, y, radius, 0, 2 * Math.PI, false);
		context.fillStyle = '#0f0';
		context.fill();
	};

	var animate = function () {
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