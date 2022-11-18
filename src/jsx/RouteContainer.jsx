import React from 'react'
import styled from 'styled-components'
function RouteContainer(props) {
    
 const Container = styled.div`
  display: flex;
  
`
  return (
    <Container>
{props.children}
    </Container>
  )
}

export default RouteContainer