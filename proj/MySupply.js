const SupplyStates = {
    INACTIVE: 0,
    FALLING: 1,
    LANDED: 2
};

class MySupply extends CGFobject {
    constructor(scene) {
        super(scene);
        this.box = new MyUnitCubeQuad(this.scene);
        this.state = SupplyStates.FALLING; // TODO - trocar para INACTIVE quando terminar a modelação

        this.package = new MyUnitCubeQuad(this.scene);
        this.initMaterials();
    }

    initMaterials() {
        this.texture = new CGFappearance(this.scene);
        this.texture.setAmbient(0.3, 0.3, 0.3, 1);
        this.texture.setDiffuse(0.4, 0.4, 0.4, 1);
        this.texture.setSpecular(0.1, 0.1, 0.1, 1);
        this.texture.setShininess(10.0);
        this.texture.loadTexture('images/supply/crate2.png');
        this.texture.setTextureWrap('REPEAT', 'REPEAT');

        this.packageTex = new CGFappearance(this.scene);
        this.packageTex.setAmbient(0.3, 0.3, 0.3, 1);
        this.packageTex.setDiffuse(0.4, 0.4, 0.4, 1);
        this.packageTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.packageTex.setShininess(10.0);
        this.packageTex.loadTexture('images/goodyear_yellow.jpg'); // apenas para exemplo (TODO - Melhorar)
        this.packageTex.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.texture.apply();
        if (!this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        this.scene.pushMatrix();
        this.scene.translate(0, 5, 0); // TODO - retirar no fim
        this.box.display(this.state);
        this.scene.popMatrix();

        if (this.state === SupplyStates.LANDED) {
            this.packageTex.apply();
            if (!this.scene.linear)
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
            else
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
            this.scene.pushMatrix();
            this.scene.translate(0, 4.85, 0);
            this.scene.scale(0.7, 0.7, 0.7);
            this.package.display(1);
            this.scene.popMatrix();
        }
    }
}

