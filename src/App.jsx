import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import NavBar from './components/NavBar'
import MacWindows from './components/windows/MacWindows'
import Github from './components/windows/Github'
function App() {


  return (
    <main>
      <NavBar />
      <Dock />
      <Github />
    </main>
  )
}

export default App
