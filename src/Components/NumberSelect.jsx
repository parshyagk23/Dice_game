
import styled from 'styled-components'
const NumberSelect = ( {SelNum,setSelNum,error, seterror}) => {
    const arrNum = [1,2,3,4,5,6]
    
    // console.log(SelNum) 
    const numberSelectorHandler =(value)=> {
        setSelNum(value);
        seterror("")
    }
  return (
    <NumSelContainer>
        <span>{error}</span>
        <div className="flex">
        {arrNum.map((value, i) => (
            <Box key={i} onClick={ () => numberSelectorHandler(value)}
            IsSelected = {value === SelNum}
            >   {value}</Box>
            ))}
        </div>
    <p>Select Number</p>
    </NumSelContainer>
  )
}

export default NumberSelect

const NumSelContainer =styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap:24px;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
    span{
        font-size: 14px;
        font-weight:400;
        color: #FF0C0C;
    }
`;

const Box = styled.div`

    height: 72px;
    width: 72px;
    border:1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${(props) => props.IsSelected? "black": "white"};
    color: ${(props) => !props.IsSelected? "black": "white"};
`