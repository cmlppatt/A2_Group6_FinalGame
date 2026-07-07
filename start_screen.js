function drawStartScreen() {
  imageMode(CORNER);
  image(startBg, 0, 0, width, height);

  textFont(gameFont);
  stroke(10, 15, 54);
  strokeWeight(14);
  textAlign(CENTER);
  textSize(120);

  fill(235, 132, 30);
  text("Escape", width / 2, height / 2 - 148);

  fill(245, 155, 66);  
  text("Avalanche", width / 2, height / 2 - 230);

  drawButton("Start", width/2, 400, 320, 64, startBtnPressed);

  animateUpTest();
  drawUpAnimation(420, 470);
}

