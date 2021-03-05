import {useState} from "react";
const Command = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button className="btn btn-warning"onClick={()=>{setCount(count - 1)}}>-</button>
            <span>{count}</span>
            <button className="btn btn-warning" onClick={()=>{setCount(count + 1)}}>+</button>
        </div>
    )
}
export default Command;