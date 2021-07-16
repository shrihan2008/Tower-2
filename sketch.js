const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var  polygon_img
function preload(){
   polygon_img=loadImage("polygon.png")
   } 

function setup (){
  
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;


    Engine.run(engine);





  

    ground = new Ground(600, 400, 10000, 20);
    tower = new Tower(560, 350, 30, 100);
    tower1 = new Tower(600, 350, 30, 100);
    tower2 = new Tower(520, 350, 30, 100);
    tower3 = new Tower(640, 350, 30, 100);
    tower4 = new Tower(530, 250, 30, 100);
    tower5 = new Tower(580, 250, 30, 100);
    tower6 = new Tower(630, 250, 30, 100);
    tower7 = new Tower(550, 150, 30, 100);
    tower8 = new Tower(610, 150, 30, 100);
    tower9 = new Tower(580, 50, 30, 100);

    ball=new Polygon(50,200,20)
    ball.addImage=(polygon_img)
    ball.resize=(50,50)
 
  

   

  }
 

function draw() {
  background(76);  
  tower.display()
 tower1.display()
 tower2.display()
 tower3.display()
 tower4.display()
 tower5.display()
 tower6.display()
 tower7.display()
 tower8.display()
 tower9.display()
 ground.display()
 ball.display()
  
}
//function mouseDragged(){
//  Matter.Body.setPosition(sling.body, {x: mouseX , y: mouseY});
//}


//function mouseReleased(){
//  sling.fly();
//}
