var bgImage,capsuleImage, capsuleThrustImage, capsuleLThrustImage, capsuleRThrustImage, ISSImage;
var DragonCapsule, ISS;
var hasDocked = false, v = 0;

function preload() {
  bgImage = loadImage("spacebg.jpg");
  capsuleImage = loadImage("spacecraft1.png");
  capsuleThrustImage = loadImage("spacecraft2.png");
  capsuleLThrustImage = loadImage("spacecraft3.png");
  capsuleRThrustImage = loadImage("spacecraft4.png");
  ISSImage = loadImage("iss.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ISS = createSprite(width/2,height/2, 50, 50);
  ISS.addImage(ISSImage);

  DragonCapsule = createSprite(width/2+500, height/2+ height/4);
  DragonCapsule.addImage(capsuleImage);
  DragonCapsule.scale= 0.2;
}

function draw() {
  background(bgImage);

  DragonCapsule.addImage(capsuleImage);

  if(!hasDocked) {
    DragonCapsule.x = DragonCapsule.x+ random(-1, 1);

  }
  
  if(keyIsDown(LEFT_ARROW)) {
    
    v = v-0.5;
    DragonCapsule.addImage(capsuleLThrustImage);
    DragonCapsule.velocityX = v;

  }
  if(keyIsDown(RIGHT_ARROW)) {
    
    v = v+0.5;
    DragonCapsule.addImage(capsuleRThrustImage);
    DragonCapsule.velocityX = v;

  }
  if(keyIsDown(UP_ARROW)) {
    
    v = v-0.5;
    DragonCapsule.addImage(capsuleThrustImage);
    DragonCapsule.velocityY = v;

  }

  if(DragonCapsule.y <=(ISS.y+68)&&DragonCapsule.x <=(ISS.x-30)){
    hasDocked = true;
    DragonCapsule.setVelocity(0,0);
    fill("white");
    text("Docking successful", width/2- width/4, height/2+height/4);

  }
  
  drawSprites();
}

