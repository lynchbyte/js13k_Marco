
import * as TZ from "three";

import { scene, clickable, renderer, chapters, camera, s_MarcoArr, s_PoloArr, dummyOb, poloArr, dungeonArr, newSpotArr, } from './script.js';

import { removeOb, slp, createText, sgobn, } from "./gameHelpers.js";

import { startSession } from "./gameXR.js";

import { addControllersVR } from "./addControllersVR.js";






/**
 * sound engine - https://codepen.io/KilledByAPixel/pen/BaowKzv KilledByAPixel
 */
// ZzFXMicro - Zuper Zmall Zound Zynth - v1.2.0 by Frank Force ~ 880 bytes
let zzfxV = .3    // volume
const zzfx =       // play sound
    (p = 1, k = .05, b = 220, e = 0, r = 0, t = .1, q = 0, D = 1, u = 0, y = 0, v = 0, z = 0, l = 0, E = 0, A = 0, F = 0, c = 0, w = 1, m =
        0, B = 0, M = Math, R = 44100, d = 2 * M.PI, G = u *= 500 * d / R / R, C = b *= (1 - k + 2 * k * M.random(k = [])) * d / R, g
            = 0, H = 0, a = 0, n = 1, I = 0, J = 0, f = 0, x, h) => {
        e = R * e + 9; m *= R; r *= R; t *= R; c *= R; y *= 500 * d / R ** 3; A *= d
            / R; v *= d / R; z *= R; l = R * l | 0; for (h = e + m + r + t + c | 0; a < h; k[a++] = f)++J % (100 * F | 0) || (f = q ? 1 < q ? 2 <
                q ? 3 < q ? M.sin((g % d) ** 3) : M.max(M.min(M.tan(g), 1), -1) : 1 - (2 * g / d % 2 + 2) % 2 : 1 - 4 * M.abs(M.
                    round(g / d) - g / d) : M.sin(g), f = (l ? 1 - B + B * M.sin(d * a / l) : 1) * (0 < f ? 1 : -1) * M.abs(f) ** D * zzfxV
                    * p * (a < e ? a / e : a < e + m ? 1 - (a - e) / m * (1 - w) : a < e + m + r ? w : a < h - c ? (h - a - c) / t * w : 0), f = c ? f / 2 + (c > a ? 0 :
                        (a < h - c ? 1 : (h - a) / c) * k[a - c | 0] / 2) : f), x = (b += u += y) * M.cos(A * H++), g += x - x * E * (1 - 1E9 * (M.sin
                            (a) + 1) % 2), n && ++n > z && (b += v, C += v, n = 0), !l || ++I % l || (b = C, u = G, n ||= 1); p = zzfxX.
                                createBuffer(1, h, R); p.getChannelData(0).set(k); b = zzfxX.createBufferSource(); b.
                                    buffer = p; b.connect(zzfxX.destination); b.start(); return b
    };
const zzfxX = new AudioContext;


export function getClicked(intersection) {

    if (intersection.length == 0) {

        return

    }

    if (intersection.length > 0) {

        let type = intersection[0].object.userData.type;

        switch (type) {

           case 'enterVR':

                startSession('immersive-vr');

                addControllersVR();

                removeOb("VR OK Button", camera);

                //reload
                addEx();


                //hint
                const clueText = createText('📢', 0.25, 'Arial', true);
                clueText.position.set(0.75, 0, -1.5);
                clueText.userData.type = "Clue";
                clueText.name = "clue"
                camera.add(clueText);

              break;


            case 'cross':

                if (renderer.xr.getSession() !== null) {

                    // let INTERSECTION = intersection[0].point;

                    //TODO better walking sound
                    zzfx(...[1.01, , 629, .05, .17, .41, 1, 1.83, , .2, 148, .16, .19, , , .5, .01, .82, .28, .47]); // Powerup 24 - Mutation 5

                    dummyOb.position.set(camera.position.x, camera.position.y, camera.position.z);
                    chapters.three_setRef = true;

                    const newSpot = new TZ.Vector3(
                        intersection[0].point.x,
                        0,
                        intersection[0].point.z
                    )

                    newSpotArr.push(newSpot);//vec3

                    slp(1000).then(() => {
                        chapters.three_setRef = false;
                        newSpotArr.length = 0;
                    });
                }


                break;
                

            case 'Clue':

                if (renderer.xr.getSession() !== null) {

                    s_MarcoArr[0].play();

                    slp(2500).then(() => {

                        s_PoloArr[0].play();

                    });
                }

                break;
                

            case 'Door':

                zzfx(...[, , 471, , .09, .47, 4, 1.06, -6.7, , , , , .9, 61, .1, , .82, .09, .13])//⚡

                if (renderer.xr.getSession() !== null) {

                    let door = intersection[0].object;

                    let box = new TZ.Box3().setFromObject(door);
                    // const helper = new TZ.Box3Helper(box, 0xffff00);
                    // scene.add(helper);

                    if (box.intersectsBox(dungeonArr[0]) == true) {

                        //LOOSER TIME'

                        zzfx(...[, , 662, .82, .11, .33, 1, 0, , -0.2, , , , 1.2, , .26, .01])//👾
                        const zombie = createText('🧟', 0.25)
                        zombie.position.set(0, 0.0, -0.75);
                        zombie.userData.type = "Zombie";
                        camera.add(zombie);

                        slp(250).then(() => {
                            zombie.translateZ(0.05);

                            slp(250).then(() => {
                                zombie.translateZ(0.05);

                                slp(250).then(() => {
                                    zombie.translateZ(0.05);

                                    slp(250).then(() => {
                                        zombie.translateZ(0.05);

                                        slp(250).then(() => {
                                            zombie.translateZ(0.05);
                                        });
                                    });
                                });
                            });
                        });

                        gameOver();
                    }

                    if (box.intersectsBox(poloArr[0]) == true) {

                        //WINNER TIME
                        camera.add(poloArr[1]);
                        poloArr[1].translateZ(-1.5);

                        
                        zzfx(...[, , 80, .3, .4, .7, 2, .1, -0.73, 3.42, -430, .09, .17, , , , .19])//🌟

                        gameOver();

                    }

                    //remove door
                    door.parent.remove(door);

                }

                break;
                

            case 'Exit':

                location.reload();

                break;

            default:

                console.log(`switch default`);

        }

    }
}


function gameOver() {

    clickable.length = 0;

    //remove all ui from camera
    let ob = sgobn('exit');
    camera.remove(ob);

    let ob2 = sgobn('clue');
    camera.remove(ob2);

    slp(1000).then(() => {
        addEx()
    });


}

export function addEx() {
    const exitText = createText('↻', 0.25, 'Arial', true);
    exitText.position.set(-.7, 0, -1.5);
    exitText.userData.type = "Exit";
    exitText.name = "exit"
    camera.add(exitText);

    const exitText2 = createText('reload', 0.05, 'Times New Roman ');
    exitText2.position.clone(exitText);
    exitText2.translateY(-0.15);
    exitText.add(exitText2);
}



// const immersiveButton = document.createElement('button');
// immersiveButton.textContent = 'Enter VR!';
// immersiveButton.addEventListener('click', () => {
