let fishSheet;

let frameWidth = 120;
let frameHeight = 120;
let totalFrames = 8;

let currentFrame = 0;
let animationSpeed = 5; // smaller = faster, bigger = slower

function preload() {
  fishSheet = loadImage("assets/images/fish.png");
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  background(220);

  // Change frame
  if (frameCount % animationSpeed === 0) {
    currentFrame = (currentFrame + 1) % totalFrames;
  }

  // Crop position on sprite sheet
  let sx = currentFrame * frameWidth;
  let sy = 0;

  // Draw fish in center
  image(
    fishSheet,
    width / 2,
    height / 2,
    frameWidth,
    frameHeight,
    sx,
    sy,
    frameWidth,
    frameHeight
  );
}