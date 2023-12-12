import { type FunctionComponent, useState, useEffect } from 'react'
import { Slider } from '@mui/material'
import { VolumeIcon } from '../VolumeIcon/VolumeIcon'

export interface VolumeSliderProps {
  audioRef: React.MutableRefObject<HTMLAudioElement>
}

export const VolumeSlider: FunctionComponent<VolumeSliderProps> = ({
  audioRef
}) => {
  const [volume, setVolume] = useState(50)

  useEffect(() => {
    audioRef.current.volume = volume / 100
  }, [volume, audioRef])

  return (
    <div className='volume-slider'>
      <VolumeIcon volume={volume} setVolume={setVolume}/>
      <Slider
        value={volume}
        size='small'
        onChange={(event, value) => { setVolume(value as number) }}
        className='volume-slider__slider'
      />
    </div>
  )
}
