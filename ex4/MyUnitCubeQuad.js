/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);

        this.face1 = new MyQuad(this.scene);
        this.initMaterials();

    }
    
    initMaterials(){
        this.topTex = new CGFappearance(this.scene);
        this.topTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.topTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.topTex.setShininess(10.0);
        this.topTex.loadTexture('images/mineTop.png');
        this.topTex.setTextureWrap('REPEAT', 'REPEAT');

        this.sideTex = new CGFappearance(this.scene);
        this.sideTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideTex.setShininess(10.0);
        this.sideTex.loadTexture('images/mineSide.png');
        this.sideTex.setTextureWrap('REPEAT', 'REPEAT');

        this.bottomTex = new CGFappearance(this.scene);
        this.bottomTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomTex.setShininess(10.0);
        this.bottomTex.loadTexture('images/mineBottom.png');
        this.bottomTex.setTextureWrap('REPEAT', 'REPEAT');
    }
    
    display() {

        if (this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);


        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.sideTex.apply();
        this.face1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(180.0*Math.PI/180.0,0,1,0);
        this.scene.translate(0,0,0.5);
        this.face1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(90.0*Math.PI/180.0,0,1,0);
        this.face1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-90.0*Math.PI/180.0,0,1,0);
        this.face1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-90.0*Math.PI/180.0,1,0,0);
        this.topTex.apply();
        this.face1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(90.0*Math.PI/180.0,1,0,0);
        this.bottomTex.apply();
        this.face1.display();
        this.scene.popMatrix();
    }
}

