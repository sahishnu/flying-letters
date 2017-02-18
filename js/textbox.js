function textbox(key){
  this.pos1 = createVector(random(windowWidth), windowHeight);
  this.pos2 = createVector(this.pos1.x + 20, this.pos1.y + 20);
  this.gravity = 0.6;
  this.multiplier = random(0.5,1.8);
  this.velocity = -15 * this.multiplier;

  this.update = function(){
    this.velocity += this.gravity;
    this.pos1.y += this.velocity;
    this.pos2.y = this.pos1.y + 20;
  }

  this.show = function(){
    push();
  	fill(0);
    textSize(25);
  	text(key, this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y);
    pop();
  }

  this.bounce = function(){
    this.velocity += this.lift;
  }

  this.offscreen = function(){
    if(this.pos1.y > windowHeight){
      return true;
    }
  }

}
