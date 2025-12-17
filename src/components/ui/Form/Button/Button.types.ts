import React from "react"

export type ButtonProps = {
  children?: React.ReactNode
  onClick?: () => void
  btColor?: "bg-gray-200" | "bg-blue-500" | "bg-red-500"
}