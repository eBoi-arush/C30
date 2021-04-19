//SETTING UP PHYSICS ENGINE

//modules
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//variables
var engine;
var world;

//CODE

//variables
let ground1;
let platform1;
let rightWall;
let leftWall;
let roof;

//level 1
let box1; //level 2
let box2; let box8;  //level 3  
let box3; let box9;  let box13; //level 4
let box4; let box10; let box14; let box16;
let box5; let box11; let box15;
let box6; let box12;
let box7;

//polygon
let polygon1;
let sling1;

//SETUP
function setup(){
  createCanvas(800,400);

  //PHYSICS ENGINE
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  //CODE

  //fixed bodies
  platform1 = new Ground(600,320,250,10); 
  ground1 = new Ground(width/2, height, width,20);
  rightWall = new Ground(width, height/2, 20, height);
  leftWall = new Ground(0, height/2, 20, height);
  roof = new Ground(width/2, 0, width,20);

  //level 1 
  box1 = new Box_1(505.75,275,30,40);
  box2 = new Box_1(537.25,275,30,40);
  box3 = new Box_1(568.75,275,30,40);
  box4 = new Box_1(600,275,30,40);
  box5 = new Box_1(631.25,275,30,40);
  box6 = new Box_1(662.5,275,30,40);
  box7 = new Box_1(694,275,30,40);

  //level 2 
  box8 = new Box_2(537.25,235,30,40);
  box9 = new Box_2(568.75,235,30,40);
  box10 = new Box_2(600,235,30,40);
  box11 = new Box_2(631.25,235,30,40);
  box12 = new Box_2(662.5,235,30,40);

  //level 3 
  box13 = new Box_3(568.75,195,30,40);
  box14 = new Box_3(600,195,30,40);
  box15 = new Box_3(631.25,195,30,40);

  //level 4 
  box16 = new Box_4(600, 155, 30, 40);

  //polygon
  polygon1 = new Ball(200,230,18+5);
  sling1 = new Elastic(polygon1.body, {x: 200, y:230});
}

//DRAW
function draw(){
  background(51);

  //fixed bodies
  ground1.show();
  platform1.show();
  rightWall.show();
  leftWall.show();
  roof.show();

  //level 1
  box1.show();
  box2.show();
  box3.show();
  box4.show();
  box5.show();
  box6.show();
  box7.show();

  //level 2
  box8.show();
  box9.show();
  box10.show();
  box11.show();
  box12.show();

  //level 3
  box13.show();
  box14.show();
  box15.show();

  //level 4
  box16.show();

  //polygon
  polygon1.show();
  sling1.show();
}

function mouseDragged(){
  Body.setPosition(polygon1.body, {x: mouseX, y: mouseY});
  //sling1.notFly();
}

function mouseReleased(){
  sling1.fly();
}

function keyPressed(){
  if (keyCode === 82){
    sling1.attach(polygon1.body); 
  }
}