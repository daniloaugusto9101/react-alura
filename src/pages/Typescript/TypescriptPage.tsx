import { Button } from "@/components/ui/button"
import Card from "@/components/ui/Card"
import {
  InputGroup,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import PageContainer from "@/components/ui/PageContainer"
import Example2Type from "@/features/Example2Type/Example2Type"
import Example3Type from "@/features/Example3Type/Example3Type"
import Example4Type from "@/features/Example4Type"

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
        <Card
          title="Desafio 2"
          description="Criei um checkbox e faça tipagem dele de forma explicita"
        >
          <Example2Type label="Aceita?" />
        </Card>
        <Card
          title="Desafio 3"
          description="Exemplo de uso de type com useState"
        >
          <Example3Type />
        </Card>
        <Card
          title="Desafio 4"
          description="Faça um requição API usando todos o conhceimnto de typescrip"
        >
          <Example4Type />
        </Card>
      </PageContainer>
    </>
  )
}
