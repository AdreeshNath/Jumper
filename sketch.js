var canvas;
var music;
var o1,o2,o3,o4;
var b1,b2,b3,b4;
var m1;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    o1 = createSprite(105,580,200,20);
    o1.shapeColor="red";
    o2 = createSprite(305,580,200,20);
    o2.shapeColor="blue";
    o3 = createSprite(505,580,200,20);
    o3.shapeColor="green";
    o4 = createSprite(705,580,200,20);
    o4.shapeColor="yellow";

    m1 = createSprite(400,300,20,20);
    m1.shapeColor="white";
    m1.velocityX=(random(3,6));
    m1.velocityY=(random(3,6));
    //create 4 different surfaces

   b1 = createSprite(400,0,800,2);
   b1.shapeColor="red";
   b2 = createSprite(400,600,800,2);
   b2.shapeColor="red";
   b3 = createSprite(800,300,2,800);
   b3.shapeColor="red";
   b4 = createSprite(0,300,2,800);
   b4.shapeColor="red";
    //create box sprite and give velocity

}

function draw() {
    background("black");
    //create edgeSprite
  
   m1.bounceOff(b1);
   m1.bounceOff(b2);
   m1.bounceOff(b3);
   m1.bounceOff(b4);
   if(m1.isTouching(o1)){
    m1.shapeColor="red" ;
     music.play();
   }
   if(m1.isTouching(o2)){
    m1.shapeColor="blue";
    m1.velocityX=0;
    m1.velocityY=0;
    music.stop();
   }
   if(m1.isTouching(o3)){
    m1.shapeColor="green"
    
   }
   if(m1.isTouching(o4)){
    m1.shapeColor="yellow";
  
   }
   drawSprites();
    //add condition to check if box touching surface and make it box
}
