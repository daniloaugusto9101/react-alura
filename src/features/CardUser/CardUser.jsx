import React from "react"
import { GlobalUserContext } from "@/pages/PageContextApi/UserStorage"

export default function CardUser() {
  const global = React.useContext(GlobalUserContext)

  console.log(global)

  return (
    <>
      <h1>Card1 - Dados recebido do storage: {global.nome}</h1>
    </>
  )
}
