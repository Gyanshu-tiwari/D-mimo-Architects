import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const buttonVariants = {
  base: "font-display inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer",
  variants: {
    primary: "bg-[#111827] text-white border border-neutral-800 shadow-sm hover:bg-black hover:border-black hover:shadow-md",
    secondary: "bg-white text-neutral-900 border border-neutral-300 shadow-xs hover:border-neutral-900 hover:bg-neutral-50 hover:shadow-sm",
    outline: "bg-transparent text-neutral-900 border border-neutral-900 hover:bg-neutral-900 hover:text-white",
    ghost: "bg-transparent text-neutral-900 border border-transparent hover:bg-neutral-100 hover:border-neutral-200",
    link: "text-neutral-900 underline-offset-4 hover:underline p-0 h-auto border-none",
  },
  sizes: {
    default: "h-11 px-6 py-2.5",
    sm: "h-9 px-4 text-xs",
    lg: "h-13 px-8 text-base tracking-wide",
    icon: "h-10 w-10 p-0 rounded-full",
  }
}

export const Button = React.forwardRef(({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants.base, buttonVariants.variants[variant], buttonVariants.sizes[size], className)}
      {...props}
    />
  )
})
Button.displayName = "Button"
