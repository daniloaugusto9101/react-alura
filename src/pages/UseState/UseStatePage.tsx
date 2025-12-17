import Card from "@/components/ui/Card"
import PageContainer from "@/components/ui/PageContainer"
import ModalExample from "@/features/ModalExample"

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
      </PageContainer>
    </>
  )
}
