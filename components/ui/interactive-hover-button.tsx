import React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
}

const InteractiveHoverButton = React.forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(
  ({ text = "Button", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative w-44 cursor-pointer overflow-hidden rounded-full border bg-background p-2 text-center font-semibold",
          className,
        )}
        {...props}
      >
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          <span>{text}</span>
          <ArrowRight />
        </div>
        <div className="absolute left-0 top-0 h-full w-0 bg-violet-600 transition-all duration-300 group-hover:w-full"></div>
      </button>
    )
  },
)

InteractiveHoverButton.displayName = "InteractiveHoverButton"

export default InteractiveHoverButton