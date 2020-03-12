/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);

        this.greenSquare = new MyDiamond(this.scene);
        this.yellowParallelogram = new MyParallelogram(this.scene);
        this.orangeTriangle = new MyTriangleBig(this.scene);
        this.blueTriangle = new MyTriangleBig(this.scene);
        this.pinkTriangle = new MyTriangle(this.scene);
        this.purpleTriangle = new MyTriangleSmall(this.scene);
        this.redTriangle = new MyTriangleSmall(this.scene);
    }
    display() {
        this.scene.pushMatrix();

        var tra =  [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            3.3, 2.3, 0.0, 1.0];

        this.scene.pushMatrix();
        this.scene.multMatrix(tra);
        this.scene.setDiffuse(0,1,0,0);
        this.greenSquare.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.4,1.4,0);
        this.scene.rotate(45.0*Math.PI/180.0, 0,0,1);
        this.scene.setDiffuse(0,0,1,0);
        this.blueTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.4,0,0);
        this.scene.rotate(-135.0*Math.PI/180.0, 0, 0, 1);
        this.scene.setDiffuse(1, 102/255, 204/255, 0);
        this.pinkTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(90.0*Math.PI/180.0,0,0,1);
        this.scene.setDiffuse(1, 128/255, 0, 0);
        this.orangeTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-3, -1, 0);
        this.scene.scale(1, -1, 1);
        this.scene.setDiffuse(1, 1, 0, 0);
        this.yellowParallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2.1, -0.7, 0);
        this.scene.rotate(45.0*Math.PI/180.0, 0, 0, 1);
        this.scene.setDiffuse(1, 0, 0, 0);
        this.redTriangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.4, -1.6, 0);
        this.scene.rotate(90.0*Math.PI/180.0, 0, 0, 1);
        this.scene.setDiffuse(204/255, 0, 204/255, 0);
        this.purpleTriangle.display();
        this.scene.popMatrix();

    }
}

