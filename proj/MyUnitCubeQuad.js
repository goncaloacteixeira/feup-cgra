/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);

        this.face = new MyQuad(this.scene);
        this.initMaterials();

    }
    
    initMaterials(){
        this.texture = new CGFappearance(this.scene);
        this.texture.setAmbient(0.3, 0.3, 0.3, 1);
        this.texture.setDiffuse(0.4, 0.4, 0.4, 1);
        this.texture.setSpecular(0.1, 0.1, 0.1, 1);
        this.texture.setShininess(10.0);
        this.texture.loadTexture('images/supply/crate1.png');
        this.texture.setTextureWrap('REPEAT', 'REPEAT');
    }
    
    display() {

        this.texture.apply();
        if (!this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(180.0*Math.PI/180.0,0,1,0);
        this.scene.translate(0,0,0.5);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(90.0*Math.PI/180.0,0,1,0);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-90.0*Math.PI/180.0,0,1,0);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-90.0*Math.PI/180.0,1,0,0);
        this.face.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(90.0*Math.PI/180.0,1,0,0);
        this.face.display();
        this.scene.popMatrix();
    }
}

