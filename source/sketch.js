function setup() {
  createCanvas(CANVAS.WIDTH, CANVAS.HEIGHT);
  fill(BALL_COLOR);
  strokeWeight(BORDER_THIKNESS);
  stroke(BORDER_COLOR);
}

function draw() {
  background(BACKGROUND_COLOR);
  const cords = findNextCoordinates();
  displayBallAt(cords);
}
