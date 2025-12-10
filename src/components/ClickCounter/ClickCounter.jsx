import React from "react"
import { Button } from "@/components/Form/Button"
import { Input } from "../Form/Input"

export default function ClickCounter() {
  const contadorRef = React.useRef(0)
  const inputRef = React.useRef(null)
  function handleClick() {
    contadorRef.current++
    inputRef.current.focus()
  }
  return (
    <>
      <Input inputRef={inputRef} />
      <Button onClick={handleClick}>Clique aqui</Button>
    </>
  )
}
