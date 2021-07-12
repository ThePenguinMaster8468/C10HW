var ship, shipMove;
var sea
var seaImg 

function preload(){
  shipMove = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,20,2);
  sea.addImage("Img",seaImg);
  sea.scale = 0.4;
  sea.velocityX = -2;

  ship = createSprite(200,200,2,2);
  ship.addAnimation("move",shipMove);
  ship.scale = 0.2;
  
}

function draw() {
  background("blue");

  if(sea.x<0){
    sea.x = sea.width/8;
  }
  
 drawSprites();
}