class throwing{
	constructor(body,anchor1)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor1, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor1
		this.throwing=Constraint.create(options)
		World.add(world,this.throwing)
	}

	attach(body){
		this.throwing.bodyA=body;
	}

	fly()
	{
		this.throwing.bodyA=null;
	}

	display()
	{
		if(this.throwing.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}