import {useState} from "react";
import './Counter.css'
const Counter = () => {
    const [count, setCount] = useState(40);
    return (
        <div className="section">
            <button className="btn btn-primary" onClick={()=>{setCount(count - 1)}}>-</button>
            <span>{count}</span>
            <button className="btn btn-primary"onClick={()=>{setCount(count + 1)}}>+</button>
        </div>
    )
}
export default Counter