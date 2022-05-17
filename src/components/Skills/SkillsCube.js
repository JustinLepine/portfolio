
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/hero.gltf')
  return (
    <group rotation={[0.6,0.7,0]} ref={group} {...props} dispose={null}>
      <mesh geometry={nodes['main-cube'].geometry} material={materials['Material.015']} />
      <mesh geometry={nodes['Js-yellow'].geometry} material={materials['Material.003']} position={[0, 1.03, 0]} scale={[0.8, 0.04, 0.8]} />
      <mesh geometry={nodes['Js-text'].geometry} material={materials['Material.007']} position={[-0.15, 1.09, 0.65]} />
      <mesh geometry={nodes['express-white'].geometry} material={materials['Material.005']} position={[0, 0, -1.03]} rotation={[Math.PI / 2, 0, 0]} scale={[0.8, 0.04, 0.8]} />
      <mesh geometry={nodes['express-text'].geometry} material={materials['Material.006']} position={[0.73, -0.09, -1.08]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.51} />
      <mesh geometry={nodes['react-grey'].geometry} material={materials['Material.004']} position={[0, 0, 1.03]} rotation={[Math.PI / 2, 0, 0]} scale={[0.8, 0.04, 0.8]} />
      <mesh geometry={nodes['react-sphere'].geometry} material={materials['Material.012']} position={[0, 0, 1.07]} scale={-0.13} />
      <mesh geometry={nodes['react-oval1'].geometry} material={materials['Material.012']} position={[0, 0, 1.11]} rotation={[Math.PI / 2, 0, 0]} scale={[0.72, 0.33, 0.3]} />
      <mesh geometry={nodes['react-oval3'].geometry} material={materials['Material.012']} position={[0, 0, 1.11]} rotation={[Math.PI / 2, 1.07, 0]} scale={[0.72, 0.33, 0.3]} />
      <mesh geometry={nodes['react-oval2'].geometry} material={materials['Material.012']} position={[0, 0, 1.11]} rotation={[Math.PI / 2, -1.06, 0]} scale={[0.72, 0.33, 0.3]} />
      <mesh geometry={nodes['node-black'].geometry} material={materials['Material.007']} position={[-1.03, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.8, 0.04, 0.8]} />
      <mesh geometry={nodes['node-green'].geometry} material={materials['Material.014']} position={[-1.13, 0, 0]} rotation={[0.52, 0, -Math.PI / 2]} scale={[-0.76, -0.43, -0.76]} />
      <mesh geometry={nodes['node-o'].geometry} material={materials['Material.016']} position={[-1.11, -0.04, -0.17]} rotation={[-Math.PI / 6, 0, -Math.PI / 2]} scale={0.14} />
      <mesh geometry={nodes['node-o-middle'].geometry} material={materials['Material.014']} position={[-1.14, -0.04, -0.17]} rotation={[-Math.PI / 6, 0, -Math.PI / 2]} scale={0.05} />
      <mesh geometry={nodes['node-d'].geometry} material={materials['Material.015']} position={[-4.12, 0, -0.01]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={nodes['node-d-middle'].geometry} material={materials['Material.014']} position={[-1.14, -0.04, 0.15]} rotation={[-Math.PI / 6, 0, -Math.PI / 2]} scale={0.05} />
      <mesh geometry={nodes['node-e'].geometry} material={materials['Material.015']} position={[-1.14, -0.04, 0.46]} rotation={[-0.52, 0, -Math.PI / 2]} scale={0.14} />
      <mesh geometry={nodes['node-e-middle'].geometry} material={materials['Material.015']} position={[-1.13, -0.04, 0.46]} rotation={[-Math.PI / 6, 0, -Math.PI / 2]} scale={0.03} />
      <mesh geometry={nodes['github-white'].geometry} material={materials['Material.005']} position={[1.03, 0, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.8, 0.04, 0.8]} />
      <mesh geometry={nodes['sass-black'].geometry} material={materials['Material.007']} position={[0, -1.03, 0]} scale={[0.8, 0.04, 0.8]} />
      <mesh geometry={nodes['node-n'].geometry} material={materials['Material.015']} position={[-1.14, -0.05, -0.46]} rotation={[-0.53, 0, -Math.PI / 2]} scale={0.15} />
      <mesh geometry={nodes['github-logo'].geometry} material={materials['Material.004']} position={[1.08, -0.06, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={4.92} />
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.002']} position={[0.74, -1.1, 0.73]} rotation={[0, 0, Math.PI]} scale={[9.11, 10.78, 9.11]} />
    </group>
  )
}

useGLTF.preload('/hero.gltf')
