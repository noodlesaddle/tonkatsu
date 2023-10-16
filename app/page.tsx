//@ts-nocheck
"use client"

import { Suspense, useRef } from "react"
import Link from "next/link"
import { Environment, Loader, OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Horse1 from "@/components/Horse1"

function Rig({ children }) {
  const outer = useRef<THREE.Group>(null!)
  const inner = useRef<THREE.Group>(null!)
  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime()
    outer.current.position.y = THREE.MathUtils.lerp(
      outer.current.position.y,
      0,
      1
    )
    inner.current.rotation.y = Math.sin(t / 2) * Math.PI
    inner.current.position.z = 2 + -Math.sin(t / 2) * 4
    inner.current.position.y = 0 + Math.sin(t / 2) * 1
  })
  return (
    <group position={[0, -100, 0]} ref={outer}>
      <group ref={inner}>{children}</group>
    </group>
  )
}
export default function IndexPage() {
  return (
    <section className="container grid grid-cols-1 items-center gap-5 pb-8 pt-6 md:grid-cols-2 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>

        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
        </div>
      </div>

      <div className="flex h-[20rem] overflow-hidden sm:w-full md:h-[28rem] md:w-full">
        <Canvas>
          <fog attach="fog" args={[0xfff0ea, 20, 80]} />
          <ambientLight intensity={2} />
          <OrbitControls enableZoom={false} />
          <directionalLight position={[1, 3, 2]} intensity={5} />

          <Suspense fallback={null}>
            <Rig>
              <group position={[0, -1, 1]}>
                <Horse1 />
              </group>
            </Rig>
          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </section>
  )
}
