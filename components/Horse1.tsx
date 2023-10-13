import React, { useEffect, useRef } from "react"
import { useAnimations, useGLTF, useTexture } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import {
  AmbientLight,
  DirectionalLight,
  MeshLambertMaterial,
  TextureLoader,
} from "three"

type ModelProps = {
  position: any
  scale: number
  horseAction?: any
}

const Model: React.FC<ModelProps> = ({ ...props }) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/horse1.gltf")
  const { actions } = useAnimations(animations, group)
  const { camera } = useThree()
  const grassTexture = useTexture("/public/grassTexture.jpeg")
  useEffect(() => {
    camera.position.set(1, 2.5, 7.5) // Adjust the values as needed
    camera.lookAt(1, 2, 2) // Adjust the target point as needed
    const horseAction = actions.horse
    horseAction?.setEffectiveTimeScale(1.2)
    // Play the animation
    actions.horse?.play()
  }, [])

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <mesh
          position={[0, 0.1, -1]}
          rotation={[-Math.PI / 2, 0, 2.2]}
          receiveShadow
        >
          <circleGeometry args={[5, 100, 0.2]} />{" "}
          {/* Adjust the radius, segments, and thickness as needed */}
          <meshLambertMaterial attach="material" map={grassTexture} />
        </mesh>
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 1.8, 0, -1.6]}
            scale={0.2}
          >
            <group name="b3c9bcb94f114ebeafddc7c3390b8d44abccleanermaterialmergergles">
              <group name="Object_2" rotation={[Math.PI / 2.0, 1.2, 0]}>
                <group name="MorphMainGroup">
                  <mesh
                    name="Horse1Shape"
                    geometry={nodes.Horse1Shape.geometry}
                    animations={true}
                    material={materials.Horse1Shape}
                    morphTargetDictionary={
                      nodes.Horse1Shape.morphTargetDictionary
                    }
                    morphTargetInfluences={
                      nodes.Horse1Shape.morphTargetInfluences
                    }
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </>
  )
}

useGLTF.preload("/horse1.gltf")

export default Model
