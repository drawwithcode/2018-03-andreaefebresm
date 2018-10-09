function preload() {
  // put preload code here
}
var colorList = ['#2E5266', '#6E8898', '#9FB1BC', '#F4F1EB', '#E2C044'];
// var colorList2 = ['#210B2C', '#55286F', '#BC96E6', '#D8B4E2', '#AE759F'];
var colorList2 = ['#9FB1BC', '#E2C044', '#F4F1EB', '#6E8898', '#2E5266'];

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  frameRate(10);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here

  background(colorList[1]);

  // grid

  // orizontal lines
  for (var y = 0; y < windowHeight/3; y += 53) {
    strokeWeight(0.5);
    stroke(244, 241, 235, 40);
    line(0, y, windowWidth, y);
  }
  // diagonals right
  for (var a = -1000; a < windowWidth; a += 60) {
    strokeWeight(0.5);
    stroke(244, 241, 235, 40);
    line(a, 0, a + 600, windowHeight);
  }
  // diagonals left
  for (var b = -1000; b < windowWidth; b += 60) {
    strokeWeight(0.5);
    stroke(244, 241, 235, 40);
    line(b, windowHeight, b + 600, 0);
  }

 // rect
 rectMode(CORNER);
 noStroke();
 fill(colorList[1]);
 rect(0,windowHeight/3,windowWidth,windowHeight)
  // // // //


  var index = floor(random() * colorList.length);
  var colorHex = colorList[index];

  if (mouseY >= windowHeight / 3) {
    // triangles down 1
    for (var t = -1000; t < windowWidth; t += 60) {
      for (var u = windowHeight / 3 + 75; u < windowHeight; u += 52.5 * 2) {
        noStroke();
        fill(color(colorHex));
        triangle(t, u, t + 60, u, t + 30, u + 52.5)
      }
    }
    var ind = floor(0.3 * random() * colorList2.length);
    var colorHex2 = colorList2[ind];

    // triangles down 2
    for (var t1 = -1000; t1 < windowWidth; t1 += 60) {
      for (var u1 = windowHeight / 3 + 52.5 - 30; u1 < windowHeight; u1 += 52.5 * 2) {
        noStroke();
        fill(color(colorHex2));
        triangle(t1 + 30, u1, t1 + 90, u1, t1 + 60, u1 + 52.5)
      }
    }
  } else {
    // triangles down 1
    for (var t = -1000; t < windowWidth; t += 60) {
      for (var u = windowHeight / 3 + 75 ; u < windowHeight; u += 52.5 * 2) {
        noStroke();
        fill(0,0,0,20);
        triangle(t, u, t + 60, u, t + 30, u + 52.5)
      }
    }
    var ind = floor(0.3 * random() * colorList2.length);
    var colorHex2 = colorList2[ind];

    // triangles down 2
    for (var t1 = -1000; t1 < windowWidth; t1 += 60) {
      for (var u1 = windowHeight / 3 + 52.5 -30; u1 < windowHeight; u1 += 52.5 * 2) {
        noStroke();
        fill(250,250,250,20);
        triangle(t1 + 30, u1, t1 + 90, u1, t1 + 60, u1 + 52.5)
      }
    }
  }

  // line
  rectMode(CENTER);
  fill(colorList[4]);
  rect(windowWidth / 2, windowHeight / 3, windowWidth, 52.5);

  // text
  textFont('FUTURA');
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text('DO NOT CROSS THE YELLOW LINE', windowWidth / 2, windowHeight / 2.9);

}
