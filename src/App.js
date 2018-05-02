import React, { Component } from 'react'
import Content from './components/Content.jsx'
import Sidebar from './components/Sidebar.jsx'
import styled from 'styled-components'

const AppWrapper = styled.div`
  display: grid;
  min-height: 100vh;
  min-width: 100%;
  grid-template-rows: 5px 1fr 5px;
  grid-template-columns: 25% 1fr 50px;
  grid-template-areas:  ". . ."
                        "sidebar content ."
                        ". . .";
  /* grid-gap: 7px; */
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Sidebar />
        <Content />
      </AppWrapper>
    )
  }
}

export default App
