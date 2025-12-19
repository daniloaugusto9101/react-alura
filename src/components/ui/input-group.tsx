import Label from "@/components/ui/Form/Label"
import Input from "@/components/ui/Form/Input"
import { cn } from "@/lib/utils"

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-0.5 px-0 pt-2 pb-1 border border-gray-300 rounded-lg transition-colors focus-within:border-blue-600 bg-white",
        className
      )}
      {...props}
    />
  )
}

function InputGroupText({
  className,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <Label
      className={cn(
        "absolute left-2 top-3 text-gray-500 text-sm pointer-events-none transition-all duration-200 origin-left bg-white px-1 ",
        "peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500",
        className
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      className={cn(
        "peer w-full px-3 pt-5 pb-2 rounded-lg border-none outline-none bg-transparent text-base transition-colors focus:ring-0",
        className
      )}
      {...props}
    />
  )
}

export { InputGroup, InputGroupInput, InputGroupText }
