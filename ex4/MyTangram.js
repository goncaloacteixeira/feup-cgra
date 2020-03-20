/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initMaterials(this.scene);

        this.greenSquare = new MyDiamond(this.scene);
        this.yellowParallelogram = new MyParallelogram(this.scene);
        this.orangeTriangle = new MyTriangleBig(this.scene, 'orange');
        this.blueTriangle = new MyTriangleBig(this.scene, 'blue');
        this.pinkTriangle = new MyTriangle(this.scene);
        this.purpleTriangle = new MyTriangleSmall(this.scene, 'purple');
        this.redTriangle = new MyTriangleSmall(this.scene, 'red');

    }

    initMaterials(scene){
        // Tangram texture
        this.tangramTex = new CGFappearance(this.scene);
        this.tangramTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.tangramTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangramTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangramTex.setShininess(10.0);
        this.tangramTex.loadTexture('images/tangram.png');
        this.tangramTex.setTextureWrap('REPEAT', 'REPEAT');

    }

    display() {
        this.scene.pushMatrix();
        this.tangramTex.apply();

        var tra =  [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            3.3, 2.3, 0.0, 1.0];

        this.scene.pushMatrix();
        this.scene.multMatrix(tra);
        this.greenSquare.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.4,1.4,0);
        this.scene.rotate(45.0*Math.PI/180.0, 0,0,1);
        this.blueTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.4,0,0);
        this.scene.rotate(-135.0*Math.PI/180.0, 0, 0, 1);
        this.pinkTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(90.0*Math.PI/180.0,0,0,1);
        this.orangeTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3, -1, 0);
        this.scene.scale(1, -1, 1);
        this.tangramTex.apply();
        this.yellowParallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.1, -0.7, 0);
        this.scene.rotate(45.0*Math.PI/180.0, 0, 0, 1);
        this.redTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.4, -1.6, 0);
        this.scene.rotate(90.0*Math.PI/180.0, 0, 0, 1);
        this.purpleTriangle.display();
        this.scene.popMatrix();
    }

    enableNormalViz() {
        this.greenSquare.enableNormalViz();
        this.orangeTriangle.enableNormalViz();
        this.purpleTriangle.enableNormalViz();
        this.redTriangle.enableNormalViz();
        this.yellowParallelogram.enableNormalViz();
        this.blueTriangle.enableNormalViz();
        this.pinkTriangle.enableNormalViz();
    }

    disableNormalViz() {
        this.greenSquare.disableNormalViz();
        this.orangeTriangle.disableNormalViz();
        this.purpleTriangle.disableNormalViz();
        this.redTriangle.disableNormalViz();
        this.yellowParallelogram.disableNormalViz();
        this.blueTriangle.disableNormalViz();
        this.pinkTriangle.disableNormalViz();
    }

    updateBuffers(complexity){
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}

