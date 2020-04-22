/**
 * MyGondola
 * @constructor
 */
class MyGondola extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.body = new MyCylinder(this.scene, 10);
        this.head = new MySphere(this.scene, 16, 8);
    }

    display() {
        // TODO: Pôr setDiffuse tudo a 0 quando não se estiver a testar
        this.scene.pushMatrix();
        this.scene.translate(0,0,-3);
        this.scene.scale(1,1,6);
        this.scene.rotate(90*Math.PI/180.0, 1, 0, 0);
        this.body.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,2.8);
        this.head.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,-2.8);
        this.head.display();
        this.scene.popMatrix();
    }

    setFillMode() {this.primitiveType=this.scene.gl.TRIANGLES;}
    setLineMode() {this.primitiveType=this.scene.gl.LINE_STRIP;};
}


