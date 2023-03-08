import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

const Img = styled.img`
opacity: ${props => props.back ? 0.2 : 1};
border: 10px solid ${props => props.cardWon ? 'green' : 'blue'}
`;

export default function Card(props) {
  const [back, setBack] = useState(true)



  return (
    <Img src={props.img} back={back} cardWon={props.cardWon}
      onClick={
        () => {
          setBack(false)
          props.toggleChosenCard(props.img)
        }

      }
    ></Img>

  )
}
