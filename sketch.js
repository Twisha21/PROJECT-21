
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball; 
var ground, left, right;



function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	
	ground = new Ground (400,390,800,10);
	right = new Ground (700, 338 , 10 ,80);
	left = new Ground (500, 338 , 10 ,80);

	var op = {
		isStatic:false, 
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	ball = Bodies.circle (200,100,10,op); 
  World.add (world,ball); 

  
	rectMode(CENTER);
	ellipseMode(RADIUS); 

}


function draw() {
  background("black");
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,10); 

  ground.show();
  left.show();
  right.show(); 

  drawSprites();
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce (ball, {x:0, y:0}, {x:3 ,  y:0.05});
	}
}



