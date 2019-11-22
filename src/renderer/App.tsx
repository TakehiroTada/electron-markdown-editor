import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from 'styles/Index'
import Horizontal from './components/layouts/Horizontal'
import colors from 'constants/colors'

const AppStyle = styled(Horizontal)`
  width: 100vw;
  min-width: 300px;
  height: 100vh;
`

const NavStyle = styled.nav`
  width: 60px;
  height: 100%;
  background-color: ${colors.lighten4};
`
const MainStyle = styled.main`
  flex: 1;
  background-color: ${colors.lighten5};
`

const App: FunctionComponent<{}> = ({}) => {
  return (
    <>
      <GlobalStyle />
      {/* <header /> */}
      <AppStyle>
        <NavStyle />
        <MainStyle />
      </AppStyle>
      {/* <footer></footer> */}
    </>
  )
}

export default App
