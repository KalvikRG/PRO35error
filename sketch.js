const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var engine,world;

var ground, support1, support2;

var ball , rope;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25,block26,block27,block28,block29,block30;
var block31,block32,block33,block34,block35,block36,block37,block38,block39,block40,block41,block42;

var bg_Img;

function preload(){
    back_Img = loadImage("bg.png")
}

function setup(){
    createCanvas(1300,700);
    engine = Engine.create();
    world = engine.world;

    //   ground = new Ground(800,300,20,500)
    //  support1 = new Ground(790,495,20,410)
     support2 = new Ground(988,295,20,400)

//set1
block1 = new Block(780,100,80,20)
//line_Left
block2 = new Block(820,120,80,20)
block3 = new Block(840,140,80,20)
block4 = new Block(860,160,80,20)
block5 = new Block(880,180,80,20)
block6 = new Block(900,200,80,20)
block7 = new Block(920,220,80,20)
block8 = new Block(940,240,80,20)
//line_Right
block9 = new Block(740,120,80,20)
block10 = new Block(720,140,80,20)
block11 = new Block(700,160,80,20)
block12 = new Block(680,180,80,20)
block13 = new Block(660,200,80,20)
block14 = new Block(640,220,80,20)
block15 = new Block(620,240,80,20)
//middle_Bolcks
block16 = new Block(780,140,40,20)
block17 = new Block(790,160,90,20)
block18 = new Block(790,180,130,20)
block19 = new Block(790,200,167,20)
block20 = new Block(790,220,210,20)
block21 = new Block(790,240,250,20)

//set2
block22 = new Block(780,400,80,20)
//line_Left
block23 = new Block(820,420,80,20)
block24 = new Block(840,440,80,20)
block25 = new Block(860,460,80,20)
block26 = new Block(880,480,80,20)
block27 = new Block(900,500,80,20)
block28 = new Block(920,520,80,20)
block29 = new Block(940,540,80,20)
//line_Right
block30 = new Block(740,420,80,20)
block31 = new Block(720,440,80,20)
block32 = new Block(700,460,80,20)
block33 = new Block(680,480,80,20)
block34 = new Block(660,500,80,20)
block35 = new Block(640,520,80,20)
block36 = new Block(620,540,80,20)
//middle_Bolcks
block37 = new Block(780,440,40,20)
block38 = new Block(790,460,90,20)
block39 = new Block(790,480,130,20)
block40 = new Block(790,500,167,20)
block41 = new Block(790,520,210,20)
block42 = new Block(790,540,250,20)


  ball = new Ball(150,280,12)
  rope = new Rope(ball.body,{x:150,y:280})
 }

 function draw(){
   background("yellow")                 
   Engine.update(engine)

    ball.display()
    rope.display()
    //  ground.display()
//    support1.display()

block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()
block17.display()
block18.display()
block19.display()
block20.display()
block21.display()
block22.display()
block23.display()
block24.display()
block25.display()
block26.display()
block27.display()
block28.display()
block29.display()
block30.display()
block31.display()
block32.display()
block33.display()
block34.display()
block35.display()
block36.display()
block37.display()
block38.display()
block39.display()
block40.display()
block41.display()
block42.display()

     

     mouseDragger();
     mouseReleased();
     keyPressed();
 }

 function mouseDragger(){
     Matter.body.setPosition(ball.body,{x:mouseX,y:mouseY})
 }

 function mouseReleased(){
     rope.fly()
 }

 function keyPressed(){
     if(keyCode === 32){
         rope.attach(ball.body)
     } }