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

    }

    initMaterials(scene){
        // Tangram texture
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
    }

    display(v) {
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
        if (this.scene.gui.isKeyPressed("KeyD") || v)
            this.scene.rotate(Math.PI / 9.0, 0, 1, 0);
        if (this.scene.gui.isKeyPressed("KeyA"))
            this.scene.rotate(-Math.PI / 9.0, 0, 1, 0);
        this.rudder.display();
        this.scene.popMatrix();

        // Moving Rudder
        this.scene.pushMatrix();
        this.scene.translate(0, -0.25, -0.7);
        if (this.scene.gui.isKeyPressed("KeyD") || v)
            this.scene.rotate(Math.PI / 9.0, 0, 1, 0);
        if (this.scene.gui.isKeyPressed("KeyA"))
            this.scene.rotate(-Math.PI / 9.0, 0, 1, 0);
        this.rudder.display();
        this.scene.popMatrix();

        // Flag Side 1
        this.scene.pushMatrix();
        this.scene.translate(0,0,-2.5);
        this.scene.scale(1,0.5,1.3);
        this.scene.rotate(-90*Math.PI/180.0,0,1,0);
        this.flag.display();
        this.scene.popMatrix();

        // Flag Side 2
        this.scene.pushMatrix();
        this.scene.translate(0,0,-2.5);
        this.scene.scale(1,0.5,1.3);
        this.scene.rotate(90*Math.PI/180.0,0,1,0);
        this.flag.display();
        this.scene.popMatrix();
    }

    setFillMode() {this.primitiveType=this.scene.gl.TRIANGLES;}
    setLineMode() {this.primitiveType=this.scene.gl.LINE_STRIP;};
}


