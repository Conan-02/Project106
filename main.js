predict1 = "";
predict2 = "";

Webcam.set({
    height: 300,
    width: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function takeShot() {
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="capturedImg" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version: ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-S2FfdBk7/', modelLoaded);

function modelLoaded() {
    console.log("model loaded");
}

function speak() {
    var synth = window.SpeechSynthesis;
    speech1 = "The first prediction is " + predict1;
    speech2 = "The second prediction is " + predict2;
    var utterThis = new SpeechSynthesisUtterance(speech1 + speech2);
    synth.speak(utterThis);
}
