/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);

        this.face1 = new MyQuad(this.scene);
        this.face2 = new MyQuad(this.scene);
        this.face3 = new MyQuad(this.scene);
        this.face4 = new MyQuad(this.scene);
        this.face5 = new MyQuad(this.scene);
        this.face6 = new MyQuad(this.scene);
    }
    display() {

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.face1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI, 1, 0, 0);
        this.face2.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(90.0*Math.PI/180.0, 1, 0, 0);
        this.face3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-90.0*Math.PI/180.0, 1, 0, 0);
        this.face4.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(90.0*Math.PI/180.0, 0, 1, 0);
        this.face5.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-90.0*Math.PI/180.0, 0, 1, 0);
        this.face6.display();
        this.scene.popMatrix();
    }
}

