/**
 * MyBlimpBody
 * @constructor
 */
class MyBlimpBody extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.body = new MySphere(scene, 16, 8);
        this.gondola = new MyGondola(scene);
    }

    display() {
        // TODO: Pôr setDiffuse tudo a 0 quando não se estiver a testar
        this.scene.setDiffuse(0,0,1);

        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,1);
        this.body.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.scale(0.1,0.1,0.1);
        this.gondola.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.12, -0.55, -0.2)
        this.scene.scale(0.045,0.045,0.1);
        this.body.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.12, -0.55, -0.2)
        this.scene.scale(0.045,0.045,0.1);
        this.body.display();
        this.scene.popMatrix();
    }

    setFillMode() {this.primitiveType=this.scene.gl.TRIANGLES;}
    setLineMode() {this.primitiveType=this.scene.gl.LINE_STRIP;};
}


