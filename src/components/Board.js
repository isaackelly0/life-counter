import Card from "./Card";
import uniqid from "uniqid";
const Board = (props) => {
    const boardSet = (arr) => {
        let newArr = []
        for(let i = 0; i < arr.length; i++){
            //arr[i]
            const player = arr[i]
            const enemies = arr.filter(e => e !== arr[i])
            newArr.push(<Card name={player} enemies={enemies}/>)
        }
        return newArr;
    }
    return (
        <div>
            {boardSet(props.players.map(player=>{return<div key={uniqid()}>{player}</div>}))}
        </div>
    )
}
export default Board