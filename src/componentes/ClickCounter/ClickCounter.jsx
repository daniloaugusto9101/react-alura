import React from "react"
import { Button } from "@/componentes/Form/Button"

export default function ClickCounter() {
  const contadorRef = React.useRef(0)
  function handleClick() {
    contadorRef.current++
  }
  return <Button onClick={handleClick}>Clique aqui</Button>
}
