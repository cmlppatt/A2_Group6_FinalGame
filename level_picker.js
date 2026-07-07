let levelShake = [0, 0, 0];
const PANEL_CLOSED_X = 1600;
const PANEL_OPEN_X   = 700;
const PANEL_SPEED    = 0.35;
let levelPanels = [
  { title: "Rocky Range", starScore: "--", recordTime: "...", x: PANEL_CLOSED_X, targetX: PANEL_CLOSED_X },
  { title: "Frozen Fissures", starScore: "--", recordTime: "...", x: PANEL_CLOSED_X, targetX: PANEL_CLOSED_X },
  { title: "Ram Ridge", starScore: "--", recordTime: "...", x: PANEL_CLOSED_X, targetX: PANEL_CLOSED_X }
];

let activePanelIndex = -1;
let nextPanelIndex = -1;
let isClosingPanel = false;
let playBtnPressed = [false, false, false];

function drawLevelPickerScreen() {
    cursor(ARROW);
    image(levelPickerBg, 0, 0, width, height);

    textFont(gameFont);
    textAlign(CENTER);
    fill(255);
    stroke(10, 15, 54);
    strokeWeight(8);
    textSize(48);
    text("Select a Level", width / 2, 80);

    let cx1 = 570, cy1 = 155;
    let cx2 = 565, cy2 = 395;
    let cx3 = 531, cy3 = 622;

    let diameter = 73;
    let radius = diameter / 2;

    drawLevelCircle(cx1, cy1, radius, true, 0);
    drawLevelCircle(cx2, cy2, radius, level1Complete, 1);
    drawLevelCircle(cx3, cy3, radius, level2Complete, 2);
    
    for (let i = 0; i < levelPanels.length; i++) {
        let key = "level" + (i + 1);   // level1, level2, level3
        levelPanels[i].recordTime = formatTime(fastestTimes[key]);
    }

    for (let i = 0; i < levelPanels.length; i++) {
        // decide target based on state
        if (isClosingPanel && i === activePanelIndex) {
            levelPanels[i].targetX = PANEL_CLOSED_X;   // force current to close
        } else if (i === activePanelIndex) {
            levelPanels[i].targetX = PANEL_OPEN_X;     // open active
        } else {
            levelPanels[i].targetX = PANEL_CLOSED_X;   // others closed
        }
        let dx = levelPanels[i].targetX - levelPanels[i].x;
        let step = 50; // adjust to taste

        if (Math.abs(dx) < step) {
            levelPanels[i].x = levelPanels[i].targetX;
        } else {
            levelPanels[i].x += Math.sign(dx) * step;
        }
        drawInfoPanel(i);
    }

    // after movement, check if closing finished
    if (isClosingPanel && activePanelIndex !== -1) {
        let panel = levelPanels[activePanelIndex];
        if (Math.abs(panel.x - PANEL_CLOSED_X) < 1) {
            // fully closed → switch to next panel
            activePanelIndex = nextPanelIndex;
            nextPanelIndex = -1;
            isClosingPanel = false;
        }
    }
}

function drawLevelCircle(cx, cy, radius, unlocked, index) {
  let d = dist(mouseX, mouseY, cx, cy);
  let hovered = d < radius;

  let shakeOffset = 0;
  if (!unlocked && levelShake[index] > 0) {
    shakeOffset = sin(frameCount * 0.5) * 5;
    levelShake[index]--;
  }

  noStroke();
  noFill();
  circle(cx + shakeOffset, cy, radius * 2);

  if (hovered && unlocked) {
    cursor(HAND);
  }

  if (!unlocked) {
    noStroke();
    image(lock_icon, cx - 40 + shakeOffset - 25, cy - 40, 180, 140);
  }

  // --- CHECKMARK FOR COMPLETED LEVELS ---
  let levelKey = "level" + (index + 1);
  if (bestStars[levelKey] >= 1)  {
      // Draw checkmark slightly to the right of the circle
      let checkX = cx + radius - 42;
      let checkY = cy - radius + 25;
      image(check_icon, checkX, checkY, 70, 70);
  }
}

