

// Sound Generator
var oscillator = (function () {
	var context = new AudioContext();
	var carrier = context.createOscillator();
	var modulator = context.createOscillator();
	var gain = context.createGain();
	var analyser = context.createAnalyser();
	analyser.fftSize = 2048;
	var bufferLength = analyser.frequencyBinCount;
	var dataArray = new Uint8Array(bufferLength);

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

// Wave Function
var wave = (function (){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	var x = 0;
	var y = window.innerHeight / 2;
	var radius = 1/2;
    var frameRate = 1;
	ctx.fillStyle = "rgba(0, 0, 0, 1.0)";
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#0f0';


	var setUp = function () {
	};

	var draw = function () {
		ctx.beginPath();
		var sliceWidth = WIDTH * 1.0 / bufferLength;
      	var x = 0;
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
  			ctx.clearRect(0, 0, canvas.width, canvas.height);
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
})(oscillator|| {});
wave.start();
oscillator.play();
