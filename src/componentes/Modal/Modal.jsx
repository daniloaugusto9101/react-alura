import React, { useState } from "react"
import "./modal.estilos.css"

export default function Modal({ setIsOpen }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          className="modal-close"
          aria-label="Fechar modal"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <div className="modal-body">modal</div>
      </div>
    </div>
  )
}
