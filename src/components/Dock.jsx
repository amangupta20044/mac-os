import React from 'react'
import "./dock.scss"
const Dock = () => {
  return (
    <footer className='Dock'>
        <div className="icon github"><img src="/doc-icons/github.png" alt="" /></div>
        <div className="icon note"><img src="/doc-icons/note.png" alt="" /></div>
        <div className="icon pdf"><img src="/doc-icons/pdf.png" alt="" /></div>
        <div className="icon calender"><img src="/doc-icons/calender.png" alt="" /></div>
        <div className="icon spotify"><img src="/doc-icons/spotify.png" alt="" /></div>
        <div className="icon mail"><img src="/doc-icons/mail.png" alt="" /></div>
        <div className="icon link"><img src="/doc-icons/link.png" alt="" /></div>
        <div className="icon cli"><img src="/doc-icons/cli.png" alt="" /></div>
    </footer>
  )
}

export default Dock