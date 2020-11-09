const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,Ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var Ball_options={
        restitution:2,
        mass :50
    }

    var Ball2_options={
        restitution:2,
        mass :0.5
    }
    
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);


    Ball = Bodies.circle(200,200,15,Ball_options);
    World.add(world,Ball);

    Ball2 = Bodies.circle(100,200,50,Ball2_options);
    World.add(world,Ball2);
    
    console.log(Ball);
}

function draw(){
    background(0);
    Engine.update(engine);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(Ball.position.x,Ball.position.y,15,15);
    ellipse(Ball2.position.x,Ball2.position.y,50,50);

}