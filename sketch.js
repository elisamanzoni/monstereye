var myEye;

var pupil_x;
var pupil_y;

var angolo;
var angolo_x;
var angolo_y;
var r;

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);



  // myEye = new Eye(width/2, height/2);



  // put setup code here
}

function draw() {
  background('#89e709');

  for(var x = 150; x < width-150; x += 150)
   {
     for(var y = 150; y <height-150; y+=150)
	{
   myEye = new Eye(x, y);
     myEye.display();
   }
 }


    console.log(mouseX, mouseY);


  // put drawing code here
}

function Eye(_x, _y) {
  this.x = _x;
  this.y = _y;

  this.display = function() {
  ellipseMode(CENTER);
  noStroke();

	fill('white');
	ellipse(this.x, this.y, 100);

  angolo = atan2(mouseY - this.y, mouseX - this.x);
  r = 25;

  angolo_x = this.x + cos(angolo)*r;
  angolo_y = this.y + sin(angolo)*r;

if (mouseX > this.x + r || mouseY > this.y + r || mouseY < this.y - r || mouseX < this.x - r ){
  pupil_x = angolo_x;
  pupil_y = angolo_y;
}
else{
  pupil_x = mouseX;
  pupil_y = mouseY;
}




  fill('black');
	ellipse(pupil_x, pupil_y, 40);
  }

}
