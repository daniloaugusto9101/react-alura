import { Header } from "@/features/Header"
import { Banner } from "@/features/Banner"
import { FormularioDeEvento } from "@/features/FormularioDeEvento"
import { Card } from "@/features/Card"
import "./alura-page.style.css"

export default function Alura() {
  return (
    <main className="alura-page">
      <Header />
      <Banner />
      <FormularioDeEvento />
      <Card />
    </main>
  )
}
