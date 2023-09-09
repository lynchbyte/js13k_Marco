import * as TZ from "three" 

import { camera, castleGroupParent, s_MarcoArr, s_PoloArr, poloArr, dungeonArr, txLoader } from './script.js' 

export function addAudio() {

    const lstnr = new TZ.AudioListener() //listener
    camera.add(lstnr) 

    //Polo
    const sp = new TZ.SphereGeometry(2, 32, 16)  //sphere
    const matPolo = new TZ.MeshPhongMaterial({ color: 0xffaa00, flatShading: true, shininess: 0 })  //material Sphere

    const meshPolo = new TZ.Mesh(sp, matPolo) 
    meshPolo.visible = false 


    //set Polo rando room

    //x = 9.25, -9.25
    //y = 7.5, 19.36, 31.2, -7.5, -19.36, -31.2
    //z = 2
    const roomA = new TZ.Vector3(9.5, 1.5, 7.5) 
    const roomB = new TZ.Vector3(9.5, 1.5, 19.36) 
    const roomC = new TZ.Vector3(9.5, 1.5, 31.2) 
    const roomD = new TZ.Vector3(9.5, 1.5, -7.5) 
    const roomE = new TZ.Vector3(9.5, 1.5, -19.36) 
    const roomF = new TZ.Vector3(9.5, 1.5, -31.2) 
    const roomG = new TZ.Vector3(-9.5, 1.5, 7.5) 
    const roomH = new TZ.Vector3(-9.5, 1.5, 19.36) 
    const roomI = new TZ.Vector3(-9.5, 1.5, 31.2) 
    const roomJ = new TZ.Vector3(-9.5, 1.5, -7.5) 
    const roomK = new TZ.Vector3(-9.5, 1.5, -19.36) 
    const roomL = new TZ.Vector3(-9.5, 1.5, -31.2) 

    const randoRoomArr = [
        roomA, roomB, roomC, roomD, roomE, roomF, roomG, roomH, roomI, roomJ, roomK, roomL
    ]

    //pick random number for polo room
    const randoPolo = Math.floor(Math.random() * 11) 

    //add Polo Mesh to group
    meshPolo.position.set(randoRoomArr[randoPolo].x, randoRoomArr[randoPolo].y, randoRoomArr[randoPolo].z)
    castleGroupParent.add(meshPolo) 

    //collision detection
    meshPolo.geometry.computeBoundingBox() 
    const boxPolo = new TZ.Box3() 
    boxPolo.setFromObject(meshPolo) 
    poloArr.push(boxPolo) 
    // const helperA = new TZ.Box3Helper(boxPolo, 0xffff00) 
    // scene.add(helperA) 

    //win Polo texture
    const pTx = txLoader.load('media/mp2.webp') 
    const matPMat = new TZ.MeshStandardMaterial({
        map: pTx,
        side: TZ.DoubleSide,
        alphaTest: 0.05
    }) 
    const geoPT = new TZ.PlaneGeometry(0.75, 0.75, 32, 32) 
    const meshPPic = new TZ.Mesh(geoPT, matPMat) 
    poloArr.push(meshPPic)


    // Dungeon Room
    //remove polo room from array
    const redcArr = randoRoomArr.filter((e => e !== randoRoomArr[randoPolo]))

    //pick random number for dungeon room
    const randoDung = Math.floor(Math.random() * 10) 

    //add Dungon room here
    const matDung = new TZ.MeshPhongMaterial({ color: 'green' }) 
    const meshDung = new TZ.Mesh(sp, matDung) 
    meshDung.visible = false 
    meshDung.name = 'Dungeon'
    meshDung.position.set(redcArr[randoDung].x, redcArr[randoDung].y, redcArr[randoDung].z) 
    castleGroupParent.add(meshDung) 

    //collision detection
    meshDung.geometry.computeBoundingBox() 
    const boxDung = new TZ.Box3() 
    boxDung.setFromObject(meshDung) 
    dungeonArr.push(boxDung) 
    // const helper = new TZ.Box3Helper(boxDung, 0xffff00) 
    // scene.add(helper)  

    const sndMrc = new TZ.PositionalAudio(lstnr) //sound Marco
    const s_Marco = document.getElementById('song') //song Marco
    sndMrc.setMediaElementSource(s_Marco) 
    sndMrc.setRefDistance(50) 

    s_MarcoArr.push(s_Marco) 
    camera.add(sndMrc) 

    const sndPolo = new TZ.PositionalAudio(lstnr) //sound Polo
    const s_Polo = document.getElementById('song2') //song Polo
    sndPolo.setMediaElementSource(s_Polo) 
    sndPolo.setRefDistance(50) 

    s_PoloArr.push(s_Polo) 
    meshPolo.add(sndPolo) 

}