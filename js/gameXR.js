import { scene, renderer, zVal, clickable, chapters, camera, } from './script.js'

import { addAudio } from './addAudio.js'

import {
    makeButtonMesh,
    createText, slp
} from './gameHelpers.js'

import { addControllersVR } from './addControllersVR.js'



//webXR#1 -   device query, is xr supported by user's device?
export async function XRSuppQry() {

    if ('xr' in navigator) {

        const immersiveVROK = await navigator.xr.isSessionSupported("immersive-vr")
        if (immersiveVROK) {

            //webXR#2 - advertise XR functionality //

            //  console.log(`show enter vr button here`) 

            const vrOK = createText('Enter VR', 0.25, 'Times New Roman', true)
            vrOK.userData.type = 'enterVR'
            vrOK.position.set(0, 0, zVal)
            vrOK.name = "VR OK Button"
            vrOK.userData.type = 'enterVR'
           // clickable.push(vrOK)

            camera.add(vrOK)

            slp(5000).then(() => {

                chapters.two_start = false //lerp to centre false

                addAudio()

            })

        }

        if (!immersiveVROK) {
            const vrNo = createText('VR Not Found :(', 0.2, 'Times New Roman')
            vrNo.position.set(0, 0.25, 0.01)

            vrNo.position.set(0, 0, zVal)
            const vrNotOK = makeButtonMesh(1.5, 0.3, 0.01, 0xbb434e, false)
            vrNo.add(vrNotOK)
            vrNotOK.translateZ(-0.01)
            camera.add(vrNo)

        }

    }

}

export async function startSession(type) {

     console.log(`finding session`)

    try {

        //webXR#4 - request an immersive session from the device

        const xrSession = await navigator.xr.requestSession(type,
            {
                optionalFeatures: ['hand-tracking',]
            })

        onSessionStarted(xrSession)



    } catch (error) {

        alert("Failed to start Web XR session.", error) /////////
        console.log(error, type)

    }
}


async function onSessionStarted(session) {

    console.log('onSession started')

    session.addEventListener('end', onSessionEnded)

    renderer.xr.setReferenceSpaceType('local')

    //viewer -> primarily used for creating inline experiences that do not respond to device motion.
    //local -> does not require the user to move around in space, seated
    //local-floor -> does not require the user to move around in space, standing
    //bounded-floor -> not needed to travel beyond a fixed boundary defined by the XR hardware
    //unbounded -> freely move around their physical environment and travel significant distances
    //https://immersive-web.github.io/webxr/spatial-tracking-explainer.html



    //webXR#5 - use the session to run a render loop //
    await renderer.xr.setSession(session)

}

function onSessionEnded() {

    console.log(`xr End`)

}


