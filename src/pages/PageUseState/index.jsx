import Modal from "@/componentes/Modal"
import { useState } from "react"
import { Button } from "@/componentes/Form/Button"
import { Button2 } from "../../componentes/Form/Button2"

export default function index() {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(true)
  const btColor = isActive ? "blue" : "red"
  const [count, setCount] = useState(0)

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
    console.log(produto)
  }

  return (
    <div>
      <h2>Desafio 1</h2>
      <p>
        Criei componente de botão que abra e fecha um modal, Dentro do Modal
        terá um botão que fecha o próprio modal
      </p>
      <button onClick={() => setIsOpen(true)}>Abrir</button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}

      <h2>Desafio 2</h2>
      <p>
        Criei um botão, que ao clicar nele ele alterna entre azul e vermelho,
        onde azul é do estado ativo e vermelho do estado inativo
      </p>
      <Button onClick={() => setIsActive((prev) => !prev)} btColor={btColor}>
        Azul / vermelho
      </Button>
      <h2>Desafio 3</h2>
      <Button2 onClick={() => setCount((prev) => prev + 1)}>
        Contador: {count}
      </Button2>
      <h2>Desafio 4</h2>
      <Button2 onClick={handleClick} value="tablet">
        Tablet
      </Button2>
      <Button2 onClick={handleClick} value="smartphone">
        Smartphone
      </Button2>
      <Button2 onClick={handleClick} value="notebook">
        Notebook
      </Button2>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && produto && <p>Produto: {produto.nome}</p>}
    </div>
  )
}
