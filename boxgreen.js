class Box1 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          friction: 0.1,
          density: 1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      this.Visibility=255;
    }
    display(){
      if(this.body.speed<10){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0,0, this.width, this.height);
        pop();
        }
        else{
         World.remove(world,this.body);
         push();
         this.Visibility=this.Visibility-5;
         tint(255,this.Visibility)
         rect(this.body.position.x,this.body.position.y,this.width,this.height)
         pop();
        }
      
    }
  };