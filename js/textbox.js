function textbox(key){
  this.size = 25;
  this.gravity = 0.6;
  this.multiplier = random(0.9,1.8);
  this.pos1 = createVector(random(this.size,windowWidth-this.size), windowHeight);
  this.velocity = createVector(random(-10,10), -15 * this.multiplier);


  this.update = function(){
    if(this.pos1.x < 0 || this.pos1.x + this.size > windowWidth){
      this.velocity.x *= -1;
    }
    this.velocity.y += this.gravity;
    this.pos1.x += this.velocity.x;
    this.pos1.y += this.velocity.y;
  }

  this.show = function(){
    push();
  	fill(0);
    textSize(25);
  	text(key, this.pos1.x, this.pos1.y, this.size, this.size);
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
