import { cn } from "@/lib/utils";
import * as React from "react";

export const Text = React.forwardRef(({ className, as: Component = "p", size = "base", ...props }, ref) => {
  const sizes = {
    xs: "text-[12px] leading-[1.4]",
    sm: "text-[14px] leading-[1.5]",
    base: "text-[16px] md:text-[18px] leading-[1.4] tracking-normal",
    lg: "text-[18px] md:text-[20px] leading-[1.4]",
  };

  return (
    <Component
      ref={ref}
      className={cn(sizes[size], "text-opacity-80", className)}
      {...props}
    />
  );
});

Text.displayName = "Text";
