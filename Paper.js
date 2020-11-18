class Paper {
constructor(x,y,r) {
    var options ={
        isStatic:false,
        restitution:0.2,
        friction:3.0,
        density:0.5
   }

   this.x=x;
   this.y=y;
   this.r=r;

    this.body = Bodies.circle(this.x,this.y,(this.r-20/2),options);
    this.img = loadImage("paper.png");
    World.add(world,this.body);

}
display(){
    
    var paperpos=this.body.position;

    push()
    translate(paperpos.x, paperpos.y);
    imageMode(CENTER)
    image(this.img,10,47,70,70);
     pop()
}


}