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

    //vec3 offset = aVertexNormal * 0.01 * sin(blimpSpeed+timeFactor*0.005);

    vec3 offset=vec3(0.0,0.0,0.0);
    //offset.z = 0.1 * sin(blimpSpeed + (aVertexPosition.s) * (timeFactor * 0.005));

    float height = 0.05 * sin(aVertexPosition.x * 30.0);
    offset.z = height * sin((timeFactor * 0.005));

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}