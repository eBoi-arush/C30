class Box_2{
  constructor(x, y, w, h){
    this.w = w;
    this.h = h;

    var options = {
      isStatic: false,
      restitution: 0.6,
      friction: 1.0,
      density: 0.1
      //density: 1.0
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
  }

  show(){
    if(this.body.speed >= 5){
      World.remove(world, this.body);
      this.visibility = this.visibility - 1;
      push();
      tint(255, this.visibility)
      pop();
    } else {
    var cords = this.body.position;
    var angle = this.body.angle;

    rectMode(CENTER);
    fill(255, 192, 203);
    strokeWeight(1.4);
    rect(cords.x, cords.y, this.w, this.h);
    }
  }
}