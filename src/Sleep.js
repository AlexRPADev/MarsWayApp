/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/sleep.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.sleep.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 1.3]} scale={0.018}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          geometry={nodes.ely_vanguardsoldier_kerwinatienza_Mesh.geometry}
          material={materials['ely_vanguardsoldier_kerwinatienza_M.003']}
          skeleton={nodes.ely_vanguardsoldier_kerwinatienza_Mesh.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/sleep.glb')
