class Ground{
  constructor(x, y, w, h){
    this.w = w;
    this.h = h;

    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
  }

  show(){
    var cords = this.body.position;

    rectMode(CENTER);
    fill(100);
    rect(cords.x, cords.y, this.w, this.h);
  }
}