import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
//@ts-ignore
import bike from './bike.glb'

export default () => {
    const glb = useLoader(GLTFLoader, bike)

    if (Array.isArray(glb))
        throw new Error("unexpected glb data")

    return <primitive object={glb.scene} />
}