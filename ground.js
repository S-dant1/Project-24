class Ground{
    constructor(x, y, width, height){


    var options_b= {
        isStatic: true


    }
       this.body = Bodies. rectangle(x, y, width, height, options_b);
       this.width = width;
       this.height = height;
       World.add(world, this.body);



    }
display(){

    var pos = this.body.position;
    push ();

    fill("green");
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);

    pop ();
}


}