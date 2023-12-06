import React from 'react'
import './res/scss/styles.scss'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { type ReactElement } from 'react'
import { SideNav } from './components/SideNav/SideNav'
import { Title } from './components/Title/Title'
import { GettingStarted } from './pages/GettingStarted/GettingStarted'

function App (): ReactElement {
  return (
    <div className="app-container">
      <div className="app-container__side">
        <Title />
        <SideNav />
      </div>
      <div className="app-container__content">
        <Routes>
          <Route path={routes.root} element={ <>Root</> } />
          <Route path={routes.gettingStarted} element={ <GettingStarted />} />
          <Route path={routes.hardware.audioInterfaces} element={ <>Audio Interfaces</>} />
          <Route path={routes.hardware.microphones} element={ <>Microphones</>} />
          <Route path={routes.software.DAWs} element={ <>DAWs</>} />
          <Route path={routes.software.plugins} element={ <>Plugins</>} />
          <Route path={routes.technique.mixing} element={ <>Mixing</>} />
          <Route path={routes.technique.mastering} element={ <>Mastering</>} />
          <Route path={routes.advancedResources} element={ <>Advanced Resources</>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
