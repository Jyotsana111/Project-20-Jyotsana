var car,wall,speed,weight;
function setup(){
  createCanvas(1600,400);
  car = createSprite(50,200,50,50); 
  car.shapeColor = "white";
  car.velocityX = random(55,90);
  wall = createSprite(1500,200,60,height/2); 
  speed = random(55,90); 
  weight  = random(400,1500)
}
function draw(){
  background("black");
  if(wall.x-car.x< wall.width/2 + car.width/2){
    car .velocityX = 0;
    deformation  = 0.5*width*speed*speed/22509;
    if(deformation>100){
      car.shapeColor = "green"
    }
    if(deformation<180){
      car.shapeColor = "red"
    }
    if(deformation<100 && deformation>180){
      car.shapeColor = "yellow";
    }
  }













  drawSprites();}