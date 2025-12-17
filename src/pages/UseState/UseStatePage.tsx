import Card from "@/components/ui/Card"
import PageContainer from "@/components/ui/PageContainer"
import ButtonIncrement from "@/features/ButtonIncrement"
import ModalExample from "@/features/ModalExample"
import ToggleButton from "@/features/ToggleButton"

export default function UseStatePage() {
  return (
    <>
      <PageContainer>
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
        <Card
          title="Desafio 3"
          description="Adicione um botão que incrementa o contador"
        >
          <ButtonIncrement />
        </Card>
      </PageContainer>
    </>
  )
}
