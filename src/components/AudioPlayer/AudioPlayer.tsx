import { type FunctionComponent, useState, useRef } from 'react'
import { List, ListItemButton, ListItemText } from '@mui/material'
import { AudioPlayerButton } from './AudioPlayerButton/AudioPlayerButton'
import { VolumeSlider } from './VolumeSlider/VolumeSlider'
import { ProgressBar } from './ProgressBar/ProgressBar'
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
  <div className='audio-player'>
    <List className='audio-player__list'>
      <ListItemButton className='audio-player__list--item'>
        <ListItemText className='audio-player__list--item--text' primary='Saturated' />
      </ListItemButton>
      <ListItemButton className='audio-player__list--item'>
        <ListItemText className='audio-player__list--item--text' primary='Unsaturated' />
      </ListItemButton>
    </List>
    <div className='audio-player__progress'>
      <AudioPlayerButton handleAudio={handleAudio}/>
      <ProgressBar audioRef={audio}/>
    </div>
    <VolumeSlider audioRef={audio}/>
  </div>
  )
}
