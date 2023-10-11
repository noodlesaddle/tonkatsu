import * as React from "react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className=" inline-flex items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div>
            <Icons.logo />
          </div>
          <div>
            <p className="text-center text-sm leading-loose md:text-left">
              Thank you for visiting my personal website. Peace from
              <span className="ml-2">{new Date().getFullYear()}</span>
            </p>
          </div>
          <div>
            <Icons.handMetal size={14} />
          </div>
        </div>
      </div>
    </footer>
  )
}
