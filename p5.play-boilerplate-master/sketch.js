var iss,spacecraft
var hasDocked=false
var issImg,spacecraftAnim,backgroundImg,spacecraftImg

function preload(){
backgroundImg=loadImage("spacebg.jpg")
issImg=loadImage("iss.png")
spacecraftImg=loadImage("Docking-undocking/spacecraft1.png")
}


function setup() {
  createCanvas(1200,800);
 iss= createSprite(400, 200, 50, 50);
 iss.addImage(issImg)

 spacecraft= createSprite(800,400,50,50)
 spacecraft.addImage(spacecraftImg)
 spacecraft.scale=0.2
  
}

function draw() {
  background(backgroundImg);
  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1 )
    if(keyDown("UP_ARROW")){
       spacecraft.velocityY=-2
    }
    else if(keyDown("DOWN_ARROW")){
      spacecraft.velocityY=2
    }
    else if(keyDown("LEFT_ARROW")){
      spacecraft.velocityX=-2
    }
    else if(keyDown("RIGHT_ARROW")){
      spacecraft.velocityX=2
    }
  }
    
  if(spacecraft.y<=iss.y && spacecraft.x<=iss.x){
    text("Docked Successfully",200,300)

    hasDocked=true;
    spacecraft.velocityY=0
    spacecraft.velocityX=0

  }

  
  drawSprites();
}