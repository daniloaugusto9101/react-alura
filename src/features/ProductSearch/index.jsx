import { useState } from "react"
import { Button2 } from "../../componentes/Form/Button2"

export default function ProductSearch() {
  const [isLoading, setIsLoading] = useState(false)
  const [produto, setProduto] = useState("")

  const handleClick = async (e) => {
    setIsLoading(true)
    const produtoSelecionado = e.target.value
    try {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${produtoSelecionado}`
      )
      if (!response.ok) throw new Error(`${response.status}`)
      const json = await response.json()
      setProduto(json)
    } catch (error) {
      console.log("Deu erro na requisição: " + error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <Button2 onClick={handleClick} value="tablet">
          Tablet
        </Button2>
        <Button2 onClick={handleClick} value="smartphone">
          Smartphone
        </Button2>
        <Button2 onClick={handleClick} value="notebook">
          Notebook
        </Button2>
      </div>
      {isLoading && <p className="text-gray-600">Carregando...</p>}
      {!isLoading && produto && (
        <p className="text-gray-800 font-medium">Produto: {produto.nome}</p>
      )}
    </div>
  )
}
