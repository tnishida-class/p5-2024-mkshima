// 最終課題を制作しよう

let balls;
const g = 1;
const friction = 0.7;
const vMax = 50;
const stopThreshold = 2;


function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    strokeWeight(1.5);
    fill(255, 255, 255, 160);
    ellipse(b.x, b.y - b.size / 2, b.size);
    b.x += b.vx;
    b.y += b.vy;
    b.vy += g;

    // 跳ね返る
    if(b.x < 0 || b.x > windowWidth){ 
      b.vx = -1 * b.vx; 
      b.x = constrain(b.x, 0, windowWidth); }
    if(b.y < 0 || b.y > windowHeight){ 
      b.vy = -0.7 * b.vy;
      b.y = constrain(b.y, 0, windowHeight); }

    // 床に接触している場合の摩擦と速度減少
    if(b.y >= windowHeight - 1){
      b.vx *= friction;
      b.vy *= friction;    

     // 小さな速度はゼロに設定
    if(abs(b.vx) < stopThreshold) b.vx = 0;
    if(abs(b.vy) < stopThreshold) b.vy = 0;
    
    b.vx = constrain(b.vx, -vMax, vMax);
    b.vy = constrain(b.vy, -vMax, vMax);

  }
 }
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: random(10, 200), vx: dx, vy: dy + random(-1, 1) };
    balls.push(b);
  }
}

function doubleClicked(){
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    b.vx = random(-50, 50);
    b.vy = random(20, 100);  
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}