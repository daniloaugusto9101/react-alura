import Card from "../../componentes/Card"
import ModalExample from "../../features/ModalExample"
import ToggleButton from "../../features/ToggleButton"
import CounterButton from "../../features/CounterButton"
import ProductSearch from "../../features/ProductSearch"

export default function index() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Exemplos useState
        </h1>

        <Card
          title="Desafio 1"
          description="Criei componente de botão que abra e fecha um modal, Dentro do Modal terá um botão que fecha o próprio modal"
        >
          <ModalExample />
        </Card>

        <Card
          title="Desafio 2"
          description="Criei um botão, que ao clicar nele ele alterna entre azul e vermelho, onde azul é do estado ativo e vermelho do estado inativo"
        >
          <ToggleButton />
        </Card>

        <Card title="Desafio 3">
          <CounterButton />
        </Card>

        <Card title="Desafio 4">
          <ProductSearch />
        </Card>
      </div>
    </div>
  )
}
