import * as React from "react"
import { cn } from "../../utils/cn"
import { AlertCircle, CheckCircle, Info, X } from "lucide-react"

const Alert = React.forwardRef(({ className, variant, children, onClose, ...props }, ref) => {
  const variants = {
    default: "bg-background text-foreground border-border",
    destructive: "bg-destructive/10 text-destructive border-destructive/50",
    success: "bg-green-500/10 text-green-500 border-green-500/50",
    warning: "bg-yellow-500/10 text-yellow-500 border-yellow-500/50",
  }

  const icons = {
    default: Info,
    destructive: AlertCircle,
    success: CheckCircle,
    warning: AlertCircle,
  }

  const Icon = icons[variant] || icons.default

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full rounded-lg border p-4",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    >
      <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 mt-0.5" />
        <div className="flex-1">{children}</div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
})
Alert.displayName = "Alert"

export { Alert }
