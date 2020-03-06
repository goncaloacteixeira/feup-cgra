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
        this.scene.pushMatrix();
        this.scene.scale(5,0.1,5);
        this.seat.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.5, 3.5, 0);
        this.scene.rotate(90.0*Math.PI/180.0, 0,0,1);
        this.scene.scale(2.5,0.1,5);
        this.chairback.display();
        this.scene.popMatrix();

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
        this.scene.translate(2.3, -2.65, 2.35);
        this.scene.scale(0.3,0.53,0.3);
        this.fleg1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.3, -2.65, -2.35);
        this.scene.scale(0.3,0.53,0.3);
        this.fleg1.display();
        this.scene.popMatrix();

    }
}

