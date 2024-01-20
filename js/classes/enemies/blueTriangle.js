class BlueTriangle extends Enemy{

    constructor(x = 0, y = 0) {
        super(scene, x, y);

        this.triangle=scene.add.triangle(x, y, -15, 15, 15, 15, 0, 0, 0x0000ff);
        this.add(this.triangle);
        this.triangle.setOrigin(.5);
        
      }



}