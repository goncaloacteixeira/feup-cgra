/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'displayTangram').name('Tangram');
        this.gui.add(this.scene, 'displayUnitCube1').name('Unit Cube1');
        this.gui.add(this.scene, 'displayUnitCube2').name('Unit Cube2');
        this.gui.add(this.scene, 'displayBase1').name('Base 1');
        this.gui.add(this.scene, 'displayBase2').name('Base 2');

        this.gui.add(this.scene, 'displayChair').name('Chair');
        this.gui.add(this.scene, 'displayTable').name('Table');
        this.gui.add(this.scene, 'displayTableChair').name('Table Chair');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}