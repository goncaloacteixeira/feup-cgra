#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform int drops;

void main() {
    float edge = 1.0/5.0*float(drops);

    if (vTextureCoord.x >= edge)
        gl_FragColor = vec4(0.1, 0.1, 0.1, 1);
    else {
        gl_FragColor.rgb =  vec3(1.0 - vTextureCoord.x, vTextureCoord.x, 0.0);
        gl_FragColor.a = 1.0;
    }
}