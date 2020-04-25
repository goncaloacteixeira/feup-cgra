const SupplyStates = {
    INACTIVE: 0,
    FALLING: 1,
    LANDED: 2
};

class MySupply extends CGFobject {
    constructor(scene) {
        super(scene);
        this.box = new MyUnitCubeQuad(this.scene);
        this.state = SupplyStates.LANDED; // TODO - trocar para INACTIVE quando terminar a modelação

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
    }

    display() {
        this.texture.apply();
        if (!this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        this.scene.pushMatrix();
        this.scene.translate(0, 5, 0);
        this.box.display(this.state);
        this.scene.popMatrix();
    }
}

