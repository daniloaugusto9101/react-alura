import Card from "@/components/Card"
import { ButtonT } from "@/components/Form/ButtonT"

export default function PageContextApi() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          PageTypescript
        </h1>

        <Card title="Desafio 1" description="Crie um botao com typescript">
          <ButtonT></ButtonT>
        </Card>
      </div>
    </div>
  )
}
