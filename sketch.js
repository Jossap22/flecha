
//Declare a variável para PLAY e END
var play=1

var end=2
//inicialize o valor para a variável
//Atribua o valor de gameState como PLAY
gameState=play;

gameState=end;

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score = 0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
 redB= new Group();

 greenB= new Group();

 pinkB= new Group();

 blueB=new Group();
 
  arrowGroup= new Group();

  
}

function draw() {
 background(0);
//Adicione a condição para gameState = PLAY
if(keyDown("space")){
  gameState=play;
}

  // solo em movimento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco em movimento
  bow.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }

  
  //criando inimigos continuamente
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    switch(select_balloon ){
      case 1: redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon();
      break;
      default:break;
    }
  }

  if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();

    


}

if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();

  

}

if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();

   

}

if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  
}



 //escreva uma condição para o estado END
  if (gameState=end){

    arrowGroup.setVelocityX=0

    background.setVelocityX = 0

   
    text("Score:"+ score ,200,200)
  }
 //Adicione o código para destruir o arco
 if(redB.isTouching(bow)){
  bow.destroyEach;

  gameState=end;
}

if(pinkB.isTouching(bow)){
  bow.destroyEach;

  gameState=end;
}

if(greenB.isTouching(bow)){
  bow.destroyEach;

  gameState=end;
}

if(blueB.isTouching(bow)){
  bow.destroyEach;

  gameState=end;
}

 //defina a velocidade do fundo como 0
  

  drawSprites();
//Adicione a condição de texto para exibir a pontuação.
if(gameState=end){
  

}
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1

}

// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);

}
