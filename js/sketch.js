// Academy of Art University
// WNM 498 Generative Art & Creative Code
//
// Ryan Berkey
// ryan@rybotron.com



var sound;
var amp;
var fft;
var accum = 0;

// Preload the sound file
function preload(){
    sound = loadSound("audio/inmotion.wav");

}

function setup(){
    createCanvas( windowWidth, windowHeight );
    sound.play();
    circleRGBA = color(10, 200, 180, 100);

    // Start playing the sound
    

    amp = new p5.Amplitude(1);
    amp.setInput(sound);

    fft = new p5.FFT();
    fft.setInput(sound);
}

function draw() {

    background( 0 );

    var level = amp.getLevel();
    accum +=  level / 20;

    var n = map( noise(accum), 0, 1, 0, width );


    stroke( 35, 255, 20 );
    strokeWeight(level * 300);
    line( n, 0, n, height);



}

















