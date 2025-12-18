import Label from "@/components/ui/Form/Label"
import Input from "@/components/ui/Form/Input"

export default function InputExample() {
  return (
    <div className="flex flex-col gap-2 mt-6">
      <Label className="mb-1" htmlFor="teste">
        Name
      </Label>
      <Input
        id="teste"
        className="px-3 py-1.5 rounded border border-gray-300"
      />
    </div>
  )
}
