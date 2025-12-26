import urlVideo from "@/assets/video.mp4"
import { Button } from "@/components/ui/button"
import React from "react"

const Example5Type = () => {
  const video = React.useRef<HTMLVideoElement>(null)
  return (
    <div>
      <video ref={video} src={urlVideo} controls></video>
      <Button onClick={() => video.current?.play()}>Play</Button>
      <Button onClick={() => video.current?.pause()}>Pause</Button>
    </div>
  )
}

export default Example5Type
