/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            -1, 1, 0,
            -1, -1, 0,
            1, -1, 0,
            0, 1, 0,

            -1, 1, 0,
            -1, -1, 0,
            1, -1, 0,
            0, 1, 0,
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 1, 3,
            3, 1, 2,

            7, 5, 4,
            6, 5, 7
        ];

        this.normals = [
            0,0,1,
            0,0,1,
            0,0,1,
            0,0,1,

            0,0,-1,
            0,0,-1,
            0,0,-1,
            0,0,-1,
        ];

        this.texCoords=[
            0, 0,
            0, 1,
            1, 1,
            1, 0,

            0, 0,
            0, 1,
            1, 1,
            1, 0,
        ];

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}

