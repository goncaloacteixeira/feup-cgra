class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);

        this.terrainShader = new CGFshader(scene.gl, 'shaders/terrain.vert', 'shaders/terrain.frag');
        this.texture1 = new CGFtexture(scene, 'images/shader_images/terrain3.png');
        this.texture2 = new CGFtexture(scene, 'images/shader_images/heightmap3_square.png');

        this.terrainShader.setUniformsValues({ uSampler1: 1});
        this.terrainShader.setUniformsValues({ uSampler2: 2});
        this.plane = new MyPlane(scene, 20);
    }

    display() {
        this.scene.setActiveShader(this.terrainShader);
        this.scene.pushMatrix();

        this.texture1.bind(1);
        this.texture2.bind(2);

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 2.0, 1, 0, 0);
        this.scene.scale(50, 50, 50);
        this.plane.display();

        this.scene.popMatrix();

        // restore default shader (will be needed for drawing the axis in next frame)
        this.scene.setActiveShader(this.scene.defaultShader);
    }

    setFillMode() {
        this.plane.setFillMode();
    }

    setLineMode()
    {
        this.plane.setLineMode();

    };
}