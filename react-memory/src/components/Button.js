import React, {useState} from 'react'
import styled from 'styled-components';

const NiceButton = styled.button`
border-radius: 3px;
background-color: ${props => props.color};
`
export default function Button(props) {
  const [count, setCount ] = useState(1)
  return (
    <>
      <div>{count}</div>
      <NiceButton
        color={props.color}
        onClick={
          () => setCount(prevCount => prevCount + 1)
        }>{props.children}</NiceButton>
    </>
  )
}
