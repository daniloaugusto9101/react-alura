import Button2 from "@/components/ui/Button2"
import React from "react"

const Example3Type = () => {
  const [data, setData] = React.useState(0)
  return (
    <div>
      <p>Contatdor: {data}</p>
      <Button2 setData={setData} />
    </div>
  )
}

export default Example3Type
