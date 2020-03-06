/**
 * MyTable
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTable extends CGFobject {
    constructor(scene) {
        super(scene);

        this.top1 = new MyUnitCubeQuad(this.scene);
        this.leg1 = new MyLeg(this.scene);
        this.leg2 = new MyLeg(this.scene);
        this.leg3 = new MyLeg(this.scene);
        this.leg4 = new MyLeg(this.scene);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(0,3.5,0);
        this.scene.scale(20,0.6,10);
        this.top1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(9,0,-4);
        this.scene.scale(1,0.7,1);
        this.leg1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-9,0,4);
        this.scene.scale(1,0.7,1);
        this.leg2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-9,0,-4);
        this.scene.scale(1,0.7,1);
        this.leg3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(9,0,4);
        this.scene.scale(1,0.7,1);
        this.leg4.display();
        this.scene.popMatrix();
    }
}