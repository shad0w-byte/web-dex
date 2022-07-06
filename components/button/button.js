import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
background-color:${props => props.bgColor || "#5a4a9c"};
width:auto;
border:none;
border-radius:10px;
color:#764AF1;
display:block;

&:hover{
  transform:scale(1.4);
  transition: .2s ease-in-out;
}

a{text-decoration:none; font-size:40px;font-weight:600; color:#764AF1;}

i{
    width:100%;
    height:100%;
    vertical-align:middle;
}
 a > span{
  margin:5px;
  vertical-align: middle;

}
`

export default function button(props) {
  return (
    <>
    <Button bgColor={props.bgColor}>
        <a href={props.url} target="_blank" rel="noreferrer">
           <span>{props.text}</span>
        </a>
    </Button>
    </>
  )
}
