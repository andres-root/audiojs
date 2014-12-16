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
    	if (r < 0.5) {
    	    y++;
    	} else {
    		y--;
    	}
		if (x > canvas.width) {
			x = 0;
			y = window.innerHeight / 2;
  			context.clearRect(0, 0, canvas.width, canvas.height);
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

// Sound Generator
var sound = (function () {
	var context = new AudioContext();
	var carrier = context.createOscillator();
	var modulator = context.createOscillator();
	var gain = context.createGain();

	var play = function () {
		carrier.frequency.value = 100;
		carrier.connect(gain);
		gain.connect(context.destination);

		modulator.detune.value = 1000;
		modulator.frequency.value = 5;
 		modulator.connect(gain.gain);
		carrier.start(0);
		modulator.start(0);
	};
	return {
		play: play
	}
})();
sound.play();
wave.start();
