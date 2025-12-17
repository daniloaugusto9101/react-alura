import type React from "react"

export type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  btColor?: "bg-blue-500" | "bg-red-500"
}