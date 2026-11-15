// Cars, then Frogger — built from scratch, one stage at a time, in this  

 

// same file. See README.md in this folder for the current stage's task,  

 

// then commit before moving on to the next stage.  


 

class Car{  
    constructor(x, y, width, height,  col1, col2, col3, vx, vy) {  
        this.x = x;  
        this.y = y;  
        this.width = width;  
        this.height = height;     
        this.vx = vx;
        this.vy = vy;
        //Mycolours
        this.wheelcol = col1;
        this.carwindowcol = col2;
        this.bodycol = col3;

       //body   
        this.bodywidth = width / 4;
        this.bodyheight = height / 4;
        

        //wheel
        this.wheelwidth = width / 4;
        this.wheelheight = height / 4;

        //window
        this.windowwidth = width / 4;
        this.windowheight = height / 4;
        this.offsetX = width / 4;

        //parts of the car
        this.body =  new CarBody(this.x, this.y, this.bodywidth, this.bodyheight, this.bodycol) 
        this.wheel1 = new CarWheel(this.x + this.offsetX, this.y + this.offsetY, this.wheelwidth, this.wheelheight, this.wheelcol)
        this.wheel2 = new CarWheel(this.x + this.offsetX, this.y + this.offsetY, this.wheelwidth, this.wheelheight, this.wheelcol)
        this.window = new CarWindow(this.x + this.offsetX, this.y - this.offsetY, this.windowwidth, this.windowheight, this.carwindowcol)

 

    }; 

    move() {  
        this.x += this.vx;
        this.y += this.vy;
        // this.x = (this.x + this.vx + width) % width;  
        // this.y = (this.y + this.vy + height) % height;  

    };  
    updatedParts() {
        this.body.update(this.x, this.y);
        this.wheel1.update(this.x + this.offsetX, this.y + this.offsetY);
        this.wheel2.update(this.x + this.offsetX, this.y + this.offsetY);
        this.window.update(this.x + this.offsetX, this.y - this.offsetY);
    }
    reset() {
        this.x = this.startX;
        this.y = this.startY;
        this.updatedParts();

    }

 

    display() {  
        fill(this.col);  
        rect(this.x, this.y, this.width, this.height);  
        fill(this.col);
        rect(this.x + 50, this.y - 50, 20, 30);
         
    }    

      };  

 

  

 

  

 

let cars;  

 

function setup() { 
    createCanvas(640, 360);  
    background(230);  



 
 

 

  

 

    //  carcol = color(255, 50, 56, 255);  
    //  carwindowcol = color(59, 0, 255, 255);  
    //  wheelcol = color(25);  

 

     

 

//  bottomCar = (200, 200, 50, 50, carcol);  
//  carwindow = (250, 150, 20, 30, carwindowcol);  
//   wheel = (250, 50, 20, 40, wheelcol);  



 

 

  

 

    

 

      

 

  

 

    for (let i = 0; i < numLanes; i++) {
        let speedX = random(1, 5);
        if (random() < 0.5) {
            speedX *= speedX * -1;
        }
        let car = new Car(random(width), random(height), 50, 30, color(random(255), random(255), random(255)), color(random(255), random(255), random(255)), color(random(255), random(255), random(255)), speedX, 0);
        cars.push(car);


    }  

 

}  

 

      

 

      

 

    //  carwindow = {  

 

    //     x: 250,  

 

    //     y: 150,  

 

    //     width: 20,  

 

    //     height: 30,  

 

    //     carwindowcol: carwindowcol  

 

    // };  

 

    // wheel = {  

 

    //     x: 250,  

 

    //     y: 50,  

 

    //     width: 20,  

 

    //     height: 40,  

 

    //     wheelcol: wheelcol  

 

    // };  

 

  

 

  

 

  

 

function draw() {  

 

}  

 

function mousePressed() {  

 

} 

 