import urlVideo from "@/assets/video.mp4"
import { Button } from "@/components/ui/button"
import React from "react"

const Example6Type = () => {
  const video = React.useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)

  const play = isPlaying ? video.current?.play() : video.current?.pause()
  const textPlay = isPlaying ? "Pause" : "Play"
  return (
    <div>
      <video
        ref={video}
        src={urlVideo}
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      ></video>

      <Button
        onClick={() => {
          play
          setIsPlaying((prev) => !prev)
        }}
      >
        {textPlay}
      </Button>

      <Button onClick={() => video.current && (video.current.currentTime += 2)}>
        2s
      </Button>
      <Button onClick={() => video.current?.requestPictureInPicture()}>
        PIP
      </Button>
    </div>
  )
}

export default Example6Type
