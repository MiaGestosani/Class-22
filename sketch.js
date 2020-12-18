const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


var engine,world;
var object;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  
  } 
var ball_options={
  restitution: 0.5, density: 2.0,friction: 1.0

}
  object = Bodies.rectangle(200,380,400,20,options);
  ball= Bodies.circle(200,200,50,ball_options); 
  World.add(world,object);
  World.add(world, ball);

  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);

  //r = createSprite(200, 200, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y, 400,20);
  ellipse(ball.position.x,ball.position.y,50,50 ); 
  drawSprites();
}