class Dustbin{
    constructor(){
        var options = {
            isStatic : true
        }
       this.body = Bodies.rectangle(540,650,0,0,options);
      
       this.img = loadImage("dustbingreen.png");


       World.add(world, this.body);
      
   }
   display(){
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       imageMode(CENTER);
       fill("black");
       image(this.img,50,-95,230,260);
       pop();
    }
   }