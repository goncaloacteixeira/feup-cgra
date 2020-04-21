/**
 * MyGondola
 * @constructor
 */
class MyGondola extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.body = new MyCylinder(this.scene, 10);
        /*this.head =
        this.tail =*/
    }

    display() {
        // TODO: Pôr setDiffuse tudo a 0 quando não se estiver a testar
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,1);
        this.body.display();
        this.scene.popMatrix();
    }

    setFillMode() {this.primitiveType=this.scene.gl.TRIANGLES;}
    setLineMode() {this.primitiveType=this.scene.gl.LINE_STRIP;};
}


