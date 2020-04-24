/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
        this.texture = null;
        this.appearance = null;

        // initial configuration of interface
        this.selectedObject = 2;
        this.selectedTexture = 0;
        this.wireframe = false;
        this.displayVehicle = true;
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
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);

        this.objects=[
            new MySphere(this, 16, 8),
            new MyCylinder(this, 6),
            new MyCubeMap(this),
        ];

        // Object interface variables
        this.objectList = {
            'Sphere': 0,
            'Cylinder': 1,
            'Cube Map' : 2,
        };

        this.vehicle = new MyVehicle(this, 4);

        //------ Applied Material
        this.Material = new CGFappearance(this);
        this.Material.setAmbient(0.1, 0.1, 0.1, 1);
        this.Material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.Material.setSpecular(0.1, 0.1, 0.1, 1);
        this.Material.setShininess(10.0);
        this.Material.loadTexture('images/earth.jpg');  //TODO mudar para earth no fim de testar
        this.Material.setTextureWrap('REPEAT', 'REPEAT');
        //------

        //------ Textures
        this.textures = [
            new CGFtexture(this, 'images/earth.jpg'),
            new CGFtexture(this, 'images/test.png'),
            new CGFtexture(this, 'images/mountain.png'),
            new CGFtexture(this, 'images/cubemap.png')
        ];
        this.textureList = {
            'Earth' : 0,
            'Test' : 1,
            'Mountain' : 2,
            'CubeMap' : 3,
        };
        //-------

        this.setUpdatePeriod(1000/60);  // 60Hz

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayNormals = false;

        this.scaleFactor = 1;
        this.speedFactor = 1;
    }

    checkKeys() {
        let keysPressed = false;

        // keycodes => https://keycode.info/
        if (this.gui.isKeyPressed("KeyW") && !this.vehicle.autopilot) {
            this.vehicle.accelerate(0.005 * this.speedFactor);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyS") && !this.vehicle.autopilot) {
            this.vehicle.accelerate(-0.005 * this.speedFactor);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyA") && !this.vehicle.autopilot) {
            this.vehicle.turn(3);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyD") && !this.vehicle.autopilot) {
            this.vehicle.turn(-3);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyR")) {
            this.vehicle.reset();
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyP") && !this.vehicle.autopilot) {
            this.vehicle.activateAutopilot();
            keysPressed = true;
        }


        if (keysPressed)
            this.vehicle.update();
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

    // called when a new object is selected
    onSelectedObjectChanged(v) {
        // update wireframe mode when the object changes
        this.onWireframeChanged(this.wireframe);
    }

    onSelectedTextureChanged(v) {
        // update wireframe mode when the object changes
        this.Material.setTexture(this.textures[this.selectedTexture]);
    }

    onWireframeChanged(v) {
        if (v) {
            this.objects[this.selectedObject].setLineMode();
            this.vehicle.setLineMode();
        }

        else {
            this.vehicle.setFillMode();
            this.objects[this.selectedObject].setFillMode();
        }

    }

    //Function that resets selected texture in quadMaterial
    updateAppliedTexture() {
        this.Material.setTexture(this.textures[this.selectedTexture]);
    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t) {
        this.checkKeys();
        this.vehicle.update();
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
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();

        //This sphere does not have defined texture coordinates

        if (this.displayNormals)
            this.objects[this.selectedObject].enableNormalViz();
        else
            this.objects[this.selectedObject].disableNormalViz();

        if (this.displayVehicle) {
            this.translate(this.vehicle.x, 0, this.vehicle.z);
            this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
            this.translate(-this.vehicle.x, 0, -this.vehicle.z);
            this.vehicle.display();
        }

        this.popMatrix();

        if(this.selectedObject == 2)
        {
            this.Material.apply();
            this.updateAppliedTexture();
        }
        this.objects[this.selectedObject].display();



        // ---- END Primitive drawing section
    }
}