function drawInfoPanel(index) {
    let panel = levelPanels[index];
    let x = panel.x;
    let y = 175;
    const PANEL_W = 500;
    const PANEL_H = 500;

    image(info_box, x, y, PANEL_W, PANEL_H);

    let centerX = x + PANEL_W / 2;
    fill(255);
    noStroke();
    textFont(gameFont);
    textAlign(CENTER, CENTER);

    textSize(28);
    text(panel.title, centerX, y + 80);

    textSize(16);
    text("Level " + (index+1), centerX, y + 110);

    // --- DRAW STARS ---
    let startX = x + 108;     // horizontal starting point
    let starY  = y + 130;     // vertical base position
    let starW  = 120;
    let starH  = 120;     
    const drawOrder = [0, 2, 1];

    for (let i = 0; i < 3; i++) {
        let starIndex = drawOrder[i];   // remap logical star index

        let sx = startX + i * 82;
        let yOffset = (i === 1) ? -10 : 0; // middle star visually higher

        if (starIndex < bestStars["level" + (index + 1)]) {
            image(starFilledImg, sx, starY + yOffset, starW, starH);
        } else {
            image(starOutlineImg, sx, starY + yOffset, starW, starH);
        }
    }


    // --- DRAW FASTEST TIME ---
    let key = "level" + (index + 1);
    let fastest = fastestTimes[key];
    let fastestText = (fastest === null)
      ? "--:--"
      : floor(fastest / 60) + ":" + nf(fastest % 60, 2);

    // store into panel so your existing text() calls work
    panel.recordTime = fastestText;
    textSize(20);
    text("Fastest Descent:", centerX, y + 260);
    textSize(36);
    text(panel.recordTime, centerX, y + 310);

    let btnX = x + PANEL_W/2;
    let btnY = y + PANEL_H - 100;

    // get hover from ENTER button
    let hovered = drawButton("ENTER", btnX, btnY, 220, 60, playBtnPressed[index]);

    // store hover if you need it later
    levelPanels[index].playHover = hovered;

    // 🔹 make cursor a pointer when ENTER is hovered
    if (hovered) {
      cursor(HAND);
    }
}

function handleLevelPickerClick() {
  let cx = [570, 565, 531];
  let cy = [158, 405, 640];
  let radius = 73 / 2;

  for (let i = 0; i < 3; i++) {
    let unlocked = (i === 0) ? true
                  : (i === 1) ? level1Complete
                  : level2Complete;

    let d = dist(mouseX, mouseY, cx[i], cy[i]);
    if (d < radius) {

      if (!unlocked) {
        levelShake[i] = 10;
        activePanelIndex = -1;
        isClosingPanel = false;
        nextPanelIndex = -1;
        return;
      }

      if (activePanelIndex === i) {
        activePanelIndex = -1;
        isClosingPanel = false;
        nextPanelIndex = -1;
        return;
      }

      if (activePanelIndex !== -1 && activePanelIndex !== i) {
        isClosingPanel = true;
        nextPanelIndex = i;
        return;
      }

      activePanelIndex = i;
      isClosingPanel = false;
      nextPanelIndex = -1;
      return;
    }
  }
}

function startLevel(index) {
    currentLevel = index + 1;   // 0→1, 1→2, 2→3
    if (index === 0) {
        randomizeFishPosition();
        startLevel1();
    } else if (index === 1) {
        placeholderLevel(2);
    } else if (index === 2) {
        placeholderLevel(3);
    }
}

function placeholderLevel(num) { //temporary for A2
    console.log("Level " + num + " is not implemented yet!");
    alert("Level " + num + " is not implemented yet!");
}

function startLevel1() {
    resetGame();          // resets timer, penguin, stomp, etc.
    gameState = "tutorial";
    tutorialActive = true;
    tutorialAlpha = 0;
    tutorialIndex = 0;
    tutorialDelay = tutorialSteps[0].delay;
}


// For fastest times
function formatTime(t) {
    if (t === null) return "--:--";
    let minutes = floor(t / 60);
    let seconds = t % 60;
    return minutes + ":" + nf(seconds, 2);
}









