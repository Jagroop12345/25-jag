// nameSpace to object
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

// creating my own artifital engine, world, and bodies
var engine, world;
var ground;

var up;
var down;
var left;
var angle = 45
var fan1,fan2,fan3,fan4
var ball1,ball2,ball3,ball4

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;
  //console.log(world)

  var ground_options = {
    isStatic: true,
  };
  
  ground = Bodies.rectangle(200, 380, 400, 20, ground_options);
  World.add(world, ground);
  console.log(world);
 
  up = createImg("up.png");
  up.size(50, 50);
  up.position(20, 50);
  up.mouseClicked(vForceup);

  down = createImg("down.png");
  down.size(70, 70);
  down.position(5, 120);
  down.mouseClicked(vForcedown);

  left = createImg("left.png");
  left.size(70, 70);
  left.position(20, 170);
  left.mouseClicked(vForceleft);

 fan1= new MyFan(20,300,10,80,"blue",60)
 fan2= new MyFan(200,400,10,80,"yellow",45)
 fan3= new MyFan(300,50,10,80,"Magenta",120)
 fan4= new MyFan(100,300,10,80,"orange",90)

 ball1= new MyBall(300,100,10,"blue")
 ball2= new MyBall(200,100,10,"Magenta")
}

function draw() {
  background(0);
  //update engine created by us
  Engine.update(engine);
  fill("red");
  //rect(30, 20, 55, 55);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  
  
  text(mouseX + "," + mouseY, mouseX, mouseY);

  /*fan1.show()
  fan1.angle+=0.1
  fan2.show()
  fan2.angle+=0.5
  fan3.show()
  fan3.angle-=0.5
  fan4.show()
  fan4.angle-=0.1*/

  ball1.show()
  ball2.show()
}

function vForceup() {
  Matter.Body.applyForce(ball1.body, ball1.body.position, { x: 0, y: -0.05 });
}
function vForcedown() {
  Matter.Body.applyForce(ball1.body, ball1.body.position, { x: 0, y: 0.05 });
}
function vForceleft() {
  Matter.Body.applyForce(ball1.body, ball1.body.position, { x: -0.01, y: 0 });
}
