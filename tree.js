class tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

      this.image = loadImage("tree.png");
    }
    display(){
      var treepos =this.body.position;
      imageMode(CENTER);
      image(this.image,1160,390, 670, 600)}
  };

