import * as React from "react";
import { cn } from "@/utils";

const Tag = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("bx-tag", className)} {...props} />
));
Tag.displayName = "Tag";

export { Tag };
