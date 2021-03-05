import './App.css';
import {useState, useEffect} from "react";
import Board from "./components/Board"
import Prompt from "./components/Prompt";
import ReactDOM from "react-dom";
const App = () => {
  const [players, setPlayers] = useState([]);
  const [survey, setSurvey] = useState(true);
  const update = (name) => {
    if(players.includes(name)){
      alert("Try to use a different name!")
    }
    else{
      setPlayers(oldArray => [...oldArray, name])
    }
  }
  useEffect(()=>{
    if(survey){
      ReactDOM.render(
        <Prompt list={players} finish={setSurvey} fn={update}/>,
        document.getElementById('App'))}
      else{
        ReactDOM.unmountComponentAtNode(document.getElementById('App'))
        ReactDOM.render(
          <Board players={players}/>,
          document.getElementById('App')
        )
      }
    }
    
  )
  return (
    <div id="App" className="container">   
    </div>
  );
}

export default App;