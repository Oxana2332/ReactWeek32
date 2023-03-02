import { useState} from "react" 
import TextArea from "../TextArea/TextArea.jsx"
import Out from '../Output/Output.jsx'

function Comments() {
    const [newText, setNewText] = useState("")
    const [comments] = useState([])

    function handleSubmitNewText(e) {
        e.preventDefault()
        if(!newText) return;
        const text = newText.replace(/ххх|xxx|viagra/gi, "***")
        comments.unshift(text);
        setNewText("");
    }
    
    return(
        <>
        <h1 className="title">Hi!!! How are you?</h1>
        <div>
        {comments.map((item, index) => (
            <Out key={index} item={item}/>
        ))}
        </div>
            <TextArea newText={newText} setNewText={setNewText} handleSubmit={handleSubmitNewText}/>
        </>
    )
} 

export default Comments