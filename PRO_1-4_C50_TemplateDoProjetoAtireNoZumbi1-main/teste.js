

let zombies = [];
let bullet = {x: 150, y: 150, radius: 10};

function preload(){

    





}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Adicionar novo zumbi a cada 30 frames
  if (frameCount % 30 == 0) {
    let zombie = {x: width, y: random(height), width: 50, height: 100};
    zombies.push(zombie);
  }
  
  // Desenhar os zumbis
  for (let i = zombies.length - 1; i >= 0; i--) {
    let zombie = zombies[i];
    fill(0, 255, 0);
    rect(zombie.x, zombie.y, zombie.width, zombie.height);
    
    // Detectar colisão
    if (collideRectCircle(zombie.x, zombie.y, zombie.width, zombie.height,
                          bullet.x, bullet.y, bullet.radius * 2)) {
      // Colisão detectada
      zombies.splice(i, 1);
    }
    
    // Mover o zumbi para a esquerda
    zombie.x -= 1;
    
    // Remover zumbis fora da tela
    if (zombie.x + zombie.width < 0) {
      zombies.splice(i, 1);
    }
  }
  
  // Desenhar a bala
  fill(255, 0, 0);
  circle(bullet.x, bullet.y, bullet.radius * 2);
}
