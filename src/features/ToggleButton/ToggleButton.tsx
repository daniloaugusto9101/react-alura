import Button from "@/components/ui/Form/Button"
import { useState } from "react"

export default function ToggleButton() {
  const [isActive, setIsActive] = useState(true)
  const btColor = isActive ? "bg-blue-500" : "bg-red-500"

  return (
    <Button onClick={() => setIsActive((prev) => !prev)} btColor={btColor}>
      Azul / vermelho
    </Button>
  )
}
