// Wave Function
var wave = (function (){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	var x = 0;
	var y = window.innerHeight / 2;

	var setUp = function () {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		context.fillStyle = "rgba(0, 0, 0, 1.0)";
		context.fillRect(0, 0, canvas.width, canvas.height);
	};

	var draw = function () {
		setUp();
	};

	return {
		draw: draw
	}
})();
wave.draw();