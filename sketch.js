const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var mango1,mango2,mango3,mango4,mango5,mango6;
var boy,stone;
var ground,tree;
var slingShot;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    tree = new Tree(900,485);

    boy = new Boy(250,490);

    mango1 = new Mango(800,200,10);
    mango2 = new Mango(900,207,10);
    mango3 = new Mango(870,250,10);
    mango4 = new Mango(980,190,10);
    mango5 = new Mango(940,320,10);
    mango6 = new Mango(810,300,10);

    ground = new Ground(600,height,1200,20);

    stone = new Stone(200,400);

   slingshot = new SlingShot(stone.body,{x:213,y:413});
}

function draw(){
    background(230);
    Engine.update(engine);

    tree.display();

    boy.display();
    
    ground.display();

    stone.display();

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();

    detectCollision(stone,mango1);
    detectCollision(stone,mango2);
    detectCollision(stone,mango3);
    detectCollision(stone,mango4);
    detectCollision(stone,mango5);
    detectCollision(stone,mango6);
    
     slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed()
 {
   if (keyCode === 32)
   {
     Matter.Body.setPosition(stone.body,{x:213,y:413})
     slingshot.attach(stone.body);
   }
 }

function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  console.log(distance);

  	if(distance<=100)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
