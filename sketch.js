
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var retan;
var retan2;
var ground;
var plane;


function setup() {
	createCanvas(800, 700);                    

	engine = Engine.create();
	world = engine.world;

	var plane_options ={
		isStatic = true,
	}

	var ball_options = {
		restitution: 0.5,
		frictionAir:0.0,
		friction:0.02,
	  }

	var retan2_options = {
		retruction: 0.01,
		friction:0.01,
		frictionAir:0.01,
	}

	var retan_options = {
		retruction: 0.01,
		friction:1,
		frictionAir:0.03,

	}

	var ground_options = {
		isStatic: true
	};

	//Crie os Corpos Aqui.

	ground = Bodies.rectangle(200,390,400,20,ground_options);
	World.add(world,ground);
	ball = bodies.circle(210,10,10,ball_options);
	World.add(world.ball);
	retan2 = bodies.rectangle(110,50,10,10,retan2_options);
	World.add(world.retan2);
	retan = bodies.rectangle(350,50,10,10,retan_options);
	World.add(world.retan);


	
	
	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  background(0);
  

 	ellipse(ball.position.x,ball.position.y,10);
	rect(retan.position.x,retan.position.y,400,200);
	rect(retan2.position.x,retan2.position.y,10,10);
	rect(ground.position.x,ground.position.y,10,10);
	Engine.update(engine);
  
 
}



