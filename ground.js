class ground{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.h=h;
        this.w=w;
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body)
    }   
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill("brown");
        rect(0,0,this.w,this.h);
        pop();
   
   
   
    }
   }