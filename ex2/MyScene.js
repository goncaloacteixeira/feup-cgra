/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.tangram = new MyTangram(this);
        this.unitCube1 = new MyUnitCube(this);
        this.unitCube2 = new MyUnitCubeQuad(this);

        this.table = new MyTable(this);
        this.chair = new MyChair(this);

        //Objects connected to MyInterface
        this.displayAxis = true;

        this.displayUnitCube1 = false;
        this.displayUnitCube2 = false;
        this.displayTangram = false;
        this.displayBase1 = false;
        this.displayBase2 = false;

        this.displayTable = false;
        this.displayChair = false;
        this.displayTableChair = false;

        this.scaleFactor = 1;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
            0.0, this.scaleFactor, 0.0, 0.0,
            0.0, 0.0, this.scaleFactor, 0.0,
            0.0, 0.0, 0.0, 1.0];

        this.multMatrix(sca);

        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();


        if (this.displayUnitCube1) {
            this.unitCube1.display();
        }

        if (this.displayUnitCube2) {
            this.unitCube2.display();
        }

        if (this.displayTangram) {
            this.tangram.display();
        }

        if (this.displayBase1) {
            const factor = 9;
            this.translate(factor/2.0, -factor/2.0, factor/2.0);

            this.pushMatrix();
            this.setDiffuse(0.5,0.2, 0);
            this.scale(factor, factor, factor);
            this.unitCube1.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(0,factor/2.0+0.01,0);
            this.rotate(-90.0*Math.PI/180.0, 1, 0, 0);
            this.tangram.display();
            this.popMatrix();
        }

        if (this.displayBase2) {
            const factor = 9;
            this.translate(factor/2.0, -factor/2.0, factor/2.0);

            this.pushMatrix();
            this.setDiffuse(0.8,0.3, 1);
            this.scale(factor, factor, factor);
            this.unitCube2.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(0,factor/2.0+0.01,0);
            this.rotate(-90.0*Math.PI/180.0, 1, 0, 0);
            this.tangram.display();
            this.popMatrix();
        }

        if (this.displayTable) {
            this.table.display();
        }

        if (this.displayChair) {
            this.chair.display();
        }

        if (this.displayTableChair) {
            this.table.display();
            this.pushMatrix();
            this.translate(-10,1.8,0);
            this.chair.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(10,1.8,0);
            this.rotate(Math.PI, 0, 1, 0);
            this.chair.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(-3.5,1.8,5);
            this.rotate(Math.PI/2.0, 0, 1, 0);
            this.chair.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(3.5,1.8,5);
            this.rotate(Math.PI/2.0, 0, 1, 0);
            this.chair.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(-3.5,1.8,-5);
            this.rotate(-Math.PI/2.0, 0, 1, 0);
            this.chair.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(3.5,1.8,-5);
            this.rotate(-Math.PI/2.0, 0, 1, 0);
            this.chair.display();
            this.popMatrix();
        }

        this.setDefaultAppearance();
    }
}