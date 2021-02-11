class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
       
    }
    this.visibility = 255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("pin.png")
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    if (this.body.speed < 3){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill(255);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
    else {
      World.remove(world,this.body)
      push();
      this.visibility -= 5;
      tint(255,this.visibility);
      image(this.image, pos.x, pos.y, this.width, this.height);
      pop();
    }
  }
  score(){
    if (this.visibility<=0 && this.visibility>=-100){
      score= score+1
    }
  }
}
