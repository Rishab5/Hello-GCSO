var bullet,speed,wall,weight



function setup() {
  createCanvas(1600,400);

bullet=createSprite(50, 200, 50, 50);
bullet.shapeColor="white"
wall=createSprite(1500, 200, 60, height/2);
wall.shapeColor="brown"
speed=random(223,321)
weight=random(30,52)
thickness=random(22,83)
bullet.velocityX=speed
}

function draw() {
  background(0,0,0);
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness
    bullet.velocityX=0
    if(damage>10)
    {bullet.shapeColor="red"}
    
    if(damage<10){
      bullet.shapeColor="green"
    }
  }  
  drawSprites();
}