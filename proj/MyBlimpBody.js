/**
 * MyBlimpBody
 * @constructor
 */
class MyBlimpBody extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initMaterials(scene);
        this.scene = scene;
        this.body = new MySphere(scene, 16, 8);
        this.gondola = new MyGondola(scene);
        this.rudder = new MyRudder(scene);
        this.propeller = new MyPropeller(scene);
        this.flag = new MyPlane(scene, 20);
        this.support = new MyUnitCubeQuad(scene);
        this.time = 0;

        this.waveshader = new CGFshader(scene.gl, 'shaders/flag.vert', 'shaders/flag.frag');
        this.waveshader_inv = new CGFshader(scene.gl, 'shaders/flag_inv.vert', 'shaders/flag.frag');

        this.waveshader.setUniformsValues({blimpSpeed: 0});
        this.waveshader_inv.setUniformsValues({blimpSpeed: 0});
        this.waveshader.setUniformsValues({timeFactor: this.time});
        this.waveshader_inv.setUniformsValues({timeFactor: this.time});
        this.waveshader.setUniformsValues({uSampler1: 1})
    }

    initMaterials(scene){
        this.bodyTex = new CGFappearance(this.scene);
        this.bodyTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.bodyTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bodyTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.bodyTex.setShininess(10.0);
        this.bodyTex.loadTexture('images/goodyear.jpg');
        this.bodyTex.setTextureWrap('REPEAT', 'REPEAT');

        this.bluecolorTex = new CGFappearance(this.scene);
        this.bluecolorTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.bluecolorTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bluecolorTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.bluecolorTex.setShininess(10.0);
        this.bluecolorTex.loadTexture('images/goodyear_blue.jpg');
        this.bluecolorTex.setTextureWrap('REPEAT', 'REPEAT');

        this.yellowcolorTex = new CGFappearance(this.scene);
        this.yellowcolorTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.yellowcolorTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.yellowcolorTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.yellowcolorTex.setShininess(10.0);
        this.yellowcolorTex.loadTexture('images/goodyear_yellow.jpg');
        this.yellowcolorTex.setTextureWrap('REPEAT', 'REPEAT');

        this.flagTex = new CGFappearance(this.scene);
        this.flagTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.flagTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.flagTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.flagTex.setShininess(10.0);
        this.flagTex.loadTexture('images/goodyear_flag.png');
        this.flagTex.setTextureWrap('REPEAT', 'REPEAT');

        this.normal = new CGFappearance(this.scene);

        this.flagtexx = new CGFtexture(this.scene, 'images/goodyear_flag.png');
    }

    update(elapsedTime, blimpspeed)
    {
        this.time += elapsedTime;
        this.waveshader.setUniformsValues({timeFactor: this.time});
        this.waveshader_inv.setUniformsValues({timeFactor: this.time});
        this.waveshader.setUniformsValues({blimpSpeed: blimpspeed});
        this.waveshader_inv.setUniformsValues({blimpSpeed: blimpspeed});
    }

    display(autopilot) {
        // TODO: Pôr setDiffuse tudo a 0 quando não se estiver a testar
        this.scene.setDiffuse(0,0,1);

        this.bodyTex.apply();
        // Blimp Baloon
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,1);
        this.body.display();
        this.scene.popMatrix();

        this.bluecolorTex.apply();
        //Gondola
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.scale(0.1,0.1,0.1);
        this.gondola.display();
        this.scene.popMatrix();

        //Propeller 1
        this.scene.pushMatrix();
        this.scene.translate(-0.12, -0.55, -0.30);
        this.scene.rotate(this.scene.vehicle.propellerangle, 0, 0, 1);
        this.scene.scale(0.012, 0.012, 0.012);
        this.propeller.display();
        this.scene.popMatrix();

        // Propeller 2
        this.scene.pushMatrix();
        this.scene.translate(0.12, -0.55, -0.30);
        this.scene.rotate(this.scene.vehicle.propellerangle, 0, 0, 1);
        this.scene.scale(0.012, 0.012, 0.012);
        this.propeller.display();
        this.scene.popMatrix();

        this.yellowcolorTex.apply();

        // Propeller Motor
        this.scene.pushMatrix();
        this.scene.translate(0.12, -0.55, -0.2)
        this.scene.scale(0.045,0.045,0.1);
        this.body.display();
        this.scene.popMatrix();

        // Propeller Motor
        this.scene.pushMatrix();
        this.scene.translate(-0.12, -0.55, -0.2)
        this.scene.scale(0.045,0.045,0.1);
        this.body.display();
        this.scene.popMatrix();

        // Static Rudder
        this.scene.pushMatrix();
        this.scene.translate(0.25, 0, -0.7);
        this.scene.rotate(90*Math.PI/180.0, 0, 0, 1);
        this.rudder.display();
        this.scene.popMatrix();

        // Static Rudder
        this.scene.pushMatrix();
        this.scene.translate(-0.25, 0, -0.7);
        this.scene.rotate(90*Math.PI/180.0, 0, 0, 1);
        this.rudder.display();
        this.scene.popMatrix();

        // Moving Rudder
        this.scene.pushMatrix();
        this.scene.translate(0, 0.25, -0.7);
        if (autopilot)
            this.scene.rotate(Math.PI / 9.0, 0, 1, 0);
        else {
            if (this.scene.gui.isKeyPressed("KeyD"))
                this.scene.rotate(Math.PI / 9.0, 0, 1, 0);
            if (this.scene.gui.isKeyPressed("KeyA"))
                this.scene.rotate(-Math.PI / 9.0, 0, 1, 0);
        }
        this.rudder.display();
        this.scene.popMatrix();

        // Moving Rudder
        this.scene.pushMatrix();
        this.scene.translate(0, -0.25, -0.7);
        if (autopilot)
            this.scene.rotate(Math.PI / 9.0, 0, 1, 0);
        else {
            if (this.scene.gui.isKeyPressed("KeyD"))
                this.scene.rotate(Math.PI / 9.0, 0, 1, 0);
            if (this.scene.gui.isKeyPressed("KeyA"))
                this.scene.rotate(-Math.PI / 9.0, 0, 1, 0);
        }
        this.rudder.display();
        this.scene.popMatrix();

        if (this.scene.displayFlag === true) {
            // Flag Side 1
            this.scene.setActiveShader(this.waveshader_inv);
            this.scene.pushMatrix();
            this.flagtexx.bind();

            this.scene.translate(0,0,-2.5);
            this.scene.scale(1,0.5,1.3);
            this.scene.rotate(-90*Math.PI/180.0,0,1,0);
            this.flag.display();
            this.scene.popMatrix();
            this.scene.setActiveShader(this.scene.defaultShader);

            // Flag Side 2
            this.waveshader.setUniformsValues({uSampler1: 0})
            this.scene.setActiveShader(this.waveshader);
            this.scene.pushMatrix();
            this.scene.translate(0,0,-2.5);
            this.scene.scale(1,0.5,1.3);
            this.scene.rotate(90*Math.PI/180.0,0,1,0);
            this.flag.display();
            this.scene.popMatrix();
            this.scene.setActiveShader(this.scene.defaultShader);

            // String Holder 1
            this.scene.pushMatrix();
            this.scene.translate(0, 0, -1);
            this.scene.rotate(16 * Math.PI / 180.0, 1, 0, 0);
            this.scene.scale(0.005, 0.005, 1.8);
            this.support.display(1);
            this.scene.popMatrix();

            // String Holder 1
            this.scene.pushMatrix();
            this.scene.translate(0, 0, -1);
            this.scene.rotate(-16 * Math.PI / 180.0, 1, 0, 0);
            this.scene.scale(0.005, 0.005, 1.8);
            this.support.display(1);
            this.scene.popMatrix();
        }


    }

    setFillMode() {this.primitiveType=this.scene.gl.TRIANGLES;}

    setLineMode() {this.primitiveType=this.scene.gl.LINE_STRIP;};
}


