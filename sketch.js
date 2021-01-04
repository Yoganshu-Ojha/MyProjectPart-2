var backgroundSprite;
var player , PlayerRunning;
var backgroundImg;
var apple ,appleImage, obstacle, obstacleImage,doughnut,doughnutImage;
var obstacleImage2,obstacleImage3;
var obstacle2,obstacle3;
var FoodGroup, obstacleGroup, collide;
var score = 0;
var background_image;
var gamestate = 1;

function preload(){
  
  
  PlayerRunning =loadImage("Images/download (4).png");
  backgroundImg = loadImage("Images/background.png");
  
  appleImage = loadImage("Images/image.png");
  doughnutImage = loadImage("Images/images.png");
  obstacleImage = loadImage("Images/download(2).png");
  obstacleImage2 = loadImage("Images/download(3).png");
  obstacleImage3 = loadImage("Images/download.png");
 
}



function setup() {
  
  createCanvas(displayWidth, displayHeight-75);
  
  backgroundSprite = createSprite(displayWidth/2, displayHeight/2,displayWidth,displayHeight);
  backgroundSprite.addImage(backgroundImg);
  backgroundSprite.scale = 3;

  player = createSprite(100,385,30,30);
  player.addAnimation("running",PlayerRunning);
  player.debug = true;
  
  ground = createSprite(displayWidth/2,displayHeight-150,3*displayWidth,20);
  ground.velocityX=-4;
  ground.shapeColor = "green";
  
  obstacleGroup=new Group ();
  FoodGroup=new Group();
}


function draw() {
  background("red");
  if(gamestate == 1){
    if (ground.x<-200) {
      ground.x=500; 
    }
    player.velocityY=player.velocityY+0.5;
    if( keyDown("space")&& player.y>height-187) {
      player.velocityY=-15; 
    }
    if(player.isTouching(FoodGroup)) {
      score = score + 1;
      for(var i=0;i<FoodGroup.length;i++) {
        if(FoodGroup.get(i))
    }
    if(player.isTouching(obstacleGroup)) {
      //obstacleGroup.setVelocityXEach(0);
      //FoodGroup.setVelocityXEach(0);
      gamestate = 0;
    }
    Obstacles();
  
    food();
  }else if(gamestate == 0){
    console.log("Game Has Ended!");
    player.velocityY = 0;
  }
  player.collide(ground);
  fill("green");
  textSize(30);
  text("Score : "+score,displayWidth/2-50,50);
  drawSprites();

}

function Obstacles(){
  if(frameCount%400==0) {
   
  obstacle=createSprite(displayWidth,displayHeight-200,20,60);
  obstacle.velocityX=-9;
  obstacle.addImage(obstacleImage);
  obstacle.scale=1;                  
  console.log(obstacle.x);
  obstacle.setCollider("rectangle",0,0,360,360);
  obstacle.debug=true;
  obstacle.setCollider("rectangle",0,0,200,obstacle.height);
  obstacleGroup.setLifetimeEach(380);  
    
  obstacle.velocityX = obstacle.velocityX+ (-1);  
    
    obstacleGroup.add(obstacle);
  
  }
}

function food(){
  if(frameCount%220==0) {
   
  apple=createSprite(displayWidth,displayHeight-500,20,60);
  apple.velocityX=-3;
  apple.addImage(appleImage);
  apple.scale=0.5;
  apple.setCollider("rectangle",0,0,90,90);
  apple.debug=true;
    
  apple.velocityX = -9;
  
  food.velocityX = food.velocityX+ (-1);
    
    FoodGroup.add(apple);
  
  }
}