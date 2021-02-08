const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,bird1,log1,log2,log4,log5,pig1,pig2;
var ground;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
     box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    bird1=new Bird(200,100);
    log1=new Log(810,260,20,300,PI/2);
    log2=new Log(810,180,20,300,PI/2);
    log4 = new Log(760,120,20,150, PI/7);
     log5 = new Log(870,120,20,150, -PI/7);
     pig1=new Pig(820,320,50,50);
     pig2=new Pig(820,240,50,50);



    
    ground = new Ground(400,400,1200,30); 
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    bird1.display();
    log1.display();
    log2.display();
    log4.display();
    log5.display();
    pig1.display();
    pig2.display();
    ground.display();
   
}