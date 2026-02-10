import React from 'react'
import "./resume.scss"
import MacWindows from './MacWindows'

const Resume = () => {
  return (
    <MacWindows>
        <div className='resume-window'>
            <embed src="/resume.pdf" frameborder="0"></embed>
        </div>
    </MacWindows>

  )
}

export default Resume