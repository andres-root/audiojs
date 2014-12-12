// Wave Function
var wave = (function (){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');
	var x = 0;
	var y = window.innerHeight / 2;

	var setUp = function () {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	};

	var draw = function () {
		setUp();
		context.fillStyle()
	};

	return {
		setUp: setUp,
		draw: draw
	}
})();