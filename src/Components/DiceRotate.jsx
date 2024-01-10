import styled from "styled-components";

const DiceRotate = ({ CurrentDice, roleDice }) => {
  return (
    <ClockRotate  >
      <div   className="Dice" onClick={roleDice}>
        <img src={`images/dices/dice_${CurrentDice}.png`} alt="" />
      </div>
    </ClockRotate>
    
  );
};

export default DiceRotate;

const ClockRotate = styled.div`
  .Dice {
    cursor: pointer;
  }
  
  /* img:hover {
    animation: rotateAnimation 1s ease-in-out;
  } */
 
`;
// const Box = styled.div`
/* 
  @keyframes rotateAnimation {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

   ` */
