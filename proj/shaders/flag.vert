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

    vec3 offset  = vec3(0.0,0.0,0.0);


    if (blimpSpeed == 0.0)
        offset.z = 0.2 * sin(-aVertexPosition.x + (timeFactor * 0.003)) * (aVertexPosition.x + 0.5);
    else
        offset.z = 0.2 * sin(-aVertexPosition.x + (blimpSpeed*100.0) * (timeFactor * 0.003)) * (aVertexPosition.x + 0.5);

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);

}