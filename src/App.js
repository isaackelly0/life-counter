import './App.css';
import {useState, useEffect} from "react";
import Board from "./components/Board"
const App = () => {
  // const [players, setPLayers] = useState([]);
  const [survey, setSurvey] = useState(true);
  // useEffect(()=>{},[])
  return (
    <div className="App">
      <Board players={["Isaac","Cody", "Jourdan"]}/>
    </div>
  );
}

export default App;
