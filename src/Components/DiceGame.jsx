
import styled from "styled-components"

const DiceGame = ({toggle}) => {
  
  return (

    <Container>
      <div>
        <img src="images/dices 1.jpg" width=" 549px" height="422px" alt="" />
      </div> 
      <div className="dice">
        <h1>DICE GAME</h1>
        <button onClick={toggle} >Play Now</button>
      </div>
    </Container>
  )
}

export default DiceGame
const Container = styled.div`
      h1{
        font-size: 90px;
        font-weight: 700;
      }
      .dice{
       
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 10px;
        
      }
      button{
        all: unset;
        display: flex;
        justify-content: center;
        background: black;
        border-radius: 5px;
        color: white;
        padding: 10px 18px;
        width: 220px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
      }

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      max-width: 1180px;
      margin: 0 auto;
      height: 100vh;
`;
