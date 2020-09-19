class Polygon{
    constructor(x, y,w,h) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,w,h, options);
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.image = loadImage("hex.png");
        World.add(world, this.body);
      }
      display(){

        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS)
        imageMode(CENTER);
      // ellipse(0,0,this.r)
        image(this.image, 0, 0, this.w/2,this.h/2);
        pop();
      }
}