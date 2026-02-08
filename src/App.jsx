import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import NavBar from './components/NavBar'
import MacWindows from './components/windows/MacWindows'
function App() {


  return (
    <main>
      <NavBar />
      <Dock />
      <MacWindows>
        <h1>hmlo ji</h1>
      </MacWindows>
    </main>
  )
}

export default App
