type Button2Props = {
  setData: React.Dispatch<React.SetStateAction<number>>
}

const Button2 = ({ setData }: Button2Props) => {
  return (
    <div>
      <button onClick={() => setData((n) => n + 1)} className="bg-amber-700">
        incrementar
      </button>
    </div>
  )
}

export default Button2
