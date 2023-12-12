import { Slider } from '@mui/material'
import { useState, type FunctionComponent } from 'react'

export interface ProgressBarProps {
  audioRef: React.MutableRefObject<HTMLAudioElement>
}

export const ProgressBar: FunctionComponent<ProgressBarProps> = ({ audioRef }) => {
  const [progress, setProgress] = useState(audioRef.current.currentTime)
  const duration = audioRef.current.duration

  const handleProgressChange = (time: number): void => {
    setProgress(time)
  }

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60)
    const formatMinutes =
      minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(time % 60)
    const formatSeconds =
      seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${formatMinutes}:${formatSeconds}`
  }

  return (
    <>
      <Slider
        value={audioRef.current.currentTime}
        size='small'
        max={duration}
        onChange={(event, value) => { handleProgressChange(value as number) }}
      />
      <div> / {formatTime(duration)}</div>
    </>
  )
}
