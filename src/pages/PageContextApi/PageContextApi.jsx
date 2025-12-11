import Card from "@/components/Card"
import CardUser from "@/features/CardUser"
import CardUser2 from "@/features/CardUser2"
import { UserStorage } from "./UserStorage"

export default function PageContextApi() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Context API</h1>

        <Card
          title="Desafio 1"
          description="Crie 2 componente irmão e disponibilize um contexto Global para eles, por exemplo nome do usuario"
        >
          <UserStorage>
            <CardUser />
            <CardUser2 />
          </UserStorage>
        </Card>
      </div>
    </div>
  )
}
