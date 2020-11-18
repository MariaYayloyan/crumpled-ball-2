
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, groundSprite;
var bin, paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options1 ={
		isStatic:true,
   }
    
   groundSprite = createSprite(400,690,800,10);
   groundSprite.shapeColor = "gray";

    ground = Bodies.rectangle(400,680,800,10,options1);
	World.add(world,ground);

	bin = new Dustbin();


	paper = new Paper(50,600,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");


  drawSprites();
 
  bin.display();

  paper.display();


}

function keyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:155,y:-380});

	}

}

