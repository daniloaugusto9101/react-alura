import React from "react"

export default function PageUseRef() {
  const dialogRef = React.useRef(null)

  const openDialog = () => {
    dialogRef.current.showModal()
  }

  // "Close" button closes the dialog
  const closeDialog = () => {
    console.log("close")
    dialogRef.current.close()
  }

  return (
    <div>
      <h1>Page useRef</h1>
      <h2>
        <b>Desafio 1</b>
      </h2>
      <p>
        por meio de um botao faz que o modal Dialog padroa do html aparece na
        tela
      </p>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={closeDialog}>
          Close
        </button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
      <button className="bg-red-200" onClick={openDialog}>
        Show the dialog
      </button>
    </div>
  )
}
