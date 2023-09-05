var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zumbi,zumbiGroup, zumbiImg;
var zumbis = [];
var bullets = [];
var life, lifeImg1, lifeImg2, lifeImg3;
var bullet,bulletImg, bulletGroup ;
var life = 3;
let score = 0;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zumbiImg = loadAnimation("assets/zumbi.png", "assets/zumbi2.png","assets/zumbi3.png" );
  lifeImg1 = loadImage("assets/heart_1.png");
  lifeImg2 = loadImage("assets/heart_2.png");
  lifeImg3 = loadImage("assets/heart_3.png");
  bulletImg = loadImage("assets/bullet1.png");


  bgImg = loadImage("assets/bg.jpeg")

  zumbiGroup = createGroup();
  bulletGroup = createGroup();

  
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
 // bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  // bg.addImage(bgImg)
  // bg.scale = 1.1
  

//criando o sprite do jogador
  player = createSprite(displayWidth-1450, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.3
 
  player.debug = true
  //player.debug = false
  //player.Debug =false
  //Player.debug = true

  //player.Collider("rectagle",0,0,300,300)
  //player.setcollider("rectangle",0,0)
  player.setCollider("rectangle",0,0,300,300);
  //player.Setcollider("rectangle",0,0,300,300)

 
  

  life = createSprite(displayWidth-600, displayHeight-1000, 50, 50);
  life.addImage( lifeImg3 );
  life.scale =0.4;

  
  

}

function draw() {
 // background(0); 
   image(bgImg,0,0,windowWidth,windowHeight);

 


  if(keyWentDown("space")){
  
    player.addImage(shooter_shooting)
  
  }

  else if(keyDown("space")){
  player.addImage( shooter_shooting )
  
  }
   if(keyDown("D")){
     shootBullet();
   }

  //  if(bulletGroup.isTouching(zumbiGroup)){
  //    score += 1;
    



  // }
  
  //createZombies();

  // for(var i = 0; i < zumbis.length; i++){
  //   for(var j = 0; j < bullets.length; i++){
                        
  //   }



  // }

  if(frameCount %70 === 0){
    zumbiGroup = createSprite(windowWidth-10, player.y, 50, 50);
    zumbiGroup.addAnimation("zumbi",zumbiImg);
    zumbiGroup.scale=0.7;
    zumbiGroup.velocityX = -3;
  }
  
  for (let i = zumbis.length - 1; i >= 0; i--) {
    let zumbiGroup = zumbis[i];
   // fill(0, 255, 0);
    //rect(zumbiGroup.x, zumbiGroup.y, zumbiGroup.width, zumbiGroup.height);
    
    // Detectar colisão
    if (collideRectCircle(zumbiGroup.x, zumbiGroup.y, zumbiGroup.width, zumbiGroup.height,
                          bullet.x, bullet.y, bullet.width, bullet.height)) {
      // Colisão detectada
      zumbis.splice(i, 1);
    }
    
    // Mover o zumbi para a esquerda
    // zumbiGroup.x -= 7;
    
    // // Remover zumbis fora da tela
     if (zumbiGroup.x + zumbiGroup.width < 0) {
      zumbis.splice(i, 1);
     }
  }
  if(zumbiGroup.collide(player)){
    life -=1
    life.changeImage(lifeImg2 || lifeImg1);
  }
  
  if(life = 0){
    zumbiGroup.velocityX = 0;
    zumbis.destroyEach();


  }



drawSprites();

}



 function shootBullet(){
   bullet= createSprite(player.x+45, player.y-5, 50,20);
   bullet.y = bullet.y-20;
    bullet.addImage(bulletImg);
   bullet.scale=0.05;
   bullet.velocityX= 5;
   bullets.push(bullet)
 }





// function createZombies(){
  
  //  if(frameCount %70 === 0){
  //    zumbiGroup = createSprite(windowWidth-10, player.y, 50, 50);
//     zumbiGroup.addAnimation("zumbi",zumbiImg);
//     zumbiGroup.scale=0.7;
//     zumbiGroup.velocityX = -3; 
//     zumbis.push(zumbiGroup);

//   }
  


