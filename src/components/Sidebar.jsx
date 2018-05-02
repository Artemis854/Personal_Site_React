import React, { Component } from 'react'
import styled from 'styled-components'

import Nav from './Nav.jsx'
import Profile from './Profile.jsx'

const SidebarWrapper = styled.div`
  grid-area: sidebar;
  font-family: 'Quicksand', sans-serif;
  /* background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25); */
  display: none;

  @media only screen and (min-width:600px) {
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    grid-template-areas: "profile" "nav" ".";
    padding: 10%;
  }
`

class Sidebar extends Component {
  render() {
    return (
      <SidebarWrapper>
        <Profile />
        <Nav />
      </SidebarWrapper>
    )
  }
}

export default Sidebar