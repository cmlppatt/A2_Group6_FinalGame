function drawWinScreen() {
  image(winBg, 0, 0, width, height);

  textFont(gameFont);
  textAlign(CENTER);
  stroke(10, 15, 54);
  strokeWeight(8);

  let minutes = floor(finalTime / 60);
  let seconds = finalTime % 60;
  let timeText = minutes + ":" + nf(seconds, 2);

  fill(255);
  textSize(36);
  text("Current Time: " + timeText, width / 2, height / 2 - 20);

  let key = "level" + currentLevel;
  let fastestLabel = fastestTimesIsNew[key]
    ? "NEW fastest time: "
    : "Fastest time: ";

  let fastestText = fastestTimes[key] === null
    ? "--:--"
    : floor(fastestTimes[key] / 60) + ":" + nf(fastestTimes[key] % 60, 2);
  text(fastestLabel + fastestText, width / 2, height / 2 + 40);

  let anyHover = false;
  anyHover = drawButton("Level Picker", width/2, height*0.90, 320, 56, levelPickerBtnPressed) || anyHover;
  cursor(anyHover ? HAND : ARROW);
}