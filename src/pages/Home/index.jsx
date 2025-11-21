import { Header } from "@/features/Header"
import { Banner } from "@/features/Banner"
import { FormularioDeEvento } from "@/features/FormularioDeEvento"
import { Card } from "@/features/Card"

export function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <FormularioDeEvento />
      <Card />
    </main>
  )
}
