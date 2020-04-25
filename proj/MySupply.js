const SupplyStates = {
    INACTIVE: 0,
    FALLING: 1,
    LANDED: 2
};

/**
 * "L" lança um mantimento
 * Deverá demorar 3 segundos a atingir o plano XZ
 * "R" remove os mantimentos da cena e disponibiliza-os para novos lançamentos
 */
class MySupply extends CGFobject {
    constructor(scene) {
        super(scene);
        this.y = 9;
        this.x = 0;
        this.z = 0;
        this.passedtime = 0;
        this.box = new MyUnitCubeQuad(this.scene);
        this.state = SupplyStates.INACTIVE; // TODO - trocar para INACTIVE quando terminar a modelação
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

    update(elapsedtime) {
        if (this.state === SupplyStates.FALLING){
            // Se chegou ao fim, chamar land
            this.passedtime += elapsedtime;
            this.y = 9 - (this.passedtime * 0.0027);
            if (this.y <= 0.4)
                this.land();
        }
    }

    /**
     * Usada ao clicar "L"
     *
     * para transitar de INACTIVE para FALLING e começar a
     * animação de queda a partir da dropPosition (posição atual do dirígivel)
     * @param dropx  valor inicial de x para drop
     * @param dropz  valor inicial de z para drop
     */
    drop(dropx, dropz){
        this.state = SupplyStates.FALLING;
        this.x = dropx;
        this.z = dropz;
    }

    /**
     * a ser chamada quando a animação de queda termina, para determinar
     * se atingiu o plano XZ (Y=0) ou não. Se isto se verificar, deve transitar de
     * FALLING para LANDED.
     */
    land(){
        this.y = 0.6;
        this.state = SupplyStates.LANDED;
        this.scene.billboard.updateBillboard();
    }

    display() {
        this.texture.apply();
        if (!this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        else
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        this.scene.pushMatrix();
        if (this.state === SupplyStates.LANDED)
            this.scene.translate(0, -0.09, 0);
        this.scene.translate(this.x, this.y, this.z); // TODO - retirar no fim
        this.box.display(this.state);
        this.scene.popMatrix();

        if (this.state === SupplyStates.LANDED) {
            this.packageTex.apply();
            if (!this.scene.linear)
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
            else
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.y - 0.23, this.z);
            this.scene.scale(0.7, 0.7, 0.7);
            this.package.display(1);
            this.scene.popMatrix();
        }
    }
}

