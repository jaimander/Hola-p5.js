function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill(0, 255, 0);
  ellipse(200, 200, 100, 100);
  fill(0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text(':-)', 200, 200);
}
