#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler1;
uniform sampler2D uSampler2;

uniform float timeFactor;

void main() {
    vec2 movementCoords = mod(vTextureCoord + timeFactor*0.005, 1.0);

    vec4 color = texture2D(uSampler1, movementCoords);

    vec4 filt = texture2D(uSampler2, movementCoords);

    color.b -= color.b * filt.b * 0.2;
    color.r -= color.r * filt.b * 0.2;
    color.g -= color.g * filt.b * 0.2;

    gl_FragColor = color;
}