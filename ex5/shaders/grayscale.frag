#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

void main() {

    vec4 color = texture2D(uSampler, vTextureCoord);

    // Convert every channel to a L = 0.299R + 0.587G + 0.114B

    vec4 grayscale = color;
    grayscale.r = color.r * 0.299 + color.g *0.587 + color.b * 0.114;
    grayscale.g = color.r * 0.299 + color.g *0.587 + color.b * 0.114;
    grayscale.b = color.r * 0.299 + color.g *0.587 + color.b * 0.114;

    gl_FragColor = grayscale;
}