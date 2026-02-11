import React from 'react'
import "./dock.scss"
const Dock = ({windowState, setWindowState}) => {
  return (
    <footer className='Dock'>
        <div className="icon github"><img src="/doc-icons/github.png" alt="" onClick={() => setWindowState({...windowState, github: !windowState.github})} /></div>
        <div className="icon note"><img src="/doc-icons/note.png" alt="" onClick={() => setWindowState({...windowState, notes: !windowState.notes})} /></div>
        <div className="icon pdf"><img src="/doc-icons/pdf.png" alt="" onClick={() => setWindowState({...windowState, resume: !windowState.resume})} /></div>
        <div onClick={() =>{window.open("https://calendar.google.com", "_blank")}} className="icon calender"><img src="/doc-icons/calender.png" alt=""  /></div>
        <div className="icon spotify"><img src="/doc-icons/spotify.png" alt="" onClick={() => setWindowState({...windowState, spotify: !windowState.spotify})} /></div>
        <div onClick={() =>{window.open("mailto:a.mann20044@gmail.com", "_blank")}} className="icon mail"><img src="/doc-icons/mail.png" alt="" /></div>
        <div onClick={() =>{window.open("https://www.linkedin.com/in/aman-gupta-031381266", "_blank")}} className="icon link"><img src="/doc-icons/link.png" alt=""  /></div>
        <div className="icon cli"><img src="/doc-icons/cli.png" alt="" onClick={() => setWindowState({...windowState, cli: !windowState.cli})} /></div>
    </footer>
  )
}

export default Dock