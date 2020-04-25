
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
    }


    display() {
        if (this.state === SupplyStates.FALLING) {
            this.scene.pushMatrix();
            this.scene.translate(0, 5, 0);
            this.box.display(/* adicionar aqui o state que vai fazer a caixa ser desenhada normalmente */);
            this.scene.popMatrix();
        }
        else if (this.state === SupplyStates.LANDED) {
            this.scene.pushMatrix();
            this.scene.translate(0, 5, 0);
            this.box.display(/* adicionar aqui o state que vai fazer a caixa ser desenhada aberta */);
            this.scene.popMatrix();
        }
    }
}

