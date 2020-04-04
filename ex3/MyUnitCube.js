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
            // Ordem dos vertices com coordenadas st: visto de frente, (0,0); (1,0); (1,1); (0,1)
            // Face 1 - plano z = 0.5
            -0.5, 0.5, 0.5,     // 0
            0.5, 0.5, 0.5,      // 1
            0.5, -0.5, 0.5,     // 2
            -0.5, -0.5, 0.5,    // 3
            // Face 2 - plano y = 0.5
            -0.5, 0.5, -0.5,      // 4
            0.5, 0.5, -0.5,      // 5
            0.5, 0.5, 0.5,      // 6
            -0.5, 0.5, 0.5,      // 7
            // Face 3 - plano x = 0.5
            0.5, 0.5, 0.5,      // 8
            0.5, 0.5, -0.5,      // 9
            0.5, -0.5, -0.5,      // 10
            0.5, -0.5, 0.5,      // 11
            // Face 4 - plano y = -0.5
            -0.5, -0.5, 0.5,      // 12
            0.5, -0.5, 0.5,      // 13
            0.5, -0.5, -0.5,      // 14
            -0.5, -0.5, -0.5,      // 15
            // Face 5 - plano x = -0.5
            -0.5, 0.5, -0.5,      // 16
            -0.5, 0.5, 0.5,      // 17
            -0.5, -0.5, 0.5,      // 18
            -0.5, -0.5, -0.5,      // 19
            // Face 6 - plano z = -0.5
            0.5, 0.5, -0.5,      // 20
            -0.5, 0.5, -0.5,      // 21
            -0.5, -0.5, -0.5,      // 22
            0.5, -0.5, -0.5,      // 23
        ];

        //Counter-clockwise reference of vertices
        // Usar outros vertices e não só 0-7 para melhorar a iluminação
        this.indices = [
            // Face 1 - plano z = 0.5
            0, 2, 1,
            0, 3, 2,
            // Face 2 - plano y = 0.5
            4, 6, 5,
            4, 7, 6,
            // Face 3 - plano x = 0.5
            8, 10, 9,
            8, 11, 10,
            // Face 4 - plano y = -0.5
            12, 14, 13,
            12, 15, 14,
            // Face 5 - plano x = -0.5
            16, 18, 17,
            16, 19, 18,
            // Face 6 - plano z = -0.5
            20, 22, 21,
            20, 23, 22,
        ];

        this.normals = [
            // Face 1 - plano z = 0.5
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            // Face 2 - plano y = 0.5
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            // Face 3 - plano x = 0.5
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            // Face 4 - plano y = -0.5
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            // Face 5 - plano x = -0.5
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            // Face 6 - plano z = -0.5
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
        ];

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}

