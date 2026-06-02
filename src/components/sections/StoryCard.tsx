import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useThreeScene } from '../../hooks/useThreeScene'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const COLORS = [
  new THREE.Color('#bad9ee'),
  new THREE.Color('#0088dd'),
  new THREE.Color('#646cff'),
  new THREE.Color('#61dafb'),
]

const COUNT = 800
const SIZE = 200

function sampleFromCanvas(ctx: CanvasRenderingContext2D, count: number): Float32Array {
  const pixels = ctx.getImageData(0, 0, SIZE, SIZE).data
  const candidates: [number, number][] = []
  for (let y = 0; y < SIZE; y++)
    for (let x = 0; x < SIZE; x++)
      if (pixels[(y * SIZE + x) * 4 + 3] > 128) candidates.push([x, y])

  const pts = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const [px, py] = candidates[Math.floor(Math.random() * candidates.length)]
    pts[i * 3]     = ((px / SIZE) - 0.5) * 3
    pts[i * 3 + 1] = -((py / SIZE) - 0.5) * 3
    pts[i * 3 + 2] = (Math.random() - 0.5) * 0.2
  }
  return pts
}

function randomSphere(count: number): Float32Array {
  const pts = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    const r = 1.2 + (Math.random() - 0.5) * 0.4
    pts[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
    pts[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    pts[i * 3 + 2] = r * Math.cos(phi)
  }
  return pts
}

interface Props { id: string; content: string; svgSrc: string }

export default function StoryCard({ id, content, svgSrc }: Props) {
  const mountRef = useRef<HTMLDivElement>(null)
  const hoveredRef = useRef(false)

  useIntersectionObserver(id, {
    threshold: 0.2,
    onIntersect: () => {
      const el = document.getElementById(id)
      if (el) el.style.opacity = '1'
    },
    onLeave: () => {
      const el = document.getElementById(id)
      if (el) el.style.opacity = '0'
    },
  })

  const svgTargetsRef = useRef<Float32Array | null>(null)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = SIZE; canvas.height = SIZE
    const ctx = canvas.getContext('2d')!
    const img = new Image()
    img.onload = () => {
      ctx.drawImage(img, 0, 0, SIZE, SIZE)
      svgTargetsRef.current = sampleFromCanvas(ctx, COUNT)
    }
    img.src = svgSrc
  }, [svgSrc])

  useEffect(() => {
    const mount = mountRef.current!
    const sphereBase = randomSphere(COUNT)

    return useThreeScene({
      mount,
      cameraZ: 4,
      onSetup: ({ scene, camera }) => {
        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(sphereBase), 3))

        const colors = new Float32Array(COUNT * 3)
        for (let i = 0; i < COUNT; i++) {
          const c = COLORS[i % COLORS.length]
          colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b
        }
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const points = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.022, vertexColors: true, transparent: true }))
        scene.add(points)

        const applyScale = () => {
          const vh = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z
          const vw = vh * camera.aspect
          points.scale.set(vw * 0.28, vh * 0.28, 1)
        }

        const onEnter = () => { hoveredRef.current = true }
        const onLeave = () => { hoveredRef.current = false }
        mount.addEventListener('mouseenter', onEnter)
        mount.addEventListener('mouseleave', onLeave)

        const posAttr = geo.attributes.position as THREE.BufferAttribute
        let t = 0

        return {
          onFrame: (delta) => {
            t += delta
            const hovered = hoveredRef.current && svgTargetsRef.current !== null
            const speed = hovered ? 0.06 : 0.03
            const target = hovered ? svgTargetsRef.current! : sphereBase

            for (let i = 0; i < COUNT; i++) {
              const tx = target[i * 3], ty = target[i * 3 + 1], tz = target[i * 3 + 2]
              const cx = posAttr.getX(i), cy = posAttr.getY(i), cz = posAttr.getZ(i)
              posAttr.setXYZ(i, cx + (tx - cx) * speed, cy + (ty - cy) * speed, cz + (tz - cz) * speed)
            }
            posAttr.needsUpdate = true

            if (!hovered) {
              points.rotation.y = Math.sin(t * 0.3) * 0.4
              points.rotation.x = Math.cos(t * 0.2) * 0.2
            } else {
              points.rotation.y += (0 - points.rotation.y) * 0.05
              points.rotation.x += (0 - points.rotation.x) * 0.05
            }
          },
          onResize: applyScale,
          onDispose: () => {
            mount.removeEventListener('mouseenter', onEnter)
            mount.removeEventListener('mouseleave', onLeave)
          },
        }
      },
    })
  }, [])

  return (
    <div className="story_card" id={id}>
      <div className="story_card_canvas" ref={mountRef} />
      <p className="story_card_content">{content}</p>
    </div>
  )
}
