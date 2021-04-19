class Ball{
  constructor(x, y, r){
    this.r = r;
    
    var options = {
      isStatic: false,
      restitution: 0.3,
      friction: 0.5,
      density: 0.8
    }
    this.body = Bodies.circle(x, y, this.r, options);
    World.add(world, this.body);

    this.visibility = 255;
  }

  show(){
    var cords = this.body.position;

    ellipseMode(RADIUS);
    fill(252, 245, 1);
    circle(cords.x, cords.y, this.r);
  }
}