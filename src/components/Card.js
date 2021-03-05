import Counter from "./Counter";
import Command from "./Command";
import uniqid from "uniqid";
const Card = (props) => {
    return(
        <div className="col-md-6 col-lg-4">
            <h4>{props.name}</h4>
            <Counter/>
            <h5>Commander Damage from:</h5>
            <ul>
                {props.enemies.map((enemy)=>{return(<li key={uniqid()}><h4>{enemy}</h4><Command/></li>)})}
            </ul>
        </div>
    )
}
export default Card