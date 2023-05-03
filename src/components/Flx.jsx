import React from 'react'
import styled from 'styled-components'

function Flx({children, ...rest}) {
  return (
    <FlexBox {...rest}>{children}</FlexBox>
  )
}

export default Flx

const FlexBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
`