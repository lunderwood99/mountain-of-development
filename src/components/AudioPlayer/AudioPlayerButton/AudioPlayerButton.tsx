import { useState, type FunctionComponent } from 'react'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import { IconButton } from '@mui/material'

export interface AudioPlayerButtonProps {
  handleAudio: () => void
}

export const AudioPlayerButton: FunctionComponent<AudioPlayerButtonProps> = ({ handleAudio }) => {
  const [clicked, setClicked] = useState(false)

  const onClick = (): void => {
    setClicked(!clicked)
    handleAudio()
  }

  return (
    <div className="audio-player-button">
      <IconButton onClick={onClick}>
        {!clicked ? <PlayCircleOutlineIcon className="audio-player-button__icon"/> : <PauseCircleOutlineIcon className="audio-player-button__icon"/>}
      </IconButton>
    </div>
  )
}
