
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject,Stone;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,100,30);
	mango3=new mango(1200,200,30);
	mango4=new mango(1050,150,30);
	mango5=new mango(1000,50,30);
	mango6=new mango(950,100,30);
	mango7=new mango(1200,100,30);
	mango8=new mango(1050,230,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	Stone=new stone(100,200,50)
	slingshot=new SlingShot(Stone.body,{x:240,y:420})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  Stone.display();
  groundObject.display();
  collision(Stone,mango1);
  collision(Stone,mango2);
  collision(Stone,mango3);
  collision(Stone,mango4);
  collision(Stone,mango5);
  collision(Stone,mango6);
  collision(Stone,mango7);
  collision(Stone,mango8);
}

function mouseDragged(){
	Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	slingshot.fly();
}


function keyPressed(){
	if(keyCode===32){
	Matter.Body.setPosition(Stone.body,{x:240,y:420})
	slingshot.attach(Stone.body)	
	}
}

function collision(stone1,mango10){
mangoBodyPosition=mango10.body.position
stoneBodyPosition=stone1.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango10.r+stone1.r){
	Matter.Body.setStatic(mango10.body,false)
}

}