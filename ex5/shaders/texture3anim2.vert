
attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

uniform float normScale;
uniform float amplitude;    // something to play with on EX1.2

void main() {
    vec3 offset=vec3(0.0,0.0,0.0);

    vTextureCoord = aTextureCoord;

    if (texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord).b > 0.5)
    offset=aVertexNormal*normScale*0.1*sin(timeFactor);

    // offset to change the x-value giving the object a translation effect
    vec3 offset2 = vec3(0.0, 0.0, 0.0);
    offset2.x = amplitude*sin(timeFactor);

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset + offset2, 1.0);
}

