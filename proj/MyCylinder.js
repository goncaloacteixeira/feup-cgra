/**
 * MyCylinder
 * @constructor
 */
class MyCylinder extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords=[];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;
        var textmap = 0;
        var textmapadd = 1/this.slices;

        // nº arestas = nº slices = nº faces
        for(var i = 0; i <= this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals
            // in each face will be different

            var sa=Math.sin(ang); // valor para z
            var ca=Math.cos(ang); // valor para x

            this.vertices.push(ca, 0, -sa); // ZX plane face
            this.texCoords.push(textmap, 1);
            this.vertices.push(ca, 1, -sa); // Y=1 plane face
            this.texCoords.push(textmap, 0);
            this.normals.push(ca, 0, -sa, ca, 0, -sa);

            if (i!==0){
                // criar triangulos
                this.indices.push((i*2), (i*2+1), (i*2-1));
                this.indices.push((i*2), (2*i-1), (2*i-2));
            }
            ang+=alphaAng;
            textmap+=textmapadd;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }

    setFillMode() {
        this.primitiveType=this.scene.gl.TRIANGLES;
    }

    setLineMode()
    {
        this.primitiveType=this.scene.gl.LINE_STRIP;
    };
}


