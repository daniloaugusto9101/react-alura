import "./button2.estilos.css"

export function Button2({ children, onClick, value }) {
  return (
    <button onClick={onClick} value={value}>
      {children}
    </button>
  )
}
