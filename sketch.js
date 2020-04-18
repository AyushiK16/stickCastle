function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);  
  fill("");
  rectMode(CENTER);
  //The middle one
  fill(158, 224, 158);
  rect(200, 300, 40, 300);

  //The first pair of side ones
  fill(253, 253, 151);
  rect(240, 320,30, 280)

  fill(158, 193, 207);
  rect(160, 320, 30, 280);

  //The second pair of side ones
  fill(254, 177, 68);
  rect(270, 340, 30, 260);

  fill(119, 158, 203);
  rect(130, 340, 30, 260);

  //The third pair of side ones
  fill(255, 102, 99);
  rect(300, 360, 30, 240);

  fill(204, 153, 201);
  rect(100, 360, 30, 240);

  //The white blocks
  fill("white");
  rect(350, 310, 20, 290);
  rect(50, 310, 20, 290);

  //the triangle on the top.
  triangle(170, 165, 200, 110, 230, 165);
  
}