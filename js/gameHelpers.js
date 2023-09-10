import * as TZ from "three" 

import { scene, clickable, castleGroupParent } from './script.js' 

export function createText(message, height, font, hov = false) {

    const canvas = document.createElement('canvas') 
    const context = canvas.getContext('2d') 
    let metrics = null 
    const textHeight = 100 
    context.font = 'normal ' + textHeight + 'px ' + font 
    metrics = context.measureText(message) 
    const textWidth = metrics.width 
    canvas.width = textWidth 
    canvas.height = textHeight 
    canvas.border = '10px solid blue' 
    context.font = 'normal ' + textHeight*0.75 + 'px ' + font 
    context.textAlign = 'center' 
    context.textBaseline = 'middle' 
    //context.fillStyle = 'blue'//'#e6e6ff' //background

   context.fillText(message, textWidth / 2, textHeight / 2)

    const texture = new TZ.Texture(canvas) 
    texture.needsUpdate = true 

    const material = new TZ.MeshStandardMaterial({
        //color: 0x000000,//text color
        side: TZ.DoubleSide,
        map: texture,
        transparent: true
        // transparent: false,
        // alphaTest:0.5
    }) 
    const geometry = new TZ.PlaneGeometry(
        (height * textWidth) / textHeight,
        height
    ) 
    const plane = new TZ.Mesh(geometry, material) 
    if (hov == true){
    clickable.push(plane) 
    }
    return plane 

}

export function makeButtonMesh(x, y, z, color) {

    const geometry = new TZ.BoxGeometry(x, y, z) 
    const material = new TZ.MeshStandardMaterial({ color: color }) 
    const buttonMesh = new TZ.Mesh(geometry, material) 

    return buttonMesh 

}


export function removeOb(name, parent) {

    let ob = sgobn(name) 

    parent.remove(ob) 

}


export function sgobn(namestring) {

    let ob = scene.getObjectByName(namestring) 
    return ob 

}


export function slp(time) {
    return new Promise((resolve) => setTimeout(resolve, time)) 
}



export function addVRFloor() {

    const geoCyl = new TZ.CylinderGeometry(8.5, 8.5, 0.02, 32) 

    let matRed, matOrg, matYel, matGrn, matBlu, matInd, matVio 

    const matArr = [matRed, matOrg, matYel, matGrn, matBlu, matInd, matVio] 

    const floorGroup = new TZ.Group() 
    let newColorTarget = new TZ.Color() 
    let colorCopied = new TZ.Color(0xb097c3) 

    colorCopied.getHSL(newColorTarget) 

    const hue = newColorTarget.h * 360 / 1 
    const saturation = newColorTarget.s * 100 
    let lightness = (newColorTarget.l * 100) //- 20 

    const lightnessRange = 20 //10

    lightness = lightness - lightnessRange  //darker and smaller first

    const deltaLightness = lightnessRange / (matArr.length) //2.8 fudge factor

    for (let i = 0 ; i < matArr.length;  i++) {

        lightness = lightness + deltaLightness 

        const colloop = new TZ.Color(`hsl(${hue}, ${saturation}%, ${lightness}%)`) 

        matArr[i] = new TZ.MeshBasicMaterial({ color: colloop }) 

        const cy = new TZ.Mesh(geoCyl, matArr[i]) 
        cy.position.set(0, (i * -0.1), 0) 
        cy.scale.set(i + 1, i + 1, i + 1) 

        floorGroup.add(cy) 

    }

    castleGroupParent.add(floorGroup) 

}








