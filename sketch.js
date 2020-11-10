const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;


function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

 


}

function draw() {
  background(180);
  Engine.update(engine);
  
  




}




