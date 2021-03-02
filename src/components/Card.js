import Counter from "./Counter";
import Command from "./Command";
const Card = (props) => {
    return(
        <div>
            <h4>{props.name}</h4>
            <Counter/>
            <h5>Commander Damage from:</h5>
            <ul>
                {props.enemies.map((enemy, index)=>{return(<li key={index}><h4>{enemy}</h4><Command/></li>)})}
            </ul>
        </div>
    )
}
export default Card