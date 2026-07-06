function drawStartScreen() {
  imageMode(CORNER);
  image(startBg, 0, 0, width, height);

  textFont(gameFont);
  stroke(10, 15, 54);
  strokeWeight(8);
  textAlign(CENTER);
  textSize(72);

  fill(235, 132, 30);
  text("the Mountains", width / 2, height / 2 - 108);

  fill(245, 155, 66);  
  text("Straight Towards", width / 2, height / 2 - 170);

  drawButton("Start", width/2, 400, 320, 64, startBtnPressed);

  animateUpTest();
  drawUpAnimation(420, 470);
}

