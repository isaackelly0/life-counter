import Card from "./Card";
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
            {boardSet(props.players)}
        </div>
    )
}
export default Board