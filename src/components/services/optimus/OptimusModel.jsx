import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function OptimusModel(props) {
  const { scene } = useGLTF('/optimusModel.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, Math.PI / 2, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes._rootJoint} />
            <skinnedMesh geometry={nodes.Object_55.geometry} material={materials['unnamed.0']} skeleton={nodes.Object_55.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/optimusModel.glb')
