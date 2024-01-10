
import './App.css'
import DiceGame from "./Components/DiceGame"
import { useState } from "react"
import GamePlay from './Components/GamePlay';
function App() {
  const [gameStarted, setgameStarted] = useState(false);
   
  const tooggleGamePlay = () =>{
    setgameStarted((prev) => (!prev))
  }

  return (
    <>
      <div>
    {gameStarted?<GamePlay/>:<DiceGame toggle ={tooggleGamePlay} /> }
       {/* <DiceGame/> */}
      </div>
     
     
    </>
  )
}

export default App
