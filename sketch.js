
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box3, box3;
var paper
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(400, 680, 800, 20);
	box1 = new Bin(600, 660, 200, 20);
	box2 = new Bin(500, 630, 20, 80);
	box3 = new Bin(700, 630, 20, 80);
	paper = new Paper(200, 380, 30);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:115,y:-115});
	}

}



