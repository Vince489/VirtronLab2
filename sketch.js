function setup() {
  // Create a 3D canvas
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(200);  // Set the background color
}

let vectors = []; // Array to store vectors

function setup() {
  createCanvas(800, 800, WEBGL);

  // Create some random vectors
  for (let i = 0; i < 10; i++) {
    let x = random(-200, 200);
    let y = random(-200, 200);
    let z = random(-200, 200);
    vectors.push(createVector(x, y, z));
  }
}

function draw() {
  background(200);
  rotateX(frameCount * 0.01);  // Rotate around the X-axis
  rotateY(frameCount * 0.01);  // Rotate around the Y-axis
  
  // Draw each vector as a point in 3D space
  for (let v of vectors) {
    push();
    translate(v.x, v.y, v.z);  // Move to vector's position
    stroke(255, 0, 0);  // Set the color to red
    point(0, 0, 0);  // Draw a point at the vector's location
    pop();
  }
}

function draw() {
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  
  // Draw a cube to represent the 3D space
  stroke(0);
  noFill();
  box(300);  // Draw a cube with size 300
  
  // Display each vector as a point
  for (let v of vectors) {
    push();
    translate(v.x, v.y, v.z);
    stroke(255, 0, 0);
    point(0, 0, 0);  // Draw point at the vector's location
    pop();
  }
}

function draw() {
  background(200);
  
  // Use mouse position to rotate the cube
  rotateX(map(mouseY, 0, height, -PI, PI));
  rotateY(map(mouseX, 0, width, -PI, PI));
  
  // Draw a cube
  stroke(0);
  noFill();
  box(300);
  
  // Display each vector as a point
  for (let v of vectors) {
    push();
    translate(v.x, v.y, v.z);
    stroke(255, 0, 0);
    point(0, 0, 0);
    pop();
  }
}
