import Button from "@/components/ui/Form/Button"
import React from "react"

export default function ButtonIncrement() {
  const [count, setCount] = React.useState(0)
  const handleClick = () => {
    setCount((prev) => prev + 1)
  }
  return <Button onClick={handleClick}>Contador: {count}</Button>
}
