import { useState, type FunctionComponent } from 'react'
import { VolumeUpOutlined, VolumeMuteOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'

export interface VolumeIconProps {
  volume: number
  setVolume: (value: number) => void
}

export const VolumeIcon: FunctionComponent<VolumeIconProps> = ({ volume, setVolume }) => {
  const [isMuted, setIsMuted] = useState(false)
  const [storeVolume, setStoreVolume] = useState(50)

  const handleClick = (): void => {
    setIsMuted(!isMuted)
    if (isMuted) {
      setStoreVolume(volume)
      setVolume(0)
    } else {
      storeVolume === 0 ? setVolume(50) : setVolume(storeVolume)
    }
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        {volume === 0 ? <VolumeMuteOutlined className='volume-icon__icon' /> : <VolumeUpOutlined className='volume-icon__icon' />}
      </IconButton>
    </>
  )
}
