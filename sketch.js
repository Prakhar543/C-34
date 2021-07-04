const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,monster;
var monsterImg,spImg;
var platform;
var slingShot;
var backgroundImg;

function preload(){
     getTime();

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,500,1200,30);
    platform = new Ground(900,300,120,20);

    box1 = new Shooter(100,320,250,200);

    box2 = new Wall(650,480,70,70);
    box3 = new Wall(650,380,70,70);
    box4 = new Wall(650,280,70,70);
    box5 = new Wall(650,180,70,70);
    box6 = new Wall(550,480,70,70);
    box7 = new Wall(550,380,70,70);
    box8 = new Wall(550,280,70,70);
    box9 = new Wall(550,180,70,70);
    box10 = new Wall(650,80,70,70);
 
 monster=new Box(890,200,200,200)
   

    slingshot = new SlingShot(box1.body,{x:300, y:100});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);


    text(mouseX +","+ mouseY,50,50);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
   
   monster.display();
    ground.display();
  

    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(box1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingshot.attach(box1.body);
    }
}
async function getTime(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var responseType=await response.json();
console.log(responseType)
    var dt=responseType.datetime;
    console.log(dt);
    var hr=dt.slice(11,13);
    console.log(hr);
    if(hr>=01 && hr<24){
       bg="GamingBackground.png" 
    }
    else{
        bg="bg2.jpg" 
    }
    backgroundImg=loadImage(bg);
}
