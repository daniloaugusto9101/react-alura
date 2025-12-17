import Modal from "@/components/ui/Modal"
import React from "react"

export default function ModalExample() {
  const [isOpen, setIsOpen] = React.useState(false)

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
