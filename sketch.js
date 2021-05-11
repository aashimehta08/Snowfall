const Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine, world;
var bgImg;
var sled,sledImg;
var dog,dogImg;
var sf = [];
var sf2 = [];

function preload(){
 bgImg = loadImage("snow1.jpg");
 sledImg = loadImage("sled.png");
 dogImg= loadImage("dog.png");
}

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;

  sled = createSprite(150, 420, 50, 50);
  sled.addImage(sledImg);
  sled.scale = 0.5;
  sled.velocityX = 6;

  dog = createSprite(150,310,50,50);
  dog.addImage(dogImg);
  dog.scale = 0.5;
  dog.velocityX = sled.velocityX;
}

function draw() {
  background(bgImg);  
  Engine.update(engine);
  drawSprites();

  if(sled.x>870 && dog.x>870){
    sled.x = 0;
    dog.x = 0;
  }
  if(frameCount%60==0){
    sf.push(new Snow(random(100,700),0,50));
  }

  for (var i = 0; i < sf.length; i++) {
    sf[i].display();
  }

  if(frameCount%60==0){
    sf2.push(new Snow2(random(100,700),0,40));
  }
  for (var i = 0; i < sf2.length; i++) {
    sf2[i].display();
  }

}