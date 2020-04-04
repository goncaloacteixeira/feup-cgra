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
uniform sampler2D uSampler;
uniform sampler2D uSampler2;

uniform float timeFactor;

void main() {
    vTextureCoord = aTextureCoord;
    vec3 offset = aVertexNormal * texture2D(uSampler2, vTextureCoord).b * 0.05;

    vec3 offset2 = aVertexNormal * texture2D(uSampler2, vTextureCoord + sin(timeFactor*0.005)).b * 0.05;


    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset + offset2, 1.0);
}

