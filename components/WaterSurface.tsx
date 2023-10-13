import React from "react"
import { useFrame } from "@react-three/fiber"
import { Mesh } from "three"
import * as THREE from "three"

const WaterSurface: React.FC = () => {
  const waterGeometry = new THREE.PlaneGeometry(20, 20, 100, 100)
  const waterMaterial = new THREE.MeshBasicMaterial({
    color: 0x0080ff,
    transparent: true,
    opacity: 0.4,
  })
  const waterMesh = new Mesh(waterGeometry, waterMaterial)

  useFrame(() => {
    // Simulate water ripples by gradually changing the opacity
    waterMesh.material.opacity -= 0.001
    if (waterMesh.material.opacity < 0.6) {
      waterMesh.material.opacity = 0.6
    }
  })

  // Position the water surface below the horse's feet
  waterMesh.position.set(0, 0, -2)

  return <primitive object={waterMesh} />
}

export default WaterSurface
