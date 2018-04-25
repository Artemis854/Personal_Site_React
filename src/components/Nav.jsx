import React, { Component } from 'react'
import styled from 'styled-components'

const NavWrapper = styled.nav`
  grid-area: nav;
  display: grid;
  text-align: center;
`
const NavItem = styled.div`
  display: block;
  grid-column: 1fr;
  border-bottom: #333 2px solid;
  font-size: 1em;
  min-width: 50px;
  padding: 5px;
  margin: 2% 25%;
`

class Nav extends Component {
  render() {
    return (
      <NavWrapper>
        <NavItem>About</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>CV</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Now</NavItem>
      </NavWrapper>
    )
  }
}

export default Nav