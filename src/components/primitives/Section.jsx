import * as React from "react"
import { cn } from "@/lib/utils"

export const Section = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("py-20 md:py-28 lg:py-32", className)}
      {...props}
    >
      {children}
    </section>
  )
})
Section.displayName = "Section"
