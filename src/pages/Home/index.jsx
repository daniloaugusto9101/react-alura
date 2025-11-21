import { Header } from "@/feature/Header"
import { Banner } from "@/feature/Banner"
import { FormularioDeEvento } from "@/feature/FormularioDeEvento"
import { Card } from "@/feature/Card"

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
