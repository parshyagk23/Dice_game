
import TotalNumber from './TotalScore'
import NumberSelect from './NumberSelect'
import styled from 'styled-components'
import RollDice from './RollDice'
import React, { useState } from 'react'
import Rules from './Rules'


const GamePlay = () => {

  const [Score ,setScore] = useState(0)
  const [SelNum, setSelNum] = useState()
  const [CurrentDice , SetCurrentDice] = useState(1)
  const [error,seterror] = useState("")
  const [ShowRules, setShowRules] = useState(false)
 

  const GenerateRandomNum = (min, max)=>{       
    return Math.floor(Math.random() * (max - min) + min);
};
const roleDice=()=>{
    if(!SelNum){
      seterror("You have not selected any number")
      return 
     }
     
    const randomnum = GenerateRandomNum(1,7);
    SetCurrentDice((prev) => randomnum)
    if(SelNum === randomnum){
      setScore((prev) => prev + randomnum)
    }else{
      setScore((prev) => prev - 2)
    }
    setSelNum(undefined)
}


  return (
    <MainContainer>
      <div className="top_section">

      <TotalNumber Score={Score}/>
      <NumberSelect SelNum ={SelNum} setSelNum ={setSelNum} error={error} seterror={seterror} />
      </div>
      <RollDice  CurrentDice={CurrentDice} roleDice={roleDice} setScore={setScore} showRules={ShowRules} setShowRules={setShowRules}  />

      {ShowRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer =styled.main`
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

`