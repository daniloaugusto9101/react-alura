import * as React from "react"

export type ButtonProps = React.ComponentProps<"button"> & {
  btColor?: "bg-gray-200" | "bg-blue-500" | "bg-red-500"
}