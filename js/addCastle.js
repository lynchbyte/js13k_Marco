import * as TZ from "three" 

import { scene, chapters, groundLevel,  castleGroupParent, castleColVal, clickable } from './script.js' 

import { createText, makeButtonMesh } from "./gameHelpers.js" 

function qq(sh, a, b) {

    sh.lineTo(a, b) 

}

export function addCastle() {



    //a quarter of the castle

    //wall A - opposite draw draw bridge
    const s01 = new TZ.Shape() 
    s01.moveTo(-8, -2)
    qq(s01, -7.5, -2)
    qq(s01, -7.5, 2)
    qq(s01, -8, 2)


    //walls
    const s02 = new TZ.Shape() 
    s02.moveTo(8, 12.43)
    qq(s02, 7.5, 12.43)
    qq(s02, 7.5, 8.535)
    qq(s02, 8, 8.535)
    qq(s02, 9.464, 10)
    qq(s02, 11.535, 10)
    qq(s02, 13, 8.535)
    qq(s02, 13, 6.464)
    qq(s02, 11.535, 5)
    qq(s02, 9.464, 5)
    qq(s02, 8, 6.464)
    qq(s02, 7.50, 6.4645)
    qq(s02, 7.5, 2)
    qq(s02, 8, 2)
    qq(s02, 8, 4.5)
    qq(s02, 11.742, 4.5)
    qq(s02, 13.5, 6.257)
    qq(s02, 13.5, 8.742)
    qq(s02, 11.742, 10.5)
    qq(s02, 8, 10.5)

    const s03 = new TZ.Shape() 
    s03.moveTo(1.969, 30.5)
    qq(s03, 1.969, 30)
    qq(s03, 0, 30.)
    qq(s03, 0, 30.5)

    const s04 = new TZ.Shape() 
    s04.moveTo(6, 30.524)
    qq(s04, 5.939, 30.5)
    qq(s04, 3.969, 30.5)
    qq(s04, 3.969, 30)
    qq(s04, 6.035, 30)
    qq(s04, 6.5, 30.185)
    qq(s04, 6.5, 32.256)
    qq(s04, 7.964, 33.720)
    qq(s04, 10.035, 33.720)
    qq(s04, 11.5, 32.256)
    qq(s04, 11.5, 30.185)
    qq(s04, 10.035, 28.720)
    qq(s04, 7.964, 28.720)
    qq(s04, 7.5, 28.535)
    qq(s04, 7.5, 26.278)
    qq(s04, 8, 26.278)
    qq(s04, 8, 28.1966)
    qq(s04, 8.060, 28.220)
    qq(s04, 10.242, 28.220)
    qq(s04, 12, 29.978)
    qq(s04, 12, 32.463)
    qq(s04, 10.242, 34.220)
    qq(s04, 7.757, 34.220)
    qq(s04, 6, 32.463)

    const s05 = new TZ.Shape() 
    s05.moveTo(11.742, 22.360)
    qq(s05, 8, 22.360)
    qq(s05, 8, 24.278)
    qq(s05, 7.5, 24.278)
    qq(s05, 7.5, 20.395)
    qq(s05, 8, 20.395)
    qq(s05, 9.4645, 21.860)
    qq(s05, 11.5355, 21.860)
    qq(s05, 13, 20.395)
    qq(s05, 13, 18.324)
    qq(s05, 11.535, 16.860)
    qq(s05, 9.464, 16.860)
    qq(s05, 8, 18.324)
    qq(s05, 7.5, 18.324)
    qq(s05, 7.5, 14.430)
    qq(s05, 8, 14.430)
    qq(s05, 8, 16.360)
    qq(s05, 11.742, 16.360)
    qq(s05, 13.5, 18.117)
    qq(s05, 13.5, 20.603)

    //Doors
    const s06 = new TZ.Shape() 
    s06.moveTo(6.5, 30.19)
    qq(s06, 6.04, 30)
    qq(s06, 7.5, 28.54)
    qq(s06, 7.96, 28.72)

    const s07 = new TZ.Shape() 
    s07.moveTo(7.5, 20.40)
    qq(s07, 8, 20.40)
    qq(s07, 8, 18.32)
    qq(s07, 7.5, 18.32)

    const s08 = new TZ.Shape() 
    s08.moveTo(8, 8.54)
    qq(s08, 7.5, 8.54)
    qq(s08, 7.5, 6.46)
    qq(s08, 8, 6.46)

    //window base
    const s09 = new TZ.Shape() 
    s09.moveTo(3.969, 30.5)
    qq(s09, 1.969, 30.5)
    qq(s09, 1.969, 30)
    qq(s09, 3.969, 30)

    const s10 = new TZ.Shape() 
    s10.moveTo(8, 26.278)
    qq(s10, 7.5, 26.278)
    qq(s10, 7.5, 24.278)
    qq(s10, 8, 24.278)

    const s11 = new TZ.Shape() 
    s11.moveTo(8, 14.430)
    qq(s11, 7.5, 14.430)
    qq(s11, 7.5, 12.430)
    qq(s11, 8, 12.430)

    //tops
    const s15 = new TZ.Shape() 
    s15.moveTo(13.328, 9.621)
    qq(s15, 12.621, 10.328)
    qq(s15, 11.914, 9.621)
    qq(s15, 12.621, 8.914)

    const s16 = new TZ.Shape() 
    s16.moveTo(8.379, 4.672)
    qq(s16, 9.086, 5.379)
    qq(s16, 8.379, 6.086)
    qq(s16, 7.672, 5.379)

    const s17 = new TZ.Shape() 
    s17.moveTo(7, 8)
    qq(s17, 7, 7)
    qq(s17, 8, 7)
    qq(s17, 8, 8)

    const s18 = new TZ.Shape() 
    s18.moveTo(11, 10)
    qq(s18, 11, 11)
    qq(s18, 10, 11)
    qq(s18, 10, 10)

    const s19 = new TZ.Shape() 
    s19.moveTo(14, 7)
    qq(s19, 14, 8)
    qq(s19, 13, 8)
    qq(s19, 13, 7)

    const s20 = new TZ.Shape() 
    s20.moveTo(12.621, 4.672)
    qq(s20, 13.328, 5.379)
    qq(s20, 12.621, 6.086)
    qq(s20, 11.914, 5.379)

    const s21 = new TZ.Shape() 
    s21.moveTo(7.672, 9.621)
    qq(s21, 8.379, 8.914)
    qq(s21, 9.086, 9.621)
    qq(s21, 8.379, 10.328)

    const s22 = new TZ.Shape() 
    s22.moveTo(10, 4)
    qq(s22, 11, 4)
    qq(s22, 11, 5)
    qq(s22, 10, 5)




    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Extrude Settings

    const extrudeSettings = {

        depth: 4,
        bevelEnabled: false,

    } 

    const extrudeSettings2 = {

        depth: 1.2,
        bevelEnabled: false,

    } 

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
    //Geometry
    //wall A - opposite draw draw bridge
    const geo1 = new TZ.ExtrudeGeometry(s01, extrudeSettings) 

    //walls
    const geo2 = new TZ.ExtrudeGeometry(s02, extrudeSettings) 
    const geo3 = new TZ.ExtrudeGeometry(s03, extrudeSettings) 
    const geo4 = new TZ.ExtrudeGeometry(s04, extrudeSettings) 
    const geo5 = new TZ.ExtrudeGeometry(s05, extrudeSettings) 

    //Doors
    const geo6A = new TZ.ExtrudeGeometry(s06, extrudeSettings) 
    const geo7A = new TZ.ExtrudeGeometry(s07, extrudeSettings) 
    const geo8A = new TZ.ExtrudeGeometry(s08, extrudeSettings) 
    const geo6B = geo6A.clone() 
    geo6B.scale.z = -1 
    const geo7B = geo7A.clone() 
    geo7B.scale.z = -1 
    const geo8B = geo8A.clone() 
    geo7B.scale.z = -1 

    const doorsGeoArr = [geo6A, geo7A, geo8A, geo6B, geo7B, geo8B] 


    //window base
    const geo9 = new TZ.ExtrudeGeometry(s09, extrudeSettings2) 
    const geo10 = new TZ.ExtrudeGeometry(s10, extrudeSettings2) 
    const geo11 = new TZ.ExtrudeGeometry(s11, extrudeSettings2) 

    //tops
    const geo15 = new TZ.ExtrudeGeometry(s15, extrudeSettings2) 
    const geo16 = new TZ.ExtrudeGeometry(s16, extrudeSettings2) 
    const geo17 = new TZ.ExtrudeGeometry(s17, extrudeSettings2) 
    const geo18 = new TZ.ExtrudeGeometry(s18, extrudeSettings2) 
    const geo19 = new TZ.ExtrudeGeometry(s19, extrudeSettings2) 
    const geo20 = new TZ.ExtrudeGeometry(s20, extrudeSettings2) 
    const geo21 = new TZ.ExtrudeGeometry(s21, extrudeSettings2) 
    const geo22 = new TZ.ExtrudeGeometry(s22, extrudeSettings2) 
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////   
    //Materials   
    //mat1 = castle

    const mat1 = new TZ.MeshStandardMaterial({
        color: castleColVal,
    }) 
   
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Mesh

    const castleGroup = new TZ.Group() 

    //wall A - opposite draw draw bridge
    const mesh1 = new TZ.Mesh(geo1, mat1) 

    //walls
    const mesh2 = new TZ.Mesh(geo2, mat1) 
    const mesh3 = new TZ.Mesh(geo3, mat1) 
    const mesh4 = new TZ.Mesh(geo4, mat1) 
    const mesh5 = new TZ.Mesh(geo5, mat1) 

    //Doors
    const mesh6 = new TZ.Mesh(geo6A, mat1) 
    mesh6.userData.type = 'Door' 

    const mesh7 = new TZ.Mesh(geo7A, mat1) 
    mesh7.userData.type = 'Door' 

    const mesh8 = new TZ.Mesh(geo8A, mat1) 
    mesh8.userData.type = 'Door' 

    //window base
    const mesh9 = new TZ.Mesh(geo9, mat1) 
    const mesh10 = new TZ.Mesh(geo10, mat1) 
    const mesh11 = new TZ.Mesh(geo11, mat1) 
    //window tops
    const mesh12 = mesh9.clone() 
    mesh12.translateZ(2.8) 
    const mesh13 = mesh10.clone() 
    mesh13.translateZ(2.8) 
    const mesh14 = mesh11.clone() 
    mesh14.translateZ(2.8) 

    //tops
    const mesh15 = new TZ.Mesh(geo15, mat1) 
    const mesh16 = new TZ.Mesh(geo16, mat1) 
    const mesh17 = new TZ.Mesh(geo17, mat1) 
    const mesh18 = new TZ.Mesh(geo18, mat1) 
    const mesh19 = new TZ.Mesh(geo19, mat1) 
    const mesh20 = new TZ.Mesh(geo20, mat1) 
    const mesh21 = new TZ.Mesh(geo21, mat1) 
    const mesh22 = new TZ.Mesh(geo22, mat1) 

    const topGroup = new TZ.Group() 
    topGroup.add(mesh15, mesh16, mesh17, mesh18, mesh19, mesh20, mesh21, mesh22) 
    topGroup.translateZ(4) 

    const topGroup2 = topGroup.clone() 
    topGroup2.translateY(11.86) 
    const topGroup3 = topGroup2.clone() 
    topGroup3.translateY(11.86) 
    topGroup3.translateX(-1.45) 

    ////////////////////////////////////////////////////////////////////////////////////////
    const bridgeMat = new TZ.MeshStandardMaterial({ color: 0x4d4d4d }) 

    const meshBridge = new TZ.Mesh(new TZ.BoxGeometry(0.5, 4, 4),
        bridgeMat) 

    meshBridge.rotateY((90 * (Math.PI / 180)))
    meshBridge.translateZ(9.5) 

    ///////////////////////////////////////////////////////////////////////////////////////////

    castleGroup.add(mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8, mesh9, mesh10, mesh11, mesh12, mesh13, mesh14) 
    castleGroup.add(topGroup, topGroup2, topGroup3) 

    castleGroup.rotation.set((-90 * (Math.PI / 180)), 0, 0) 
    castleGroupParent.add(castleGroup) 

    const castleGroup2 = castleGroup.clone() 
    castleGroup.scale.x = -1 
    castleGroupParent.add(castleGroup2) 

    const castleGroup3 = castleGroup.clone() 
    castleGroup3.rotateZ((180 * (Math.PI / 180))) 
    castleGroupParent.add(castleGroup3) 

    castleGroup.add(mesh1) 

    castleGroup.add(meshBridge) 

    const castleGroup4 = castleGroup2.clone() 
    castleGroup4.rotateZ((180 * (Math.PI / 180))) 
    castleGroupParent.add(castleGroup4) 

    //change Door material
    castleGroupParent.traverse(e => {

        if (e.userData.type == 'Door') {

            e.material = new TZ.MeshStandardMaterial({ color: 0xffff, side: TZ.DoubleSide }) 

            clickable.push(e)

        }
    }) 


    castleGroupParent.position.set(0, groundLevel, 0) 

    castleGroupParent.rotation.set(0, (180 * (Math.PI / 180)), 0) 

    castleGroupParent.castShadow = true 
    castleGroupParent.receiveShadow = true 
    //////////////////////////////////////////////////////////////////////

    //interior decorating

    const art = createText('🖼️', 2, 'Arial')
    art.position.set(0, 2, 29.9) 
    castleGroupParent.add(art) 

    //fireplace
    const fire = createText('🔥', 1, 'Arial') 
    fire.position.set(0, 0.6, -29.9) 
    castleGroupParent.add(fire) 

    const fp = createText('🟪', 2, 'Arial') 
    fp.position.set(0, 0.8, -29.95) 
    castleGroupParent.add(fp) 

    const clock = createText('🕰️', 1, 'Arial') 
    clock.position.set(0, 2, -29.9) 
    castleGroupParent.add(clock) 

    //flags
    const flagGroup = new TZ.Group() 
    const flagFab = makeButtonMesh(1.25, 0.65, 0.001, 'orange') 

    const flagA = createText('†13†', 0.4, 'Times New Roman') 
    const flagB = flagA.clone() 
    flagB.rotateY(3.14) 
    flagFab.add(flagA, flagB ) 
    flagA.position.set(0.05, -0.025, 0.1) 
    flagB.position.set(0.05, -0.025, -0.1) 
    flagGroup.add(flagFab) 

    const flagPole = new TZ.Mesh(new TZ.CylinderGeometry(0.1, 0.02, 2, 32),
        new TZ.MeshBasicMaterial({ color: 'Black' })
    ) 
    flagPole.position.set(-0.58, -0.7, 0) 
    flagGroup.add(flagPole) 
    flagGroup.rotateY(3.14)
    flagGroup.position.set(-11, 10, 8) //flagGroup.position.set(-11, 10, 8) 
    flagGroup.scale.set(3,3,3)
    const flagGroupB = flagGroup.clone() 
    flagGroupB.translateZ(26)

    castleGroupParent.add(flagGroup, flagGroupB) 

    //table
    const lunch = new TZ.Group() 
    const table = new TZ.Mesh(new TZ.BoxGeometry(1.5, 1, 2.5), bridgeMat) 

    const set = new TZ.Group() 
    const plate = createText('🍽️', 0.5, 'Arial') 
    
    const chick = createText('🍗', 0.25, 'Arial') 
    chick.translateZ(-0.01) 

    const wine = createText('🍷', 0.5, 'Arial') 
     wine.position.set(0.3,0.8,-0.25) 
     wine.rotation.set(-3.14/2, 3.14/2, 0)
   

    set.add(plate, chick, wine)
    set.rotateX(3.14/2)   
    set.rotateZ(3.14)     
    set.position.set(0.0, 0.55, 0.85) //0, up,



    const setB = set.clone() 
    setB.rotateZ(3.14)   
    setB.translateY(-2) 

    lunch.add(table, set,
         setB
          ) 
    lunch.position.set(6.7, 0.4, 0) 
    castleGroupParent.add(lunch) 

    
    // const sb = createText('🤵', 1, 'Arial') 
    // sb.rotateY(3.14/2)  
    // sb.position.set(7.45, 1.5, 2) 
    // castleGroupParent.add(sb) 
    /////////////////////////////////////////////////////////////

    
   
    scene.add(castleGroupParent) 
    castleGroupParent.matrixWorldNeedsUpdate = false 
   
    chapters.one_title = true 
 

}