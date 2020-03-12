/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            -0.5, 0.5, 0.5,	    //A 0
            -0.5, -0.5, 0.5,    //B 1
            0.5, 0.5, 0.5,      //C 2
            0.5, -0.5, 0.5,     //D 3
            0.5, 0.5, -0.5,     //E 4
            0.5, -0.5, -0.5,    //F 5
            -0.5, 0.5, -0.5,    //G 6
            -0.5, -0.5, -0.5    //H 7
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            // ABCD
            0, 1, 2,
            2, 1, 3,

            // EFGH
            4, 5, 6,
            6, 5, 7,

            // ACEG
            2, 4, 0,
            0, 4, 6,

            // CDEF
            3, 4, 2,
            3, 5, 4,

            // BHDF
            1, 7, 3,
            3, 7, 5,

            // ABGH
            0, 6, 1,
            1, 6, 7
        ];

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}

