import type { CardLinkProps } from "@/components/ui/CardLink/CardLink.types"

export default function CardLink({
  href = "#",
  title = "Titulo teste",
  description = "Descrição teste",
  gradient = "bg-gradient-to-r from-purple-500 to-pink-500",
}: CardLinkProps) {
  return (
    <li>
      <a
        href={href}
        className={`flex items-center justify-between p-3 ${gradient} rounded-lg shadow hover:shadow-md transition-shadow`}
      >
        <span className="font-semibold text-white">{title}</span>
        <span className="text-white text-sm opacity-90">{description}</span>
      </a>
    </li>
  )
}
