import Modal from "@/componentes/Modal"
import { useState } from "react"

export default function index() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <h2>Desafio 1</h2>
      <p>
        Criei componente de botão que abra e fecha um modal, Dentro do Modal
        terá um botão que fecha o próprio modal
      </p>
      <button onClick={() => setIsOpen(true)}>Abrir</button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  )
}
