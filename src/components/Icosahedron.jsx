import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Icosahedron = () => {
  const meshRef = useRef()
  const ring1Ref = useRef()
  const ring2Ref = useRef()

  useFrame(() => {
    meshRef.current.rotation.y += 0.003
    meshRef.current.rotation.x += 0.001
    ring1Ref.current.rotation.x += 0.01
    ring2Ref.current.rotation.x += 0.01
  })

  return (
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial color="#c9a84c" wireframe />
      </mesh>

      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.9, 0.02, 16, 100]} />
        <meshStandardMaterial color="#c9a84c" />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.6, 0.015, 16, 100]} />
        <meshStandardMaterial color="#c9a84c" opacity={0.6} transparent />
      </mesh>

      
    </>
  )
}

export default Icosahedron