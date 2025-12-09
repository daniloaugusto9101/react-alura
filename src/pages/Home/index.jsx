import CardLink from "@/componentes/CardLink"

export default function Home() {
  const examples = [
    {
      id: 1,
      href: "/alura",
      title: "Alura",
      description: "Curso Alura",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      id: 2,
      href: "/useState",
      title: "useState",
      description: "Estado",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      href: "/useRef",
      title: "useRef",
      description: "Referências DOM",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      id: 4,
      href: "/contact",
      title: "Contact",
      description: "Formulário",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            React Examples
          </h1>
          <p className="text-gray-600 text-center text-sm mb-6">
            Exemplos de código e conceitos do React
          </p>

          <ul className="space-y-2">
            {examples.map((example) => (
              <CardLink
                key={example.id}
                href={example.href}
                title={example.title}
                description={example.description}
                gradient={example.gradient}
              />
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
