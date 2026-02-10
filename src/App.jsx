import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import NavBar from './components/NavBar'
import MacWindows from './components/windows/MacWindows'
import Github from './components/windows/Github'
import Notes from './components/windows/Notes'
import Resume from './components/windows/Resume'
function App() {


  return (
    <main>
      <NavBar />
      <Dock />
      <Github />
      <Notes />
      <Resume />
    </main>
  )
}

export default App
