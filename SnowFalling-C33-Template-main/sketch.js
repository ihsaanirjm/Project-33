const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var mySnow = []
var bg
var myEngine, myWorld
function preload() {
  bg = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);
 myEngine = Engine.create()
 myWorld = myEngine.world
 for(var i = 0; i < 100; i++){
  mySnow[i] = new Snow(random(0,800),-10, 80, 80)
 }

}

function draw() {
  background(bg); 
  Engine.update(myEngine) 
  for(var i = 0; i < 100; i++){
    mySnow[i].display()
  }

}