import type { Vendas } from "@/features/Example4Type/Example4Type.type"
import React from "react"

const Example4Type = () => {
  const [data, setData] = React.useState<null | Vendas[]>(null)
  const [dataInicial, setDataInicial] = React.useState("")
  const [dataFinal, setDataFinal] = React.useState("")

  React.useEffect(() => {
    if (!dataInicial || !dataFinal) return
    const fetchData = async () => {
      const resp = await fetch(
        `https://data.origamid.dev/vendas?inicio=${dataInicial}&final=${dataFinal}`
      )
      const vendas = await resp.json()
      setData(vendas)
    }
    fetchData()
  }, [dataInicial, dataFinal])

  return (
    <div>
      <label htmlFor="">
        Data inicial
        <input
          type="date"
          value={dataInicial}
          onChange={(e) => setDataInicial(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Data Final
        <input
          type="date"
          value={dataFinal}
          onChange={(e) => setDataFinal(e.target.value)}
        />
      </label>
      {data === null && <p>Nenhuma venda encontrada.</p>}
      {data &&
        data.length > 0 &&
        data.map((venda) => (
          <div key={venda.id} className="mb-10">
            <p>
              nome: {venda.nome} | status: {venda.status} | data: {venda.data}
            </p>
            <hr />
          </div>
        ))}
    </div>
  )
}

export default Example4Type
