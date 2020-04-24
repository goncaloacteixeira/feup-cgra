/**
 * MyRudder
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyRudder extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            0, 0, 0,	//0
            0, 0.125, -0.21,	//1
            0, 0.125, -0.46,	//2
            0, -0.125, -0.46,	//3
            0, -0.125, -0.21,	//4

            0, 0, 0,	//0
            0, 0.125, -0.21,	//1
            0, 0.125, -0.46,	//2
            0, -0.125, -0.46,	//3
            0, -0.125, -0.21,	//4

        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 4, 1,
            1, 4, 3,
            1, 3, 2,

            6, 9, 5,
            8, 9, 6,
            7, 8, 6,
        ];

        this.normals = [
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,

            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
        ];

        this.texCoords=[
            0, 0,
            0.5, 0,
            1, 0,
            1, 1,
            0, 1,

            0, 0,
            0.5, 0,
            1, 0,
            1, 1,
            0, 1,
        ];


        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}