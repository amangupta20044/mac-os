import React from 'react'
import githubData from '../../assets/github.json'
import MacWindows from './MacWindows'
import "./github.scss"
const Gitcard = ({ data = {id:1,image:"",title:"",description:"",tags :[],repolink:"",demoLink:""}}) => {
    return (
        <div className="card">
            <img src={data.image} alt={data.title} />
            <h1>{data.title}</h1>
            <p className='description'>{data.description}</p>
            <div className="tags">
                {data.tags.map(tag => (
                    <p className='tag'>{tag}</p>
                ))}
            </div>
            <div className="urls">
                <a href={data.repolink}>Repository</a>
                {data.demoLink && <a href={data.demoLink}>Demo Link</a>}
            </div>
        </div>
    )
}
function Github({ windowName, windowState, setWindowState }) {
  return (
    <div>
        <MacWindows windowName={windowName} windowState={windowState} setWindowState={setWindowState}>
            <div className="cards">
                {githubData.map(project=>{
                    return <Gitcard data={project} key={project.id} />
                })}
            </div>
        </MacWindows>
    </div>
  )
}

export default Github