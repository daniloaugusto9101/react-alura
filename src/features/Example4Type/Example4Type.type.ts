type Vendas = {
  id: string
  nome: string
  preco: number
  status: "processando" | "pago" | "falha"
  pagamento: "boleto" | "cartao" | "pix"
  parcelas: number | null
  data: string
}

export type { Vendas }