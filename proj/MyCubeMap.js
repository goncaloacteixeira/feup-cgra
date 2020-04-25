/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 *
 */
class MyCubeMap extends CGFobject {
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
            1, 2, 0,
            0, 2, 3,
            // Face 2 - plano y = 0.5
            4, 5, 6,
            4, 6, 7,
            // Face 3 - plano x = 0.5
            8, 9, 10,
            8, 10, 11,
            // Face 4 - plano y = -0.5
            12, 13, 14,
            12, 14, 15,
            // Face 5 - plano x = -0.5
            16, 17, 18,
            16, 18, 19,
            // Face 6 - plano z = -0.5
            20, 21, 22,
            20, 22, 23,
        ];

        this.normals = [
            // Face 1 - plano z = 0.5
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            // Face 2 - plano y = 0.5
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            // Face 3 - plano x = 0.5
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            // Face 4 - plano y = -0.5
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            // Face 5 - plano x = -0.5
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            // Face 6 - plano z = -0.5
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
        ];

        this.texCoords=[
            // Face 1 - Back Face
            1.00, (0.335), // sup dir (dim est para direita)  // sup dir (aum est para cima)
            0.75, (0.335), // sup esq (aum est para esquerda) // sup esq (aum est para cima)
            0.75, (0.664), // inf esq (aum est para esquerda) // inf esq (dim est para baixo)
            1.00, (0.664), // inf dir (dim est para direita)  // ind dir (dim est para baixo)
            // Face 2 - Top Face
            0.251, (0.332), // inf esq (aum est para esquerda) // inf esq (dim est para baixo)
            0.499, (0.332), // inf dir (dim est para direita)  // inf dir (dim est para baixo)
            0.499, 0.002,  // sup dir (dim est para direita)  // sup dir (aum est para cima)
            0.251, 0.002,  // sup esq (aum est para esquerda)  // sup esq (aum esr para cima)
            // Face 3 - Right Face
            0.75, (0.335),
            0.50, (0.335),
            0.50, (0.664),
            0.75, (0.664),
            // Face 4 - Bottom Face
            0.26, 0.99,  // xx inf esq (aumentar estica para xx neg) / zz inf esq (dim estica para zz pos)
            0.49, 0.99,  // xx inf dir (dim est xx neg) / zz inf dir (dim est zz pos)
            0.49, (0.664), // xx sup dir (dim est xx pos) / zz sup dir (aum est zz neg)
            0.26, (0.664), // xx sup esq (aum est xx neg) / zz sup esq (aum est zz neg)
            // Face 5 - Left Face
            0.25, (0.335),
            0.00, (0.335),
            0.00, (0.663),
            0.25, (0.664),
            // Face 6 - Front Face
            0.50, (0.335),
            0.25, (0.335),
            0.25, (0.664),
            0.50, (0.664),

        ];

        //The defined indices (and corresponding vertices)
        //will be read in groups of three to draw triangles
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }

    display() {
        // TODO: Pôr setDiffuse tudo a 0 quando não se estiver a testar
        this.scene.setDiffuse(0.5,0.5,0.5);
        this.scene.setSpecular(0, 0, 0, 1);
        this.scene.setAmbient(1, 1, 1, 1);

        this.scene.pushMatrix();
        this.scene.scale(50,50,50);
        super.display();
        this.scene.popMatrix();
    }

    setFillMode() {
        this.primitiveType=this.scene.gl.TRIANGLES;
    }

    setLineMode()
    {
        this.primitiveType=this.scene.gl.LINE_STRIP;
    };
}

