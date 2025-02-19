"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

interface StellarEvolutionSimulationProps {
  step: number
}

export default function StellarEvolutionSimulation({ step }: StellarEvolutionSimulationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    particles: THREE.Points
    controls: OrbitControls
    velocities: THREE.Vector3[]
    targetPositions: THREE.Vector3[]
    rotationSpeed: number
  }>()

  useEffect(() => {
    if (!containerRef.current) return

    // Initialize scene
    const initScene = () => {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current!.clientWidth / containerRef.current!.clientHeight,
        0.1,
        1000,
      )
      const renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setSize(containerRef.current!.clientWidth, containerRef.current!.clientHeight)
      containerRef.current!.innerHTML = ""
      containerRef.current!.appendChild(renderer.domElement)

      camera.position.z = 5

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.05

      // Create particles
      const particlesGeometry = new THREE.BufferGeometry()
      const particleCount = 5000
      const positions = new Float32Array(particleCount * 3)
      const velocities: THREE.Vector3[] = []
      const targetPositions: THREE.Vector3[] = []

      for (let i = 0; i < particleCount * 3; i += 3) {
        // Initial scattered positions (larger radius)
        const radius = 3
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)

        positions[i] = radius * Math.sin(phi) * Math.cos(theta)
        positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[i + 2] = radius * Math.cos(phi)

        velocities.push(new THREE.Vector3(0, 0, 0))
        targetPositions.push(new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]))
      }

      particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: new THREE.Color(0xffffff),
        transparent: true,
        blending: THREE.AdditiveBlending,
      })

      const particles = new THREE.Points(particlesGeometry, particlesMaterial)
      scene.add(particles)

      return { scene, camera, renderer, particles, controls, velocities, targetPositions, rotationSpeed: 0 }
    }

    const sceneObjects = initScene()
    sceneRef.current = sceneObjects

    // Animation
    let animationFrameId: number
    const animate = () => {
      if (!sceneRef.current) return

      const { scene, camera, renderer, particles, controls, velocities, targetPositions } = sceneRef.current
      const positions = particles.geometry.attributes.position.array as Float32Array

      // Update particle positions based on step
      for (let i = 0; i < positions.length; i += 3) {
        const index = i / 3
        const currentPos = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2])
        const velocity = velocities[index]
        const targetPos = targetPositions[index]

        switch (step) {
          case 1: // Nebula condensation
            // Slowly drift together
            targetPos.multiplyScalar(0.999)
            break
          case 2: // Gravitational collapse
            // Increase velocity towards center
            const distanceToCenter = currentPos.length()
            const direction = currentPos.clone().normalize().multiplyScalar(-1)
            velocity.add(direction.multiplyScalar(0.0001 * distanceToCenter))
            break
          case 3: // Core formation
            // Form tight ball
            targetPos.multiplyScalar(0.95)
            break
          case 4: // Nuclear fusion
            // Expand then maintain
            const targetRadius = 1.5
            const currentRadius = currentPos.length()
            if (currentRadius > targetRadius) {
              targetPos.normalize().multiplyScalar(targetRadius)
            }
            sceneRef.current.rotationSpeed = Math.min(sceneRef.current.rotationSpeed + 0.0001, 0.02)
            break
          case 5: // Red Giant
            // Expand further
            const redGiantRadius = 2.5
            const currentRedGiantRadius = currentPos.length()
            if (currentRedGiantRadius < redGiantRadius) {
              targetPos.normalize().multiplyScalar(currentRedGiantRadius + 0.01)
            }
            break
          case 6: // Supergiant
            // Expand even further
            const superGiantRadius = 3.5
            const currentSuperGiantRadius = currentPos.length()
            if (currentSuperGiantRadius < superGiantRadius) {
              targetPos.normalize().multiplyScalar(currentSuperGiantRadius + 0.01)
            }
            break
          case 7: // Supernova
            // Rapid expansion
            targetPos.multiplyScalar(1.1)
            break
          case 8: // Remnant (White Dwarf/Neutron Star/Black Hole)
            // Collapse to very small size
            targetPos.multiplyScalar(0.8)
            break
        }

        // Update position with velocity and damping
        velocity.multiplyScalar(0.98) // Damping
        currentPos.add(velocity)

        // Move towards target position
        currentPos.lerp(targetPos, 0.1)

        positions[i] = currentPos.x
        positions[i + 1] = currentPos.y
        positions[i + 2] = currentPos.z
      }

      // Rotate particles
      particles.rotation.y += sceneRef.current.rotationSpeed

      particles.geometry.attributes.position.needsUpdate = true

      // Update particle appearance
      const particlesMaterial = particles.material as THREE.PointsMaterial
      switch (step) {
        case 1: // Nebula
          particlesMaterial.color.set(0x6495ed)
          particlesMaterial.size = 0.02
          break
        case 2: // Collapse
          particlesMaterial.color.set(0x9370db)
          particlesMaterial.size = 0.025
          break
        case 3: // Core formation
          particlesMaterial.color.set(0xffa500)
          particlesMaterial.size = 0.03
          break
        case 4: // Main sequence
          particlesMaterial.color.set(0xffd700)
          particlesMaterial.size = 0.035
          break
        case 5: // Red Giant
          particlesMaterial.color.set(0xff6347)
          particlesMaterial.size = 0.04
          break
        case 6: // Supergiant
          particlesMaterial.color.set(0xff4500)
          particlesMaterial.size = 0.05
          break
        case 7: // Supernova
          particlesMaterial.color.set(0xffffff)
          particlesMaterial.size = 0.06
          break
        case 8: // Remnant
          particlesMaterial.color.set(0x808080)
          particlesMaterial.size = 0.01
          break
      }

      controls.update()
      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!containerRef.current || !sceneRef.current) return
      const { camera, renderer } = sceneRef.current
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
      sceneRef.current?.renderer.dispose()
    }
  }, [step])

  return (
    <div
      ref={containerRef}
      className="w-full aspect-square rounded-lg overflow-hidden bg-slate-900 border border-slate-700"
    />
  )
}

