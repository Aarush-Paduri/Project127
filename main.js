harry_potter = "";
peter_pan = "";

function preload() {
    harry_potter = loadSound("Harry.mp3");
    peter_pan = loadSound("Peter.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}