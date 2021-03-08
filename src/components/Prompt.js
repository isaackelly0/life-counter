import {useState} from "react";
import uniqid from "uniqid";

const Prompt = (props) => {
    const [text, setText] = useState(" ")
    const handleSubmit = (e) => {
        e.preventDefault();
        props.fn(text);
        setText('');
    }
    return(
        <div className="row">
            <h3>Enter names one at a time in the text box below, be careful not to use the same name twice!</h3>
            <ul>
                {props.list.map(player=>{return(<li key={uniqid()}>{player}</li>)})}    
            </ul>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input type="text" onChange={e=>setText(e.target.value)} value={text}></input>
                <button className="btn btn-primary"type="submit">Add Player</button>
            </form>
            <button className="btn btn-primary col-1" onClick={()=>{props.finish(false)}}>Finish</button>
        </div>
    )
}
export default Prompt;