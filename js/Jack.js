class Jack{
    constructor(x,y,h,w,angle){
        this.x=x;
        this.y=y;
        this.h=h;
        this.w=w;
        this.angle=angle;
        //this.image=loadImage("animations/nombre.png");
        this.body=Bodies.rectangle(x,y,w,h);
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle
        this.body.position.x=this.body.position.x+1;
        this.body.position.y=this.body.position.y+1;
        push();
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.w,this.h);
        pop();

    }
}