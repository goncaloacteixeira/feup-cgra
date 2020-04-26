#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler1;

uniform float timeFactor;
uniform float blimpSpeed;

void main() {
    vTextureCoord = aTextureCoord;

    vec3 offset=vec3(0.0,0.0,0.0);

    float height = 0.05 * sin(aVertexPosition.x * 30.0);
    if (blimpSpeed == 0.0)
        offset.z = height * sin((timeFactor * 0.003));
    else
        offset.z = height * sin( (blimpSpeed*100.0) * (timeFactor * 0.003));

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);

}