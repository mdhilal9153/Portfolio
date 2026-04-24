import React from 'react'
import { Canvas } from '@react-three/fiber'
import Icosahedron from './Icosahedron'

const IcosahedronCanvas = () => {
  return (

    <Canvas className='w-full h-full'>
        <ambientLight intensity={0.5}/>
        <pointLight position={[10, 10, 10]} intensity={1}/>
        <Icosahedron/>
    </Canvas>
  )
}

export default IcosahedronCanvas
