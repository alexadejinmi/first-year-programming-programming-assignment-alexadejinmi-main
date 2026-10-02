// House — built from scratch, one stage at a time, in this same file.
// See README.md in this folder for the current stage's task, then commit
// before moving on to the next stage.

function setup() {
    createCanvas(900, 500);
    background(100, 200, 200);
}

function draw() {
}

function mousePressed() {
    noStroke();

    // Base of the house
    fill(243, 229, 171);
    rect(mouseX, mouseY, 200, 150);

    // Roof
    fill(98, 52, 18);
    triangle(
        mouseX,
        mouseY,
        mouseX + 100,
        mouseY - 100,
        mouseX + 200,
        mouseY
    );

    // Door
    fill(98, 52, 18);
    rect(
        mouseX + 75,
        mouseY + 50,
        50,
        100
    );

    // Doorknob
    fill(240, 200, 18);
    circle(
        mouseX + 90,
        mouseY + 100,
        10
    );

    // Window
    fill(100, 200, 200);
    rect(
        mouseX + 145,
        mouseY + 10,
        50,
        50
    );
}

function keyPressed() {
    background(100, 200, 200);
}

