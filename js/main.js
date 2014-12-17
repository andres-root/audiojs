// Sound Generator
var oscillator = (function () {
	// Creating oscillator
	var context = new AudioContext();
	var carrier = context.createOscillator();
	var modulator = context.createOscillator();
	var gain = context.createGain();
	
	var analyser = context.createAnalyser();
	analyser.fftSize = 2048;
	var bufferLength = analyser.frequencyBinCount;
	var dataArray = new Uint8Array(bufferLength);
	analyser.getByteTimeDomainData(dataArray);

	// Creating canvas
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');
	var x = 0;
	var y = window.innerHeight / 2;
	var radius = 1/2;
    var frameRate = 1;
	ctx.fillStyle = 'rgb(200, 200, 200)';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.lineWidth = 1;
	ctx.strokeStyle = '#0f0';

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

	var draw = function () {
		drawVisual = requestAnimationFrame(draw);

      	analyser.getByteTimeDomainData(dataArray);

		ctx.beginPath();
		var sliceWidth = canvas.width * 1.0 / bufferLength;
      	var x = 0;
      	for(var i = 0; i < bufferLength; i++) {
      		console.log("here: " + dataArray[i])
  	        var v = dataArray[i] / 128.0;
  	        var y = v * canvas.height/2;

  	        if(i === 0) {
  	          ctx.moveTo(x, y);
  	        } else {
  	          ctx.lineTo(x, y);
  	        }

  	        x += sliceWidth;
      	}
      	ctx.lineTo(canvas.width, canvas.height/2);
      	ctx.stroke();
	};

	var start = function () {
		play();
		draw();
	}

	return {
		start: start
	}
})();

oscillator.start();
