const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var ground_options ={
        isStatic: true
    }

    ground = new Ground(200,390,400,20);
    box1 = new Box(200,300,50,50);
    box2=new Box(220,325,40,40)
}

function draw(){
    background(0);
    Engine.update(engine);
        
     ground.display();
    box1.display();
    box2.display();
}