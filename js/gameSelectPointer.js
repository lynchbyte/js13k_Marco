import * as TZ from "three" 

import { scene, camera, clickable } from './script.js' 

import { getClicked } from './gameClicked.js' 


const pointer = new TZ.Vector2(1, 1) 
const raycaster_Pointer = new TZ.Raycaster() 

let INT 

export function onPointerMove(event) {

    event.preventDefault() 

    pointer.x = (event.clientX / window.innerWidth) * 2 - 1 
    pointer.y = - (event.clientY / window.innerHeight) * 2 + 1 

    raycaster_Pointer.setFromCamera(pointer, camera) 

    const intersects = raycaster_Pointer.intersectObjects(clickable) 

    if (intersects.length > 0) {

        if (INT != intersects[0].object) {

            if (INT) INT.material.emissive.setHex(INT.currentHex) 

            INT = intersects[0].object 
            INT.currentHex = INT.material.emissive.getHex() 
            if (INT.userData.type == 'enterVR') {
                INT.material.emissive.setHex(0xff0000) 
            }

        }

    } else {

        if (INT) INT.material.emissive.setHex(INT.currentHex) 

        INT = null 

    }


}

export function onPointerClick(event) {

    event.preventDefault() 

    pointer.x = (event.clientX / window.innerWidth) * 2 - 1 
    pointer.y = - (event.clientY / window.innerHeight) * 2 + 1 

    raycaster_Pointer.setFromCamera(pointer, camera) 

    const intersection = raycaster_Pointer.intersectObjects(scene.children);
    getClicked(intersection);

}

