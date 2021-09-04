
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var leftSide,rightSide
var groundObject;
var radius=40;



function setup() {
	createCanvas(1600,800);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.5,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
ball=Bodies.circle(260,100,radius/2,ball_options);
World.add(world,ball);
groundObject=new ground(width/2,670,width,20);
leftSide=new ground(1100,600,20,120);
rightSide=new ground(1350,600,20,120);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,radius,radius)
  groundObject.display();
  rightSide.display();
  leftSide.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}



