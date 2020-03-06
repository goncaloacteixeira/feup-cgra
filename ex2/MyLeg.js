class MyLeg extends CGFobject {
    constructor(scene) {
        super(scene);
        this.leg = new MyUnitCubeQuad(this.scene);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(1,10,1);
        this.leg.display();
        this.scene.popMatrix();
    }
}