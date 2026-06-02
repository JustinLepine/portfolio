import * as THREE from 'three'
import { createNoise3D } from 'simplex-noise'
import { useThreeMount } from '../../hooks/useThreeScene'

const COLORS = [
  new THREE.Color('#bad9ee'),
  new THREE.Color('#0088dd'),
  new THREE.Color('#646cff'),
  new THREE.Color('#61dafb'),
]

export default function BlobScene() {
  const mountRef = useThreeMount((mount) => ({
    mount,
    cameraZ: 6,
    onSetup: ({ scene, camera }) => {
      const geo = new THREE.IcosahedronGeometry(1.2, 6)
      const posAttr = geo.attributes.position
      const count = posAttr.count
      const noise3D = createNoise3D()
      const base = new Float32Array(posAttr.array)

      const colors = new Float32Array(count * 3)
      for (let i = 0; i < count; i++) {
        const c = COLORS[i % COLORS.length]
        colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
      }
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      const blob = new THREE.Points(geo, new THREE.PointsMaterial({
        size: 0.018, vertexColors: true, transparent: true, opacity: 0.85,
      }))

      const applyScale = () => {
        const visibleHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z
        const visibleWidth = visibleHeight * camera.aspect
        blob.scale.set((visibleWidth * 0.55) / (1.2 * 2), (visibleHeight * 0.5) / (1.2 * 1.8), 1)
      }
      scene.add(blob)

      const target = new THREE.Vector2()
      const current = new THREE.Vector2()
      let t = 0

      const onMouseMove = (e: MouseEvent) => {
        const r = mount.getBoundingClientRect()
        target.set(
          ((e.clientX - r.left) / r.width - 0.5) * 2,
          -((e.clientY - r.top) / r.height - 0.5) * 2
        )
      }
      mount.addEventListener('mousemove', onMouseMove)

      return {
        onFrame: (delta) => {
          t += delta * 0.3
          current.lerp(target, 0.035)
          blob.rotation.y = current.x * 0.4
          blob.rotation.x = -current.y * 0.4
          blob.position.x = current.x * 0.8
          blob.position.y = current.y * 0.3
          for (let i = 0; i < count; i++) {
            const bx = base[i * 3], by = base[i * 3 + 1], bz = base[i * 3 + 2]
            const s = 1 + noise3D(bx * 0.8 + t, by * 0.8 + t, bz * 0.8) * 0.28
            posAttr.setXYZ(i, bx * s, by * s, bz * s)
          }
          posAttr.needsUpdate = true
        },
        onResize: applyScale,
        onDispose: () => mount.removeEventListener('mousemove', onMouseMove),
      }
    },
  }))

  return <div ref={mountRef} className="blob" />
}
