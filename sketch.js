let i = 0;
let isAnimating = false;

//The setup function only happens once
function setup() {
  createCanvas(500, 500); //create a 500px X 500px canvass
}

//The draw function happens over and over again
function draw() {
  background(0,0,0); //an RGB color for the canvas' background
  // circle
  stroke(2255, 187, 0); // an RGB color for the circle's border
  fill(255, 187, 0); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(i, width / 2, 50, 20); // center of canvas, 20px dia
  if (isAnimating) { // if animation is running
    if (i < width) { // increment i if less than canvas width
      i+=5
    } else { // preventing the edge case of i greater than width
      i = 0
      isAnimating = false // prevent infinite loop
    }
  }
}

function mousePressed() {
  isAnimating = true; // start the animation of the ellipse
}
