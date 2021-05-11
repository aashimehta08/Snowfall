class Snow2{
    constructor(x,y,r){
        var options = {
            frictionAir: 0.1,
            density :1,
            setStatic:false,
            restitution: 0
        }
        this.body = Bodies.circle(x,y,r, options);
        this.r = r;
        this.image = loadImage("snow5.webp");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}