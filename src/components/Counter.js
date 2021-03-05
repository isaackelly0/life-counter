import {useState} from "react";
const Counter = () => {
    const [count, setCount] = useState(40);
    return (
        <div>
            <button className="btn btn-primary" onClick={()=>{setCount(count - 1)}}>-</button>
            <span>{count}</span>
            <button className="btn btn-primary"onClick={()=>{setCount(count + 1)}}>+</button>
        </div>
    )
}
export default Counter