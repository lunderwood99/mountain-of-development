import { type FunctionComponent } from 'react'
import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer'

export const GettingStarted: FunctionComponent = () => {
  return (
    <div className='getting-started'>
      <header className='getting-started__title'>
        Getting Started
      </header>
      <body className='getting-started__body'>
        This is the body
        <AudioPlayer />
      </body>
    </div>
  )
}
