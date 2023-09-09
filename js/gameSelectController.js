import * as TZ from "three" 

import { scene, clickable } from './script.js' 

import { getClicked } from './gameClicked.js' 

//for vr controller selecting
export const raycasterXR = new TZ.Raycaster() 
//export const intersected = [] 
export const tempMatrix = new TZ.Matrix4() 
//raycasterXR.layers.set(1)
//const intersected = [] 

let INT2 

//1 -called in render loop -  hover change color
export function intersectObjects(controller) {

    // Do not highlight when already selected
    if (controller.userData.selected !== undefined) return 

    const intersects = getIntersections(controller) 

    // Do not highlight when already selected
    if (intersects.length == 0) return 

    if (INT2 != intersects[0].object) {

        if (INT2) INT2.material.emissive.setHex(INT2.currentHex) 

        INT2 = intersects[0].object 
        INT2.currentHex = INT2.material.emissive.getHex() 

        INT2.material.emissive.setHex(0xff0000) 

    //    console.log('INT2', INT2)

 

    } else {

        if (INT2) INT2.material.emissive.setHex(INT2.currentHex) 

        INT2 = null 

    }

}






//2
export function getIntersections(controller) {

    controller.updateMatrixWorld() 

    tempMatrix.identity().extractRotation(controller.matrixWorld) 

    raycasterXR.ray.origin.setFromMatrixPosition(controller.matrixWorld) 

    raycasterXR.ray.direction.set(0, 0, - 1).applyMatrix4(tempMatrix) 

    return raycasterXR.intersectObjects(clickable) 

}



//3 - event listener - added when controllers added
export function onSelectStart(e) {

    const controller = e.target 

    const clickXRArr = getIntersections(controller) 

    if (clickXRArr.length > 0) {

       // const intersectedXR = clickXRArr[0] 
       // const intersectedXRObject = intersectedXR.object 

        getClicked(clickXRArr) 

    }

}


export function onSelectEnd(e) {

  //  console.log(`on select End`, e) 

}







