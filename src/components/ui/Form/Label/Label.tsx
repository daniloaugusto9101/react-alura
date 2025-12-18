import type { LabelProps } from "@/components/ui/Form/Label/Label.types"

export default function Label({ children, ...props }: LabelProps) {
  return <label {...props}>{children}</label>
}
