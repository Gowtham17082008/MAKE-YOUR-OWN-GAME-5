var ball
var wall1
var wall2
var wall3
var wall4
var wall5
var wall6
var wall7
var wall8
var wall9
var wall10
var wall11
var wall12
var wall13
var wall14
var wall15
var wall16
var wall17
var wall18
var wall19
var wall20
var wall21
var wall22
var wall23
var wall24
var wall25
var wall26
var wall27
var wall28
var wall29
var wall30
var wall31
var wall32
var wall33
var wall34
var wall35


function  setup() {
  createCanvas(510,500);
  ball=createSprite(20,20,20,20);
  wall1=createSprite(60,20,10,80);
  wall2=createSprite(230,20,10,80);
  wall3=createSprite(50,250,100,10);
  wall4=createSprite(120,70,10,70);
  wall5=createSprite(100,250,10,100);
  wall6=createSprite(50,400,10,100);
  wall7=createSprite(50,500,150,10);
  wall8=createSprite(90,460,10,80);
  wall9=createSprite(100,100,250,10);
  wall10=createSprite(500,250,10,500);
  wall11=createSprite(50,150,100,10);
  wall12=createSprite(40,210,20,10);
  wall13=createSprite(50,180,10,70);
  wall14=createSprite(50,350,120,10);
  wall15=createSprite(190,150,10,100);
  wall16=createSprite(100,150,100,10);
  wall17=createSprite(190,200,100,10);
  wall18=createSprite(170,20,10,50);
  wall19=createSprite(350,450,10,80);
  wall20=createSprite(270,450,10,80);
  wall21=createSprite(200,450,10,80);
  wall22=createSprite(150,450,10,80);
  wall23=createSprite(420,450,10,80);
  wall24=createSprite(320,350,250,10);
  wall25=createSprite(250,260,10,80);
  wall26=createSprite(450,100,100,10);
  wall27=createSprite(400,80,10,100);
  wall28=createSprite(350,40,10,100);
  wall29=createSprite(350,180,10,80);
  wall30=createSprite(350,150,10,50);
  wall31=createSprite(425,220,155,10);
  wall32=createSprite(350,285,10,135);
  wall33=createSprite(2,250,10,500);
  wall34=createSprite(240,495,460,10);
  wall35=createSprite(250,2,490,10);

  var sofia2 = createSprite(480, 470,18,60);
sofia2.shapeColor ="orange"
}
function draw() {
  background("green");
 

  ball.bounceOff(wall1);
  ball.bounceOff(wall2);
  ball.bounceOff(wall3);
  ball.bounceOff(wall4);
  ball.bounceOff(wall5);
  ball.bounceOff(wall6);
  ball.bounceOff(wall7);
  ball.bounceOff(wall8);
  ball.bounceOff(wall9);
  ball.bounceOff(wall10);
  ball.bounceOff(wall11);
  ball.bounceOff(wall12);
  ball.bounceOff(wall13);
  ball.bounceOff(wall14);
  ball.bounceOff(wall15);
  ball.bounceOff(wall16);
  ball.bounceOff(wall17);
  ball.bounceOff(wall18);
  ball.bounceOff(wall19);
  ball.bounceOff(wall20);
  ball.bounceOff(wall21);
  ball.bounceOff(wall22);
  ball.bounceOff(wall23);
  ball.bounceOff(wall24);
  ball.bounceOff(wall25);
  ball.bounceOff(wall26);
  ball.bounceOff(wall27);
  ball.bounceOff(wall28);
  ball.bounceOff(wall29);
  ball.bounceOff(wall30);
  ball.bounceOff(wall31);
  ball.bounceOff(wall32);
  ball.bounceOff(wall33);
  ball.bounceOff(wall34);
  ball.bounceOff(wall35);

  if(keyDown("UP_ARROW")) {
    ball.velocityY = -4;
  }

  if(keyDown("DOWN_ARROW")) {
    ball.velocityY = 4;
  }

  if(keyDown("LEFT_ARROW")) {
    ball.velocityX = -4;
  }

  if(keyDown("RIGHT_ARROW")) {
    ball.velocityX = +6;
  }

  drawSprites()
}