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
        this.selectedObject = 0;
        this.wireframe = false;
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

        //------ Applied Material
        this.Material = new CGFappearance(this);
        this.Material.setAmbient(0.1, 0.1, 0.1, 1);
        this.Material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.Material.setSpecular(0.1, 0.1, 0.1, 1);
        this.Material.setShininess(10.0);
        this.Material.loadTexture('images/earth.jpg');
        this.Material.setTextureWrap('REPEAT', 'REPEAT');
        //------

        //------ Textures
        this.texture1 = new CGFtexture(this, 'images/earth.jpg');
        this.texture2 = new CGFtexture(this, 'images/test.png');
        //-------

        this.setUpdatePeriod(50);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayNormals = false;

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

    onWireframeChanged(v) {
        if (v)
            this.objects[this.selectedObject].setLineMode();
        else
            this.objects[this.selectedObject].setFillMode();

    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        //To be done...
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

        this.Material.setTexture(this.texture1);
        this.Material.apply();

        //This sphere does not have defined texture coordinates
        if (this.selectedObject == 0) {
            this.objects[0].display();
            if (this.displayNormals)
                this.objects[0].enableNormalViz();
            else
                this.objects[0].disableNormalViz();
        }else if(this.selectedObject == 1){
            this.objects[1].display();
            if (this.displayNormals)
                this.objects[1].enableNormalViz();
            else
                this.objects[1].disableNormalViz();
        }else if (this.selectedObject == 2){
            this.Material.setTexture(this.texture2);
            this.Material.apply();
            this.objects[2].display();
            if (this.displayNormals)
                this.objects[2].enableNormalViz();
            else
                this.objects[2].disableNormalViz();
        }





        // ---- END Primitive drawing section
    }
}