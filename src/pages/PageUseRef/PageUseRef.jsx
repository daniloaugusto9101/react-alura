import Card from "@/componentes/Card"
import ClickCounter from "@/componentes/ClickCounter"

export default function PageUseRef() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Exemplos uesRef
          </h1>

          <Card
            title="Desafio 1"
            description="Vamos supor que você queira guardar quantas vezes um botão foi clicado, mas sem re-renderizar o componente a cada clique. Olha só que tranquilo:"
          >
            <ClickCounter />
          </Card>
        </div>
      </div>
    </>
  )
}
