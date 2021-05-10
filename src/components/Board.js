import Card from "./Card";
import uniqid from "uniqid";
import "./Board.css";
const Board = (props) => {
    const boardSet = (arr) => {
        let newArr = []
        for(let i = 0; i < arr.length; i++){
            const player = arr[i]
            const enemies = arr.filter(e => e !== arr[i])
            newArr.push(<Card name={player} enemies={enemies}/>)
        }
        return newArr;
    }
    return (
        <div className="row board">
            {boardSet(props.players.map(player=>{return<div key={uniqid()}>{player}</div>}))}
        </div>
    )
}
export default Board