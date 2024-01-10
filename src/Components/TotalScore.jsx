
import styled from "styled-components"
const TotalScore = ({Score}) => {
  return (
    <TotalS>
        <h1>{Score}</h1>
        <p>Total Score</p>
    </TotalS>
  )
}

export default TotalScore

const TotalS = styled.div`
max-width: 200px;
text-align: center;

  h1{
    font-size: 100px;
    font-weight: 600;
    line-height: 100px;
  }
  p{
    font-size: 24px;
    font-weight: 500;
  }
`