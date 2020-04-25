class MyBillboard extends CGFobject {
    constructor(scene) {
        super(scene);

        this.board = new MyPlane(scene, 50);
        this.support = new MyPlane(scene, 50);
    }

    display() {
        this.scene.pushMatrix()

        this.scene.translate(5, 5, 17);
        this.scene.rotate(Math.PI / 3.0, 0, 1, 0);

        this.scene.pushMatrix();
        this.scene.scale(2, 1, 1);
        this.board.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.7, -1, 0);
        this.scene.scale(0.1, 1, 1);
        this.support.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.7, -1, 0);
        this.scene.scale(0.1, 1, 1);
        this.support.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }

}