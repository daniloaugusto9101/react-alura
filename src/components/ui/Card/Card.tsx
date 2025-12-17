import type { CardProps } from "@/components/ui/Card/Card.types"

export default function Card({
  title = "Titulo teste",
  description = "Descrição teste",
  children,
}: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">{title}</h2>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  )
}
