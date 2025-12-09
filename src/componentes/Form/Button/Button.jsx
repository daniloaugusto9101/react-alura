import "./button.estilos.css"

export function Button({ children, onClick, btColor }) {
  return (
    <button style={{ backgroundColor: btColor }} onClick={onClick}>
      {children}
    </button>
  )
}
