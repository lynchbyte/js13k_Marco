
import * as TZ from "three" 

import { skyShaderArr, removeFadeOut } from './script.js' 

export async function loadShaders() {

    //SKY
    const resultV_sky = await fetch('media/sh/sky/vert.glsl') 
    const vertsh_sky = await resultV_sky.text() 
    const resultF_sky = await fetch('media/sh/sky/frag.glsl') 
    const fragsh_sky = await resultF_sky.text() 

    const materialsky = new TZ.ShaderMaterial({

        vertexShader: vertsh_sky,
        fragmentShader: fragsh_sky,
        side: 2,
        transparent:true,
    })
   
    skyShaderArr.push(materialsky) 

    const blackOutElement = document.querySelector('.blackout') 
    removeFadeOut(blackOutElement, 3000) 

}