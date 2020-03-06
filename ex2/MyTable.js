/**
 * MyTable
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTable extends CGFobject {
    constructor(scene) {
        super(scene);

        this.top1 = new MyUnitCubeQuad(this.scene);
        this.leg = new MyLeg(this.scene);

    }

    display() {
        this.scene.setDiffuse(0.76,0.60,0.42);
        this.scene.pushMatrix();
        this.scene.translate(0,3.5,0);
        this.scene.scale(20,0.6,10);
        this.top1.display();
        this.scene.popMatrix();

        this.scene.setDiffuse(48/255, 31/255, 13/255);
        this.scene.pushMatrix();
        this.scene.translate(9,0,-4);
        this.scene.scale(1,0.7,1);
        this.leg.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-9,0,4);
        this.scene.scale(1,0.7,1);
        this.leg.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-9,0,-4);
        this.scene.scale(1,0.7,1);
        this.leg.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(9,0,4);
        this.scene.scale(1,0.7,1);
        this.leg.display();
        this.scene.popMatrix();
    }
}