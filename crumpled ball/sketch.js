const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground , dustbin1, dustbin2 , paper , dustbin3;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  Engine.run(engine);
  
  ground=new Ground(width/2,670,width,20);

	dustbin1 = new Dustbin(500,555,15,110);
	dustbin2 = new Dustbin(600,555,15,110);
  paper = new Crumpeled(200,450,40);

  dustbin3 = new Dustbin(550,585,115,15);
	
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	  }
	});


}


function draw() {


  rectMode(CENTER);
  background(0);
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  paper.display();
  dustbin3.display();

 

}
function keyPressed() {

  if (keyCode === UP_ARROW) {

 Matter.Body.applyForce(paper.body ,paper.body.position,{x:65,y:-55});
  
  }
}



