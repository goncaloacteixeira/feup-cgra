/**
* MyVehicle
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.scene = scene;

        this.body = new MyBlimpBody(this.scene);

        this.angle = 0;
        this.speed = 0;
        this.propellerangle = 0;
        this.x = 0; this.y = 10; this.z = 0;
        this.autopilot = false;
        this.autopilotAngle = 0;
        this.centerX = 0;
        this.centerZ = 0;
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for (var i = 0; i < this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);

            this.vertices.push(0,2,0);
            this.vertices.push(ca, 0, -sa);
            this.vertices.push(caa, 0, -saa);

            // triangle normal computed by cross product of two edges
            var normal= [
                saa-sa,
                ca*saa-sa*caa,
                caa-ca
            ];

            // normalization
            var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
                );
            normal[0]/=nsize;
            normal[1]/=nsize;
            normal[2]/=nsize;

            // push normal once for each vertex of this triangle
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);

            this.indices.push(3*i, (3*i+1) , (3*i+2) );

            ang+=alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    activateAutopilot() {
        this.autopilot = true;
        this.speed = 0.1;
        this.autopilotAngle = (this.angle - 90.0) * Math.PI / 180.0;
        this.centerX = this.x + Math.sin(this.autopilotAngle) * 5.0;
        this.centerZ = this.z + Math.cos(this.autopilotAngle) * 5.0;
    }
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }

    update(elapsedTime) {
        if (this.autopilot) {
            this.autopilotAngle += 2*Math.PI*elapsedTime/5000.0;
            let deltaAngle = 2.0*Math.PI*elapsedTime/5000.0;
            this.angle -= deltaAngle * 180.0 / Math.PI;

            this.x -= this.centerX;
            this.z -= this.centerZ;
            let x = this.x * Math.cos(deltaAngle) - this.z*Math.sin(deltaAngle);
            let z = this.x * Math.sin(deltaAngle) + this.z*Math.cos(deltaAngle);
            this.x = x + this.centerX;
            this.z = z + this.centerZ;
        }
        else {
            this.z += 0.1 * elapsedTime * this.speed * Math.cos(this.angle*Math.PI/180.0);
            this.x += 0.1 * elapsedTime * this.speed * Math.sin(this.angle*Math.PI/180.0);
        }
        this.propellerangle += 25 * this.speed;
        this.body.update(elapsedTime, this.speed);
    }

    turn(val) {
        this.angle += val;
    }

    accelerate(val) {
        this.speed += val;
        if (this.speed < 0) this.speed = 0;
        this.body.waveshader.setUniformsValues({blimpSpeed: this.speed});
    }

    reset() {
        this.x = 0;
        this.z = 0;
        this.speed = 0;
        this.angle = 0;
        this.autopilot = false;
        this.autopilotAngle = 0;
        this.scene.billboard.resetBillboard();
    }

    display() {
        // TODO: Pôr setDiffuse tudo a 0 quando não se estiver a testar
        this.scene.pushMatrix();

        this.scene.translate(this.x, this.y, this.z);           // update da posição
        this.scene.rotate(this.angle*Math.PI/180.0, 0, 1, 0);   // roda sobre si mesmo
        this.body.display(this.autopilot);

        this.scene.popMatrix();
    }

    setFillMode() {
        this.primitiveType=this.scene.gl.TRIANGLES;
    }

    setLineMode() {
        this.primitiveType=this.scene.gl.LINE_STRIP;
    };
}


