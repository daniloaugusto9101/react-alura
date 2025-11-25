import Modal from "@/componentes/Modal"
import { useState } from "react"
import { Button } from "@/componentes/Form/Button"
import { Button2 } from "../../componentes/Form/Button2"

export default function index() {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(true)
  const btColor = isActive ? "blue" : "red"
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Desafio 1</h2>
      <p>
        Criei componente de botão que abra e fecha um modal, Dentro do Modal
        terá um botão que fecha o próprio modal
      </p>
      <button onClick={() => setIsOpen(true)}>Abrir</button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}

      <h2>Desafio 2</h2>
      <p>
        Criei um botão, que ao clicar nele ele alterna entre azul e vermelho,
        onde azul é do estado ativo e vermelho do estado inativo
      </p>
      <Button onClick={() => setIsActive((prev) => !prev)} btColor={btColor}>
        Azul / vermelho
      </Button>
      <h2>Desafio 3</h2>
      <Button2 onClick={() => setCount((prev) => prev + 1)}>
        Contador: {count}
      </Button2>
    </div>
  )
}
