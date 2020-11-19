
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var land;
var bin1,bin2,bin3;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	land=new Ground(400,690,800,20);
	ball=new Paper(200,685,6);
	bin1=new Container(600,685,70,10)
	bin2=new Container(565,685,70,10)
	bin3=new Container(635,685,70,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  land.display();
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
}



