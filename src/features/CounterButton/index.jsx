import { useState } from "react"
import { Button2 } from "../../componentes/Form/Button2"

export default function CounterButton() {
  const [count, setCount] = useState(0)

  return (
    <Button2 onClick={() => setCount((prev) => prev + 1)}>
      Contador: {count}
    </Button2>
  )
}
