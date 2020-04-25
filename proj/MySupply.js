
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
        this.box = new MyUnitCubeQuad(this.scene);
        this.state = SupplyStates.FALLING; // TODO - trocar para INACTIVE quando terminar a modelação
    }


    update(elapsedtime) {
        if (this.state === SupplyStates.FALLING){
            // Se chegou ao fim, chamar land

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

    }

    /**
     * a ser chamada quando a animação de queda termina, para determinar
     * se atingiu o plano XZ (Y=0) ou não. Se isto se verificar, deve transitar de
     * FALLING para LANDED.
     */
    land(){

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

