//  python -m http.server

/**
 * 
 * @author Shauna Lynch 
 * 
**/

import * as TZ from "three" 

import { onPointerMove, onPointerClick, } from './gameSelectPointer.js' 

import { intersectObjects } from './gameSelectController.js' 

import { XRSuppQry } from "./gameXR.js" 

import {  slp, addVRFloor, createText,  removeOb } from "./gameHelpers.js" 

import { addCastle } from "./addCastle.js" 

import { loadShaders } from './addShaders.js'

import { addFloor } from "./addFloor.js" //crosses

import { addSky } from "./addSky.js" 

export const skyShaderArr = [] 

//Load texture picture
export const txLoader = new TZ.TextureLoader() 

loadShaders() 

export const clickable = [] 

export const chapters = {

    one_title: false,  //on at end of addCastle , off at start clicked, to rotate castleParent Group
    two_start: false,  //on at start clicked, off at enterVR, to lerp camera to start Pos
    three_setRef: false,// on at cross clicked, 

}

export const newSpotArr = [] //for cross lerping/walking in castle

export const castleGroupParent = new TZ.Group() 

export const backgroundColVal = 0xd3c9e3 //vec3(0.827,0.788,0.89)
export const castleColVal = 0x8285e1 

//////////////////////
////// GLOBALS////////
//////////////////////

export const zVal = -1.5 
export const groundLevel = -2 

export const s_MarcoArr = [] //sounds
export const s_PoloArr = [] //sounds
export const poloArr = []  //for collision detection bounding boxes added to at addAudio, checked at clicked
export const dungeonArr = []  //for collision detection bounding boxes added to at addAudio, checked at click

//Scene
export const scene = new TZ.Scene() 
scene.background = new TZ.Color(backgroundColVal) 


export const dummyOb = new TZ.Mesh(
    new TZ.BoxGeometry(0.1, 0.1, 0.1),
    new TZ.MeshNormalMaterial())  
dummyOb.position.set(0, 0, 0) 
dummyOb.visible = false 
scene.add(dummyOb) 


//Clock
export const clock = new TZ.Clock() 

//Camera
export const camera = new TZ.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 500) 
camera.position.set(-20, 20, 45) 
camera.lookAt(0, 0, zVal) 
scene.add(camera) 

const light = new TZ.AmbientLight(0x404040, 12)  // soft white light
scene.add(light) 

const dirLight = new TZ.DirectionalLight(0xffffff, 1.2) 
dirLight.position.set(0, 2, 1) 

scene.add(dirLight) 

//Renderer
export const renderer = new TZ.WebGLRenderer({
    antialias: true,
}) 
renderer.setPixelRatio(Math.max(window.devicePixelRatio, 1.5)) 
renderer.setSize(window.innerWidth, window.innerHeight) 
renderer.xr.enabled = true 

document.body.appendChild(renderer.domElement) 

export const ctr1 = renderer.xr.getController(0) //for vr contrller
export const ctr2 = renderer.xr.getController(1) //for vr controller


//////////////////////
////EVENT LISTENERS///
//////////////////////
window.addEventListener('resize', onWindowResize) 

//document.addEventListener('pointerdown', onPointerClick) //quest doesn't recognise this as an XR event
//document.addEventListener('pointermove', onPointerMove) 

document.addEventListener('click', onPointerClick);
document.addEventListener('mousemove', onPointerMove);


export const baseReferenceSpaceArr = [] 

renderer.xr.addEventListener('sessionstart', xrSessionStarted) 

renderer.xr.addEventListener('sessionend', xrSessionEnded) 

const startButton = document.getElementById("startButton") 
startButton.addEventListener("click", startFunction) 


const titleText = createText('Marco...?', 0.4, 'Times New Roman') 
titleText.position.set(0, 0.75, zVal) 
titleText.name = "Title" 

camera.add(titleText) 


addVRFloor() 

slp(1000).then(() => {
    addCastle() 
    addFloor() 
    addSky() 
}) 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

animate() 

////////////////////
/////FUNCTIONS//////
////////////////////

export function removeFadeOut(el, speed) {

    var seconds = speed / 1000 
    el.style.transition = "opacity " + seconds + "s ease" 

    el.style.opacity = 0 

    setTimeout(function () {
        el.remove() 
    }, speed) 

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight 
    camera.updateProjectionMatrix() 

    renderer.setSize(window.innerWidth, window.innerHeight) 

}


export function startFunction() {

    console.log(`start game here`) 

    slp(250).then(() => {

        let elem = document.getElementById('info') 
        elem.remove() 

        let elem2 = document.getElementById('info2') 
        elem2.remove() 

        removeOb('Title', camera) 

        chapters.one_title = false //rotate castle

        chapters.two_start = true //lerp to centre

        slp(7500).then(() => {
            XRSuppQry() 
        }) 

    }) 

}

let baseReferenceSpace 

function xrSessionStarted(event) {

    console.log(`XR sess start`) 

    baseReferenceSpace = renderer.xr.getReferenceSpace() 

    addVRFloor() 

}

function xrSessionEnded(event) {

    console.log(`XR sess end`) 

}

function animate() {

    renderer.setAnimationLoop(render) 

}

let alpha = 0 
function render(timestamp, frame) {

    const delta = clock.getDelta() 
    const elapsedTime = clock.getElapsedTime() 
    // console.log(`elapsed time`, elapsedTime) 


    //vr controller
    let XRsesh = renderer.xr.getSession() 

    if (XRsesh !== null) {

        // cleanIntersected() 
        intersectObjects(ctr1) 

        if (XRsesh.inputSources.length > 1) {

            intersectObjects(ctr2) 
        }

    }

    //at start, rotate castleGroupParent
    if (chapters.one_title === true) {

        castleGroupParent.rotation.y += delta * 0.1
    }

    //at start, lerp camera to start position
    if (chapters.two_start == true) {

        alpha += delta 

        camera.position.lerp(new TZ.Vector3(0, 0, 0), alpha * 0.005)
    }

    if (chapters.three_setRef == true) {

        alpha += delta 

        dummyOb.position.lerp(newSpotArr[0], alpha * 0.001) 

        const offsetPosition = { x: - dummyOb.position.x, y: - dummyOb.position.y, z: - dummyOb.position.z, w: 1 } 

        const offsetRotation = new TZ.Quaternion() 
        const transform = new XRRigidTransform(offsetPosition, offsetRotation) 
        const teleportSpaceOffset = baseReferenceSpace.getOffsetReferenceSpace(transform) 

        renderer.xr.setReferenceSpace(teleportSpaceOffset)

    }

    renderer.render(scene, camera) 
  
}

