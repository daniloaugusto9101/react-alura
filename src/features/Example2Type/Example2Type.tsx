import { Checkbox } from "@/components/ui/checkbox"
import React from "react"

type Example2TypeProps = {
  label?: string
}

const Example2Type = ({ label }: Example2TypeProps) => {
  const [checked, setChecked] = React.useState(true)

  const handleChecked = (checked: boolean) => {
    setChecked(checked)
  }

  return (
    <label>
      <Checkbox checked={checked} onCheckedChange={handleChecked} />
      {label}
    </label>
  )
}

export default Example2Type
