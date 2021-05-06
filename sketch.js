var bgImg,bg
var monkey1,monkey2,monkey3,banana
var monkey1Img,monkey2Img,monkey3Img,bananaImg
var restart, restartImg
var gameover, gameoverImg
var tg
var won,wonImg
var triangleImg,triangle2Img
var gamestate = "play" 

function preload() {
bgImg = loadImage("images/bg.jpg")
monkey1Img = loadImage("images/Monkey1.png")
monkey2Img = loadImage("images/Monkey2.png")
monkey3Img = loadImage("images/Monkey3.png")
bananaImg  = loadImage("images/banana.png")
restartImg = loadImage("images/replay.png")
gameoverImg = loadImage("images/gameOver.png")
triangleImg = loadImage("images/triangle.png")
wonImg = loadImage("images/won.png")
}
function setup() {
  createCanvas(1350,640);
  bg = createSprite(675,320,1350,640)
  bg.addImage(bgImg)
  bg.scale=0.5
 
  
  monkey1 = createSprite(50,295,100,150) 
  monkey1.addImage(monkey1Img)
  monkey1.scale=0.7

  banana = createSprite(1290,176,30,30)
  banana.addImage(bananaImg)
  banana.scale = 0.09
  
  stand = createSprite(0,390,200,60) 
  stand2 = createSprite(323,400,90,550) 
  stand3 = createSprite (553,100,90,400)
  stand4 = createSprite (770,480,90,680)
  stand5 = createSprite (1000,190,90,550)
  stand6 = createSprite (1290,232,200,60)
  
  tg = createGroup ()

  won = createSprite(685,300,20,50)
  won.addImage(wonImg)
  
  gameover=createSprite(685,300,20,50)
  gameover.addImage(gameoverImg)
  gameover.scale=0.8
  restart=createSprite(675,430,10,40)
  restart.addImage(restartImg)
  restart.scale=0.2
  won.visible=false
  gameover.visible=false
  restart.visible=false
}

function draw() {
  background(220);

if(gamestate == "play"){
                              
                                if(keyDown(LEFT_ARROW)){
                                     monkey1.velocityX=-2;
                                     monkey1.velocityY=0;
                                     monkey1.addImage(monkey2Img)
                                }
                                else if(keyDown(RIGHT_ARROW)){    
                                     monkey1.velocityX=3;
                                     monkey1.velocityY=0;
                                     monkey1.addImage(monkey2Img)
                                } 
                                else if(keyDown(UP_ARROW)){      
                                     monkey1.velocityX = 0;
                                     monkey1.velocityY = -2;
                                     monkey1.addImage(monkey2Img)
                                }
                               else if(keyDown(DOWN_ARROW)){
                                    monkey1.velocityX=0;
                                    monkey1.velocityY=3;
                                    monkey1.addImage(monkey2Img)
                                }
                               if (monkey1.isTouching(banana)){
                                   monkey1.addImage(monkey3Img)
                                   monkey1.velocityY=0
                                   monkey1.velocityX=0
                               }
                               if (monkey1.isTouching(stand2)){
                                 gamestate = "end" 
                                }
                               if (monkey1.isTouching(stand3)){
                                 gamestate = "end" 
                                }
                               if (monkey1.isTouching(stand4)){
                                 gamestate = "end" 
                                }
                               if (monkey1.isTouching(stand5)){
                                 gamestate = "end" 
                                }
                               if (monkey1.isTouching(tg)){
                                 gamestate = "end" 
                                }
                               if (monkey1.isTouching(banana)){
                                 won.visible=true
                                }
  
                                 
                             Triangle()

}
   
  if(gamestate == "end" ){

                                  stand.destroy()
                                  stand2.destroy()
                                  stand3.destroy()
                                  stand4.destroy()
                                  stand5.destroy()
                                  stand6.destroy()
                                  monkey1.destroy()
                                  banana.destroy()
                                  tg.destroyEach()
                                  gameover.visible=true
                                  restart.visible=true
                                  if(mousePressedOver(restart)){
                                     gamestate="restart"
                                  }
        }
if(gamestate == "restart"){
                            monkey1 = createSprite(50,295,100,150) 
                            monkey1.addImage(monkey1Img)
                            monkey1.scale=0.7

                            banana = createSprite(1290,176,30,30)
                            banana.addImage(bananaImg)
                            banana.scale = 0.09
  
                           stand = createSprite(0,390,200,60) 
                           stand2 = createSprite(323,400,90,550) 
                           stand3 = createSprite (553,100,90,400)
                           stand4 = createSprite (770,480,90,680)
                           stand5 = createSprite (1000,190,90,550)
                           stand6 = createSprite (1290,232,200,60)
                           gameover.visible=false
                           restart.visible=false
                           gamestate="play"
  }
  textSize(20);
  fill("white");
  drawSprites()

}
function Triangle() {
  if (frameCount % 60 === 0) {
    var a=random(1000,350)
    t = createSprite(a,130,40,10);
    t.addImage(triangleImg)
    t.y = Math.round(random(580,1080))
    t.scale = 0.09;
    t.velocityY = -(3 + frameCount/1200)
    monkey1.depth=t.depth
    monkey1.depth=monkey1.depth+1
    t.lifetime=200
    tg.add(t)
 

    }
}





