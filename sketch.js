//create variables
  var submarineImg,submarine,sharkImg,shark,sharkG
  var underwaterImg,underwater
  var diver1Img,diver1,diver2Img,diver2,diver1G,diver2G
  var explosionImg,explosion
  var diamondImg,diamond,diamondG


  var score = 0

function preload(){
    
 //load all images
   submarineImg = loadImage("Images/yellow_submarine.png");
   sharkImg = loadImage("Images/shark.png");
   underwaterImg = loadImage("Images/underwater.jpg.png");
   diver1Img = loadImage("Images/diver_1.png");
   diver2Img = loadImage("Images/diver_2.png");
   explosionImg = loadImage("Images/explosion.png")
   diamondImg = loadImage("Images/diamond.png");
}

function setup() {
 //set canvas size
  createCanvas(600,350);

 //add submarine and underwater scene image
  underwater = createSprite(350,175);
  submarine = createSprite(85,200);
  
 
   submarine.addImage(submarineImg);
   underwater.addImage(underwaterImg);
   
   underwater.scale = 1.45
   submarine.scale = 0.55

   

 }

function draw() {
 //set background
 background(0);

    //bounceOff conditions
      
      

 
    submarine.y = World.mouseY;

    if(frameCount % 330 == 0){
      spawnSharks();
    }
    
    if(frameCount % 200 == 0){
      spawnDiver1();
    }
    
    if(frameCount % 275 == 0){
      spawnDiver2();
    }

    if(frameCount % 1000 == 0){
      spawnDiamond();
    }

    

    //spawnSharks function
      function spawnSharks(){
       shark = createSprite(650,random(30,300));
       shark.addImage(sharkImg);
       sharkG = createGroup(shark);
       shark.velocityX = -4;
       sharkG.lifetime = 300;
       shark.scale = 0.4
      //Speed gets faster
       if(score % 5 === 0){
        sharkG.velocityX = sharkG.velocityX-2.75;
       }
       
      }

      function spawnDiver1(){
        diver1 = createSprite(650,random(30,300));
        diver1.addImage(diver1Img);
        diver1G = createGroup(diver1);
        diver1.velocityX = -3;
        diver1G.lifetime = 300;
        diver1.scale = 0.2
      //Speed gets faster
       if(score % 5 === 0){
         diver1G.velocityX = diver1G.velocityX-2.5;
       }
      }

      function spawnDiver2(){
        diver2 = createSprite(600,random(30,300));
        diver2.addImage(diver2Img);
        diver2G = createGroup(diver2);
        diver2.velocityX = -3;
        diver2G.lifetime = 300;
        diver2.scale = 0.2
      //Speed gets faster
       if(score % 5 === 0){
         diver2G.velocityX = diver2G.velocityX-2.5;
       }
      }
      
      if(sharkG.isTouching(submarine)){
        sharkG.velocityX = 0;
        submarine.y = sharkG.y;
        explosion = createSprite(submarine.x,submarine.y)
        explosion.addImage(explosionImg)
        explosion.scale = 0.3
      }
      
     drawSprites();
    }
   






 
