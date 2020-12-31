var engine,world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
ground=new Ground(405,225,300,60);


bob1=new Bob(280,520,60);
bob2=new Bob(340,520,60);
bob3=new Bob(400,520,60);
bob4=new Bob(460,520,60);
bob5=new Bob(520,520,60);

rope1 = new Rope(bob1.body,ground.body,-120,0);
rope2 = new Rope(bob2.body,ground.body,-60,0);
rope3 = new Rope(bob3.body,ground.body,0,0);
rope4 = new Rope(bob4.body,ground.body,60,0);
rope5 = new Rope(bob5.body,ground.body,120,0);
  
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body,bob5.body.position,{x:-100,y:-10});
    //Matter.Body.applyForce(bob5.body,bob5.body.position,{x:102,y:-42});
	}
}




