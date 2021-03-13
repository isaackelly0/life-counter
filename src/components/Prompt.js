import {useState} from "react";
import uniqid from "uniqid";
import './Prompt.css';

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
            <ul className="col-md-6">
                {props.list.map(player=>{return(<li key={uniqid()}>{player}</li>)})}    
            </ul>
            <form className="col-md-6 col-sm-12" autoComplete="off" onSubmit={handleSubmit}>
                <input className="addPlayer"type="text" onChange={e=>setText(e.target.value)} value={text}></input>
                <button className="btn btn-success addPlayer"type="submit">Add Player</button>
            </form>
            <button className="btn offset-md-4 btn-success btn-lg col-md-4" onClick={()=>{props.finish(false)}}>Finish</button>
        </div>
    )
}
export default Prompt;