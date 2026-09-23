// House — built from scratch, one stage at a time, in this same file.
// See README.md in this folder for the current stage's task, then commit
// before moving on to the next stage.

function setup() {
    createCanvas(900, 500);

    background(100, 200, 200, 255);

    console.log(mouseX, mouseY);

    noStroke();
    //base of the house 
    fill(243, 229, 171, 255);
    rect(350, 200, 200, 200);
    //this triangle is the roof of the house
    fill(98, 52, 18, 255);
    triangle(350, 200, 450, 100, 550, 200);
    //this rectangle is the door of the house 
    fill(98, 52, 18, 255);
    rect(mouseX,  100);
    // the doorknob of the house
    fill(240, 200, 18, 255);
    circle(400, 350, 20, 10);
   //this rectangle is the window 
    fill(100, 200, 200, 255);
    rect(460, 220, 50, 50);




}

function draw() {
}
