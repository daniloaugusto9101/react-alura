import { useState } from "react"
import Modal from "@/componentes/Modal"

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Abrir
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  )
}
