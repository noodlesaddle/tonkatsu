"use client"

import { Suspense } from "react"
import Link from "next/link"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Horse1 from "@/components/Horse1"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 grid-cols-1 md:grid-cols-2">
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
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.7} />
          <directionalLight position={[-3, 2, 5]} />
          <Suspense fallback={null}>
            <group position={[0, -1, 1]}>
              <Horse1 />
            </group>
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}
