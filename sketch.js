//Create two variables that will store the new objects from the class Circle
let circleArray = [];
let arraySize = 1000;

function setup() {
  createCanvas(500, 500);
  for (let i=0; i<arraySize; i++){
    circleArray[i] = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), 250, 250);
  }
}

function draw() {
  background(0);
  for (let i=0; i<circleArray.length; i++){
    circleArray[i].moveFunction();
    circleArray[i].displayCircle();
  }
}

//Definition of the class Circle
class Circle{

  constructor(x, y, speedX, speedY, size){
    //Setup of class' variables
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;

    this.rd = random(255);
    this.grn = random(255);
    this.bl = random(255);
    this.a = 255;
  }

  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - current position and speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;

    //Based on boundaries collision, reverse direction for x and y
    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
  }

  //Class function that displays the ellipse
  displayCircle(){
strokeWeight(0.5);
stroke(0);
    this.fillcol = color(this.rd, this.grn, this.bl, this.a)
    fill(this.fillcol);
    line(this.x, this.y, 255, 255);
    stroke(50,205,50);
        line(this.x, this.y, 255,255);
        stroke(150,205,0);
            line(this.x, this.y, 254,254);
        fill(255,255,0);
        if (mouseIsPressed)
          fill(0,255,0);
          ellipse (this.x,this.y,5,5);
  }
}
