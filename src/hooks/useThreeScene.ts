import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ThreeSceneOptions {
  mount: HTMLDivElement
  fov?: number
  cameraZ?: number
  onSetup: (ctx: { scene: THREE.Scene; camera: THREE.PerspectiveCamera }) => {
    onFrame: (delta: number) => void
    onResize?: (width: number, height: number) => void
    onDispose?: () => void
  }
}

export function useThreeScene({
  mount,
  fov = 60,
  cameraZ = 2,
  onSetup,
}: ThreeSceneOptions) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;pointer-events:none'
  mount.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(fov, 1, 0.1, 100)
  camera.position.z = cameraZ

  const { onFrame, onResize, onDispose } = onSetup({ scene, camera })

  let animId: number
  let last = performance.now()
  const loop = () => {
    animId = requestAnimationFrame(loop)
    const now = performance.now()
    onFrame((now - last) / 1000)
    last = now
    renderer.render(scene, camera)
  }
  loop()

  const ro = new ResizeObserver(([entry]) => {
    const { width, height } = entry.contentRect
    if (!width || !height) return
    renderer.setSize(width, height)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    onResize?.(width, height)
  })
  ro.observe(mount)

  return () => {
    cancelAnimationFrame(animId)
    ro.disconnect()
    onDispose?.()
    renderer.dispose()
    mount.removeChild(renderer.domElement)
  }
}

export function useThreeMount(
  setup: (mount: HTMLDivElement) => ThreeSceneOptions
) {
  const mountRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const mount = mountRef.current!
    return useThreeScene(setup(mount))
  }, [])
  return mountRef
}
