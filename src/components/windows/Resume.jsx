import React from 'react'
import "./resume.scss"
import MacWindows from './MacWindows'

const Resume = ({ windowName, windowState, setWindowState }) => {
  return (
    <MacWindows windowName={windowName} windowState={windowState} setWindowState={setWindowState}>
        <div className='resume-window'>
            <embed src="/resume.pdf" frameborder="0"></embed>
        </div>
    </MacWindows>

  )
}

export default Resume