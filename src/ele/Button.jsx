import React from 'react'
import styled from 'styled-components'

function Button({children, ...rest}) {
  return (
    <StButton {...rest}>{children}</StButton>
  )
}

export default Button

const StButton = styled.button`
    width:100%;
    margin: 10px 0;
    background-color:#f85151;
    color:#fff;
    border:none;
    border-radius:20px;
    padding:15px 0;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px;
    font-size:1rem;
    font-weight:500;
    &.white{
        background-color:#fff;
        color:#333;
    }    
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px inset;
    }

    &.move{
        float:right;
        width:100px;
        height:10px;
        background:none;
        box-shadow:none;
        color:#333;
    }
`