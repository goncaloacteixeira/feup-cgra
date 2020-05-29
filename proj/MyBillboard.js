class MyBillboard extends CGFobject {
    constructor(scene) {
        super(scene);

        this.board = new MyPlane(scene, 50);
        this.support = new MyPlane(scene, 50);
        this.progressbar = new MyPlane(scene, 50);

        this.progressShader = new CGFshader(scene.gl, 'shaders/progress_bar.vert', 'shaders/progress_bar.frag');

        this.dropped = 0;

        this.progressShader.setUniformsValues({ drops: 0 });
        this.plane = new MyPlane(scene, 20);
        this.initMaterials();
    }

    initMaterials() {
        this.boardTex = new CGFappearance(this.scene);
        this.boardTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.boardTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.boardTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.boardTex.setShininess(10.0);
        this.boardTex.loadTexture('images/billboard.jpg');
        this.boardTex.setTextureWrap('REPEAT', 'REPEAT');

        this.legs = new CGFappearance(this.scene);
        this.legs.setAmbient(0.1, 0.1, 0.1, 1);
        this.legs.setDiffuse(0.1, 0.1, 0.1, 1);
        this.legs.setSpecular(0.1, 0.1, 0.1, 1);
        this.legs.setShininess(10.0);

        this.grey = new CGFappearance(this.scene);
        this.grey.setAmbient(0.5, 0.5, 0.5, 1.0);
        this.grey.setDiffuse(0.1, 0.1, 0.1, 1);
        this.grey.setSpecular(0.1, 0.1, 0.1, 1);
        this.grey.setShininess(5.0);
        this.grey.loadTexture('images/billboard.jpg');
        this.grey.setTextureWrap('REPEAT', 'REPEAT');
    }

    updateBillboard() {
        this.progressShader.setUniformsValues({ drops: ++this.dropped});
    }

    resetBillboard() {
        this.dropped = 0;
        this.progressShader.setUniformsValues({ drops: 0 });
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(12, 5, 17);
        this.scene.rotate(Math.PI / 3.0, 0, 1, 0);

        this.boardTex.apply();
        this.scene.pushMatrix();
        this.scene.scale(2, 1, 1);
        this.board.display();
        this.scene.popMatrix();

        this.legs.apply();
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

        this.grey.apply();
        this.scene.pushMatrix();
        this.scene.setActiveShader(this.progressShader);
        this.scene.translate(0, -0.15, 0.01);
        this.scene.scale(1.5, 0.2, 1);
        this.progressbar.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);

        this.scene.popMatrix();
    }

    setFillMode() {
        this.board.setFillMode();
        this.support.setFillMode();
        this.progressbar.setFillMode();
        this.plane.setFillMode();
    }

    setLineMode()
    {
        this.board.setLineMode();
        this.support.setLineMode();
        this.progressbar.setLineMode();
        this.plane.setLineMode();
    }
}