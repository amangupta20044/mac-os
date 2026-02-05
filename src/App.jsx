import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import NavBar from './components/NavBar'
function App() {


  return (
    <main>
      <NavBar />
      <Dock />
    </main>
  )
}

export default App
