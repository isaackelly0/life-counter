import {useState} from "react";
import uniqid from "uniqid";

const Prompt = (props) => {
    const [text, setText] = useState(" ")
    const handleSubmit = (e) => {
        e.preventDefault();
        props.fn(text)
    }
    return(
        <div>
            <ul>
                {props.list.map(player=>{return(<li key={uniqid()}>{player}</li>)})}    
            </ul>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input type="text" onChange={e=>setText(e.target.value)} value={text}></input>
                <button type="submit">click</button>
            </form>
        </div>
    )
}
export default Prompt;