class BlueTriangle extends Enemy{

    constructor(x = null, y = null) {
        super(x, y);
        this.speed=250;
        this.triangle=scene.add.triangle(0, 0, -15, 30, 15, 30, 0, 0, 0x0000ff);
        this.add(this.triangle);
       this.triangle.setOrigin(.5);



        
      }



}