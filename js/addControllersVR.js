import * as TZ from "three" 

import { scene, ctr1, ctr2, renderer } from './script.js' 

import { onSelectStart, onSelectEnd } from './gameSelectController.js' 

let controllerGrip1, controllerGrip2 

export function addControllersVR() {

  scene.add(ctr1) 
  scene.add(ctr2) 

  // controllers helper
  let mC = new TZ.LineBasicMaterial({ color: 0xe65277 }) 
  let gC = new TZ.BufferGeometry().setFromPoints([new TZ.Vector3(0, 0, 0), new TZ.Vector3(0, 0, - 1)]) 
  let line = new TZ.Line(gC, mC) 
  line.scale.z = 10 
  ctr1.add(line.clone()) 

  ctr2.add(line.clone()) 

  ctr1.addEventListener('selectstart', onSelectStart) 
  ctr1.addEventListener('selectend', onSelectEnd) 
  ctr1.addEventListener('connected', function (event) {

    controllerGrip1 = renderer.xr.getControllerGrip(0) 
    scene.add(controllerGrip1) 

  }) 

  ctr1.addEventListener('disconnected', function () {

    this.remove(this.children[0]) 

  }) 

  ctr2.addEventListener('selectstart', onSelectStart) 
  ctr2.addEventListener('selectend', onSelectEnd) 
  ctr2.addEventListener('connected', function (event) {

    controllerGrip2 = renderer.xr.getControllerGrip(1) 
    scene.add(controllerGrip2) 

  }) 

 
  ctr2.addEventListener('disconnected', function () {

    this.remove(this.children[0]) 

  }) 

}
