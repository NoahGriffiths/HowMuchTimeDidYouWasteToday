
let backImg;
let leftGifImg;  
let rightGifImg;  
let y = 0;
let startTime = 7 * 60 + 40; 
let endTime = 22 * 60 + 40;  
let totalTime = endTime - startTime; 
let elapsedTime = 0;  
let timePerFrame;  

let isHoveringOverPhone = false;
let rightGifWidth = 100 * 6; 
let leftGifWidth = 100 * 6; 

function preload() {
  backImg = loadImage("movBackground.jpg");
  leftGifImg = loadImage("footWalk_1.gif");  
  rightGifImg = loadImage("phoneHand1.gif");  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);  
  timePerFrame = totalTime / (2 * 60 * 60);  
}

function draw() {
  background(220);

  let aspectRatio = backImg.height / backImg.width;
  let newHeight = windowWidth * aspectRatio;

  image(backImg, 0, windowHeight - newHeight + y, windowWidth, newHeight);

  image(backImg, 0, windowHeight - newHeight + y + newHeight, windowWidth, newHeight);

  y += 2;

  if (y >= newHeight) {
    y = 0;  
  }

  elapsedTime += timePerFrame;

  if (elapsedTime > totalTime) {
    elapsedTime = totalTime;
  }

  let currentTimeInMinutes = startTime + elapsedTime;

  let hours = floor(currentTimeInMinutes / 60);
  let minutes = floor(currentTimeInMinutes % 60);

  if (isHoveringOverPhone) {
    timePerFrame = totalTime / (2 * 60 * 60) * 8;  
    rightGifWidth = 100 * 6 * 1.25;  
    y += 16;

  } else {
    timePerFrame = totalTime / (2 * 60 * 60); 
    rightGifWidth = 100 * 6;  
    y += 2;
    leftGifImg = leftGifImg;
  }

  let leftGifHeight = leftGifImg.height * (leftGifWidth / leftGifImg.width);  
  let rightGifHeight = rightGifImg.height * (rightGifWidth / rightGifImg.width);  

  image(leftGifImg, -100, height - leftGifHeight, leftGifWidth, leftGifHeight);  
 
  isHoveringOverPhone = mouseX > width - rightGifWidth + 100 && mouseX < width - 100 && mouseY > height - rightGifHeight && mouseY < height;

  image(rightGifImg, width - rightGifWidth + 100, height - rightGifHeight, rightGifWidth, rightGifHeight);  

  let timeString = nf(hours, 2) + ":" + nf(minutes, 2);
  textSize(32);
  fill(255, 0, 0);  
  textAlign(CENTER, CENTER);
  text(timeString, width / 2, 50);  
}