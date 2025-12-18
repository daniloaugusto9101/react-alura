import Card from "@/components/ui/Card"
import PageContainer from "@/components/ui/PageContainer"
import InputExample from "@/features/InputExample"

export default function TypescriptPage() {
  return (
    <>
      <PageContainer>
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Exemplos Typescript
        </h1>
        <Card
          title="Desafio 1"
          description="Criei um elemento input personalizado"
        >
          <InputExample />
        </Card>
      </PageContainer>
    </>
  )
}
