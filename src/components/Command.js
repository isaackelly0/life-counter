import {useState} from "react";
import './Counter.css'
const Command = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="section">
            <button className="btn btn-danger"onClick={()=>{setCount(count - 1)}}>-</button>
            <span>{count}</span>
            <button className="btn btn-primary" onClick={()=>{setCount(count + 1)}}>+</button>
        </div>
    )
}
export default Command;