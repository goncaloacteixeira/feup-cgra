/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            -1, 0, 0,
            0, 1, 0,
            1, 0, 0
        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 1, 2,
            2, 1, 0
        ];

        this.normals = [
            0,0,1,
            0,0,1,
            0,0,1,
        ];

        // triangulo pequeno vermelho
        this.texCoords=[
            0.25, 0.75,
            0.5, 0.5,
            0.75, 0.75,
        ];

        // triangulo pequeno roxo
        this.texCoords=[
            0, 0,
            0.25, 0.25,
            0, 0.5,
        ];


        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}

