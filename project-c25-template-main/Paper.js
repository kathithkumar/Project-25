class Paper
{
	constructor(x,y,r)
	{
    	var options = {
    	  isStatic : false,
     	 'resitution' : 0.3,
     	 'friction' : 0,
     	 'density' : 1.2
    	}
    
    this.x = x;
	this.y = y;
    this.r = r;

		
		this.image = loadImage("paper.png");	
		this.body = Bodies.circle(x, y, r/2, options);
		World.add(world, this.body);

	}
	display() {
			var paperPos = this.body.position;
			push();
			
      		translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			angleMode(RADIANS);
			fill(255)
			rotate(this.angle)
			ellipse(0, 0, this.r, this.r);
			pop();

  }
}