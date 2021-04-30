var bg,bgImage;
var wizard,wiz_image;
var bludger1,bludger2,bludger_img;
var quaffle,quaffle_img;
var snitch,snitch_img;
function preload(){

  wiz_image=loadImage("images/Harry_img.png")
  bgImage=loadImage("images/background.jpg")
  bludger_img=loadImage("images/bludger.png")
  quaffle_img=loadImage("images/quaffle.png")
  snitch_img=loadImage("images/snitch.png")
}
function setup() {
  createCanvas(800,600);
  wizard=createSprite(100, 280, 50, 50);
  wizard.addImage(wiz_image)
  wizard.scale=0.7

  bludger1=createSprite(280,250,40,40);
  bludger1.addImage(bludger_img)
  bludger1.scale=0.1
  bludger1.velocityY=11

  bludger2=createSprite(440,250,40,40);
  bludger2.addImage(bludger_img)
  bludger2.scale=0.1
  bludger2.velocityY=18

  quaffle=createSprite(600,250,40,40);
  quaffle.addImage(quaffle_img)
  quaffle.scale=0.14
  quaffle.velocityY=20

  snitch=createSprite(760,300,40,40);
  snitch.addImage(snitch_img)
  snitch.scale=0.3

  invinci1=createSprite(280,20,20,20);
  invinci1.visible=false;
  invinci2=createSprite(280,550,20,20);
  invinci2.visible=false;

  invinci3=createSprite(440,20,20,20);
  invinci3.visible=false;
  invinci4=createSprite(440,550,20,20);
  invinci4.visible=false;

  invinci5=createSprite(600,20,20,20);
  invinci5.visible=false;
  invinci6=createSprite(600,550,20,20);
  invinci6.visible=false;
}

function draw() {
  background(bgImage);  

  bludger1.bounceOff(invinci2)
  bludger1.bounceOff(invinci1)
  bludger2.bounceOff(invinci3)
  bludger2.bounceOff(invinci4)
  quaffle.bounceOff(invinci5)
  quaffle.bounceOff(invinci6)
  
  if(keyDown(37)){
    wizard.x=wizard.x-12
  }
  if(keyDown(39)){
    wizard.x=wizard.x+12
  }
  drawSprites();
}