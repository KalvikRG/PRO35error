class Block
{
  constructor(x,y,width,height)
 {
   var options = {
    isStatic: false,
    'friction':1.0,
    'density':0.05,
   }

   this.body = Bodies.rectangle(x,y,width,height,options)
   this.width = width;
   this.height = height;
   this.visibility = 255;
   World.add(world, this.body);
 }
 
 display(){
    if(this.body.speed<3){
    var pos = this.body.position;
    rectMode(CENTER)
    fill("white")
    rect(pos.x,pos.y,this.width,this.height)}
    else
    {
     world.remove(world, this.body)
     push()
     this.visibility -=1;
     tint(255,this.visibility)
     pop()
    }

 }
 
}