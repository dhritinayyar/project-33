const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];

var gameState= "play";


var backgroundImg,ground;
var div1,div2,div3,div4,div5,div6,div7,div8,div9,div10;
var score=0;
var turn =0;
var particle;

function preload() {
  backgroundImg = loadImage("sprites/space.png");
}

function setup() {

  createCanvas(700,700);
  engine = Engine.create();
    world = engine.world;

for (var j = 40; j<=width; j=j+50 )
{

plinkos.push (new Plinko (j,75));


} 

for (var j = 15; j<=width-10; j=j+50){

plinkos.push (new Plinko (j,175))


}


for (var j = 40; j<=width; j=j+50 )
{

plinkos.push (new Plinko (j,275));


} 


for (var j = 15; j<=width-10; j=j+50){

  plinkos.push (new Plinko (j,375))
  
  
  }


  
   

     ground = new Ground(350,690,700,20);
     div1 = new Divide(615,600,5,300)
     div2 = new Divide(535,600,5,300)
     div3 = new Divide(455,600,5,300)
     div4 = new Divide(375,600,5,300)
     div5 = new Divide(295,600,5,300)
     div6 = new Divide(695,350,10,800);
     div7 = new Divide(7,350,10,800);
     div8=  new Divide(215,600,5,300)
     div9=  new Divide(135,600,5,300)
     div10= new Divide(55,600,5,300)
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  textSize (30);
  fill ("white");
  text("Score"+score,50,40)


  textSize (23);
  fill ("white");
  text("500",640,530)

  textSize (23);
  fill ("white");
  text("500",480,530)
  
  textSize (23);
  fill ("white");
  text("500",560,530)
  
  
  textSize (23);
  fill ("white");
  text("100",400,530)
  
  textSize (23);
  fill ("white");
  text("100",320,530)
  
  textSize (23);
  fill ("white");
  text("200",240,530)
  


  textSize (23);
  fill ("white");
  text("200",160,530)
  
  textSize (23);
  fill ("white");
  text("200",80,530)
  

  


ground.display();


div1.display();
div2.display();
div3.display();
div4.display();
div5.display();

div6.display();
div7.display();
div9.display();
div10.display();
div8.display();



if (gameState==="end"){
 
   
  textSize (100);
  fill ("red");
  text("GAMEOVER",698,698)
  




}












for (var j = 0; j<plinkos.length ; j++) {

  plinkos[j].display();


}



for (var i = 0; i<particles.length ; i++) {

  particles[i].display();


}


if(particle !=null){
if(gamestate==="start"){
particle.display();

if(particle.body.position.y >  700){

  if(particle.body.position.x <  300){
    score= score + 200;
    particle=null

if(turn>= 5) gameState= "end";

  }

  else if(particle.body.position.x < 600 && particle.position.body.x > 301){
score= score + 100 ;
particle=null
if(turn>=5) gameState = "end" ; 



  }

 
  else if (particle.body.position.x < 800  && particle.body.position.x >601){

score=score+500
particle=null;

if(turn>=5) gameState = "end" ; 




  }


}




}




}

  drawSprites();
}


function mousePressed(){

  if(gameState === "start"){

turn++;
particle= new Particle(mouseX , 50 ,10 ,10)


  }





}