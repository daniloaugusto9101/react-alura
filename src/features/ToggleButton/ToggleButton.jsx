import { useState } from "react"
import { Button } from "@/components/Form/Button"

export default function ToggleButton() {
  const [isActive, setIsActive] = useState(true)
  const btColor = isActive ? "blue" : "red"

  return (
    <Button onClick={() => setIsActive((prev) => !prev)} btColor={btColor}>
      Azul / vermelho
    </Button>
  )
}
