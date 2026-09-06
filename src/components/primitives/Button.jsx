import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const buttonVariants = {
  base: "font-display inline-flex items-center justify-center rounded-full text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  variants: {
    primary: "bg-[var(--foreground)] text-[var(--background)] hover:opacity-90",
    secondary: "bg-[var(--background)] text-[var(--foreground)] border border-gray-200 hover:bg-gray-50",
    ghost: "hover:bg-gray-100 text-[var(--foreground)]",
    link: "text-[var(--foreground)] underline-offset-4 hover:underline",
  },
  sizes: {
    default: "h-12 px-6 py-1",
    sm: "h-9 px-4",
    lg: "h-13 px-8 text-[16px]",
    icon: "h-10 w-10",
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
