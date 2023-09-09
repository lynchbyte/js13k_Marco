import * as TZ from "three" 

import { clickable, castleGroupParent } from './script.js' 

export function addFloor() {

    //cross geometry
    const legLength = 2 * 0.5 
    const legWidth = 1 * 0.5 
    const crossShape = new TZ.Shape()
        .moveTo(0, legLength)//1
        .lineTo(legLength, legLength)//2
        .lineTo(legLength, 0)//3
        .lineTo(legLength + legWidth, 0)//4
        .lineTo(legLength + legWidth, legLength)//5
        .lineTo(legLength + legWidth + legLength, legLength)//6
        .lineTo(legLength + legWidth + legLength, legLength + legWidth)//7
        .lineTo(legLength + legWidth, legLength + legWidth)//8
        .lineTo(legLength + legWidth, legLength + legWidth + legLength)//9
        .lineTo(legLength, legLength + legWidth + legLength)//10
        .lineTo(legLength, legLength + legWidth)//11
        .lineTo(0, legLength + legWidth) //12 

    const extrudeSettings = {

        depth: 0.01,
        bevelEnabled: false,
 
    } 

    const crossGeo = new TZ.ExtrudeGeometry(crossShape, extrudeSettings) 
    crossGeo.center() 
   
    const crossGroup = new TZ.Group() 
    const rows = 5 
    const columns = 20 
    const spacer = 3 
    for (let x = 0;  x < rows ; x++) {

        for (let y = 0 ; y < columns;  y++) {

            const cross = new TZ.Mesh(crossGeo, new TZ.MeshPhongMaterial()) 
            cross.rotation.set((90 * (Math.PI / 180)), (0 * (Math.PI / 180)), (45 * (Math.PI / 180)))

            cross.position.set((x * spacer - ((spacer * rows) / 2.5)), 0.1, y * spacer - ((spacer * (columns - 1)) / 2)) 
            cross.name = `Cross${x + 1}${y + 1}` 

            cross.userData.type = 'cross' 

            crossGroup.add(cross) 
            clickable.push(cross) 

        }

    }

    castleGroupParent.add(crossGroup) 

}