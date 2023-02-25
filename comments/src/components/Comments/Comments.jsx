import { useState} from "react" 
import TextArea from "../TextArea/TextArea.jsx"
import Out from '../Output/Output.jsx'

function Comments() {
    const [newText, setNewText] = useState("")
    const [comments] = useState([])

    function handleSubmitNewText(e) {
        e.preventDefault()
        if(!newText) return;
        comments.unshift(newText);
        setNewText("");
    }
    
    return(
        <>
        <h1 className="title">Hi!!! How are you?</h1>
        {comments.map((item, index) => (
            <Out key={index} item={item}/>
        ))}
            <TextArea newText={newText} setNewText={setNewText} handleSubmit={handleSubmitNewText}/>
        </>
    )
} 

export default Comments