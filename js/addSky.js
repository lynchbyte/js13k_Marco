import * as TZ from "three"

import { scene, skyShaderArr, } from './script.js'

export function addSky() {

  const radius = 60
  const height = 20

  const g = new TZ.CylinderGeometry(radius, radius, height, 32, 1, true)

  const mesh = new TZ.Mesh(g, skyShaderArr[0])
  mesh.position.set(0, height / 2 - 5, 0)
  scene.add(mesh)
  //TODO this shader has problems in VR, the generate smoothstep sky doesn't work

}