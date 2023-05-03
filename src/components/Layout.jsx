import React from 'react'
import styled from 'styled-components'

function Layout({children}) {
  return (
    <LayoutContainer>{children}</LayoutContainer>
  )
}

export default Layout

const LayoutContainer = styled.div`
    width:50%;
    max-width:450px;
    margin:30px auto;
`