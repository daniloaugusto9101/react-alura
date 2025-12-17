import type { PageContainerProps } from "@/components/ui/PageContainer/PageContainer.types"

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-6">{children}</div>
    </div>
  )
}
