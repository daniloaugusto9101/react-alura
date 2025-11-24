import "./button.estilos.css"

export function Button({ children, setIsActive, btColor }) {
  return (
    <button
      style={{ backgroundColor: btColor }}
      onClick={() => setIsActive((prev) => !prev)}
    >
      {children}
    </button>
  )
}
