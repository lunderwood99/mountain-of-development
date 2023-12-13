import { Slider } from '@mui/material'
import { useState, useEffect, type FunctionComponent } from 'react'

export interface ProgressBarProps {
  audioRef: React.MutableRefObject<HTMLAudioElement>
}

export const ProgressBar: FunctionComponent<ProgressBarProps> = ({ audioRef }) => {
  const [progress, setProgress] = useState(0)
  const duration = audioRef.current.duration

  const handleProgressChange = (time: number): void => {
    audioRef.current.currentTime = time
    setProgress(time)
  }

  useEffect(() => {
    console.log('here')

    const intervalId = setInterval(() => {
      setProgress(prevProgress => prevProgress + 1)
    }, 1000)
    clearInterval(intervalId)
  }, [progress])

  // const formatTime = (time: number): string => {
  //   const minutes = Math.floor(time / 60)
  //   const formatMinutes =
  //     minutes < 10 ? `0${minutes}` : `${minutes}`
  //   const seconds = Math.floor(time % 60)
  //   const formatSeconds =
  //     seconds < 10 ? `0${seconds}` : `${seconds}`
  //   return `${formatMinutes}:${formatSeconds}`
  // }

  return (
    <>
      <Slider
        className='progress-bar'
        value={progress}
        size='small'
        max={duration}
        onChange={(event, value) => { handleProgressChange(value as number) }}
      />
    </>
  )
}
