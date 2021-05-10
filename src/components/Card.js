import Counter from "./Counter";
import Command from "./Command";
import uniqid from "uniqid";
import './Card.css';
const Card = (props) => {
    return(
        <div className="col-lg-3 col-md-6 col-sm-12 column">
            <div className="box-wrapper">
                <div className="box">
                    <span className="line">
                        <h4>{props.name}</h4>
                    </span>
                    <Counter/>

                    <h5 className="line">Commander Damage from:</h5>
                    <ul>
                        {props.enemies.map((enemy)=>{return(<li key={uniqid()}><span className="line"><h4>{enemy}</h4></span><Command/></li>)})}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Card