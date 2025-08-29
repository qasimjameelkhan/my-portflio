import React from 'react'
import { useGLTF } from '@react-three/drei'

export function MercedesModel(props) {
  const { nodes, materials } = useGLTF('/mercedesModel.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.material} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.Material} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.chrome} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.chrome} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.chrome} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.main_color} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.main_color} />
        <mesh geometry={nodes.Object_17.geometry} material={materials['mid-chrome']} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.tire} />
      </group>
    </group>
  )
}

useGLTF.preload('/mercedesModel.glb')
