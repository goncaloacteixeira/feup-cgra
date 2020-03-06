/**
 * MyChair
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyChair extends CGFobject {
    constructor(scene) {
        super(scene);

        this.bleg1 = new MyLeg(this.scene);
        this.fleg1 = new MyLeg(this.scene);
        this.seat = new MyUnitCubeQuad(this.scene);
        this.chairback = new MyUnitCubeQuad(this.scene);

    }
    display() {
        this.scene.setDiffuse(0.76,0.60,0.42);
        this.scene.pushMatrix();
        this.scene.scale(5,0.1,5);
        this.seat.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.47, 3.49, 0);
        this.scene.rotate(90.0*Math.PI/180.0, 0,0,1);
        this.scene.scale(2.5,0.1,5);
        this.chairback.display();
        this.scene.popMatrix();


        this.scene.setDiffuse(48/255, 31/255, 13/255);
        this.scene.pushMatrix();
        this.scene.translate(-2.4, -0.25, 2.4);
        this.scene.scale(0.3,1,0.3);
        this.bleg1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.4, -0.25, -2.4);
        this.scene.scale(0.3,1,0.3);
        this.bleg1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.3, -2.65, 2.3);
        this.scene.scale(0.3,0.53,0.3);
        this.fleg1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.3, -2.65, -2.3);
        this.scene.scale(0.3,0.53,0.3);
        this.fleg1.display();
        this.scene.popMatrix();
    }
}

