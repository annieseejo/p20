var bgImg;
var cat;
var mouse;

function preload() {
 //load the images here
bgImg=loadImage("images/garden.png");
catImg1=loadImage("images/cat1.png");
mouseImg1=loadImage("images/mouse1.png");
catImg2=loadImage("images/cat2.png","images/cat3.png");
mouseImg2=loadImage("images/mouse2.png","images/mouse3.png")
mouseImg3=loadImage("images/mouse4.png");
catImg3=loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat=createSprite(870,600);
   cat.addAnimation("catsleeping",catImg1);
   cat.scale=0.2;
   mouse=createSprite(200,600);
   mouse.addAnimation("mouseteasing",mouseImg1);
  mouse.scale=0.2;
  }

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x < (cat.width-mouse.width)/2 ){
        cat.velocityX=0;
        cat.addAnimation("catRunning",catImg3);
        cat.changeAnimation("catRunning");
        cat.scale=0.2;

        mouse.addAnimation("mouselastimage",mouseImg3);
        mouse.changeAnimation("mouselastimage");
        mouse.scale=0.2;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 
  if(keyCode === LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catrunning", catImg2);
    cat.changeAnimation("catrunning");
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;

}
}