class Plinko {
    constructor(x, y) {
      var options = {
          isStatic:true,
          restitution:0.4
      }
      this.radius= 10;
      
      this.body = Bodies.circle(x, y, 10, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("white");
      ellipseMode(RADIUS);
      ellipse(pos.x,pos.y, this.radius);
    }
     
  };