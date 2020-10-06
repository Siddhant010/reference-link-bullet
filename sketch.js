var bullet;
var speed, weight;
var testingState;
var start, wait, finished;
var damage;
var invSprite;
var thickness;
var wall;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(20, 200, 20, 5);

  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, height/2);

  invSprite = createSprite(400, 200, 30, 30);

  speed = random(223, 321);
  weight = random(30, 52);

  start = 0;
  wait = 1;
  finished = 2;

  testingState = start;

  damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
  
}

function draw() {
  
  background(175, 238, 238);
  
  if(testingState === start){

    invSprite.visible = false;

    if(keyDown("space")){
      bullet.velocityX = speed;
      testingState = wait;
    }

  } else if(testingState === wait){

    invSprite.visible = false;

    text("Kindly Wait for your Result", 800, 20);

    if(wall.x - bullet.x <= bullet.width/2 + wall.width/2
      && bullet.x - wall.x <= bullet.width/2 + bullet.width/2){
      testingState = finished;
    }

  } else if(testingState === finished){

    text("Your Result: "+damage, 600, 200); 

    invSprite.visible = true;

    bullet.velocityX = 0;

    if(damage>10){
      invSprite.shapeColor = color(25,225,25);
    }

    if(damage<10){
      invSprite.shapeColor = color(225, 0, 0);
    }
    
    wall.visible = false;
    bullet.visible = false; 

  }
  
  drawSprites();

}