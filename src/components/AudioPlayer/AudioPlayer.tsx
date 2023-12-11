import { type FunctionComponent, useState, useRef } from 'react'
import { AudioPlayerButton } from './AudioPlayerButton/AudioPlayerButton'
import drums from '../../res/audio/drum_track.mp3'

export const AudioPlayer: FunctionComponent = () => {
  const audio = useRef(new Audio(drums))
  const [audioPlaying, setAudioPlaying] = useState(true)

  const handleAudio = (): void => {
    if (audioPlaying) {
      (async () => {
        await audio.current.play()
      })().catch(e => {
        console.log(e)
      })
    } else {
      audio.current.pause()
    }
    setAudioPlaying(!audioPlaying)
  }

  return (
  <div>
    <AudioPlayerButton handleAudio={handleAudio}/>
    
  </div>
  )
}
