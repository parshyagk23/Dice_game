

import styled from 'styled-components';
import DiceRotate from './DiceRotate';


const RollDice = ({setScore,CurrentDice ,roleDice,showRules ,setShowRules}) => {
    
    const ResetScore =()=>{
        setScore(0)
    }
    const ShowRuless=()=>{
        setShowRules((prev) => !prev)
        
    }
    
  return (
    <DiceRoll>
        
        <DiceRotate roleDice={roleDice} CurrentDice={CurrentDice}  />
            
        <p>Click on Dice to roll</p>
        <button onClick={ResetScore}   className='Reset'>Reset</button>
        <button onClick={ShowRuless}  className='rules'>{showRules? "Hide ": "Show "}Rules</button>
    </DiceRoll>
  )
}

export default RollDice

const DiceRoll = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-top: 30px;
    
    p{
        font-weight: 500;
        font-size: 24px;
    }
    .Reset{
        all: unset;
        display: flex;
        justify-content: center;
        background: #FFF;
        border: 1px solid black;
        border-radius: 5px;
        color: black;
        padding: 10px 18px;
        min-width: 220px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }
    .rules{
        all: unset;
        display: flex;
        justify-content: center;
        background: #000;
        border-radius: 5px;
        color: white;
        padding: 10px 18px;
        min-width: 220px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }

`;