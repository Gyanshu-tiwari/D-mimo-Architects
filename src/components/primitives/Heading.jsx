import { cn } from "@/lib/utils";
import * as React from "react";

const headingVariants = {
  h1: "font-display text-[40px] md:text-[56px] lg:text-[66px] leading-[1.08] tracking-[0.015em] font-medium",
  h2: "font-display text-[32px] md:text-[44px] lg:text-[54px] leading-[1.08] tracking-[0.015em] font-medium",
  h3: "font-display text-[26px] md:text-[34px] lg:text-[48px] leading-[1.08] tracking-[0.015em] font-medium",
  h4: "font-display text-[22px] md:text-[26px] lg:text-[30px] leading-[1.12] tracking-[0.015em] font-medium",
  h5: "font-display text-[20px] md:text-[22px] lg:text-[25px] leading-[1.2] tracking-[0.015em] font-medium",
  h6: "font-display text-[18px] md:text-[20px] lg:text-[23px] leading-[1.2] tracking-[0.015em] font-medium",
};

export const Heading = React.forwardRef(({ as: Component = "h2", className, ...props }, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(headingVariants[Component], className)}
      {...props}
    />
  );
});

Heading.displayName = "Heading";
