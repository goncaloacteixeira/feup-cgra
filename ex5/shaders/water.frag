#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler1;
uniform sampler2D uSampler2;

void main() {
    vec4 color = texture2D(uSampler1, vTextureCoord);

    color.r -= (1.0 - texture2D(uSampler2, vTextureCoord).r) - 0.6;
    color.g -= (1.0 - texture2D(uSampler2, vTextureCoord).r) - 0.6;
    color.b -= (1.0 - texture2D(uSampler2, vTextureCoord).r) - 0.6;

    gl_FragColor = color;
}