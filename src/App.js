import './App.css';
import {useState, useEffect} from "react";
import Board from "./components/Board"
import Prompt from "./components/Prompt";
const App = () => {
  const [players, setPLayers] = useState([]);
  const [survey, setSurvey] = useState(true);
  useEffect(()=>{},[])
  const update = (name) => {
    if(players.includes(name)){
      alert("Try to use a different name!")
    }
    else{
      setPLayers(oldArray => [...oldArray, name])
    }
  }
  return (
    <div className="App">
      <Prompt list={players} finish={setSurvey} fn={update}/>
    </div>
  );
}

export default App;
