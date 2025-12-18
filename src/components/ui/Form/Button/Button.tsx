import type { ButtonProps } from "@/components/ui/Form/Button/Button.types"

export default function Button({
  children = "Clique aqui",
  btColor = "bg-gray-200",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-6 py-2 rounded-lg font-medium text-gray-900 transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${btColor}`}
      {...props}
    >
      {children}
    </button>
  )
}
