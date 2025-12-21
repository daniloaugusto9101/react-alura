import { Button } from "@/components/ui/button"
import Card from "@/components/ui/Card"
import {
  InputGroup,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import PageContainer from "@/components/ui/PageContainer"

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
          <InputGroup>
            <InputGroupText>Nome</InputGroupText>
            <InputGroupInput type="text" placeholder="Digite seu nome" />
          </InputGroup>
          <InputGroup>
            <InputGroupText>Email</InputGroupText>
            <InputGroupInput type="email" placeholder="Digite seu email" />
          </InputGroup>
          <Button>Enviar</Button>
        </Card>
      </PageContainer>
    </>
  )
}
