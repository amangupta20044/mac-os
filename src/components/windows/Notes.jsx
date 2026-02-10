import React,{useState, useEffect} from "react"
import Markdown from "react-markdown"
import MacWindows from "./MacWindows";
import "./notes.scss"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Notes = () => {
    const [markdown, setMarkdown] = useState("NULL")
    useEffect(() => {
        fetch("/notes.txt")
            .then(res => res.text())
            .then(text => setMarkdown(text))
    }, []);
  return (
    <MacWindows >
        <div className="note-window">
            {markdown ? <SyntaxHighlighter language="typescript" style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>"Loading..."<p/></p>}
        </div>
    </MacWindows>
  )
}

export default Notes