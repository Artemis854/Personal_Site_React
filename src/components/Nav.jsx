import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
  color: #666;

  &:hover {
    color: #999;
  }
`

class Nav extends Component {
  render() {
    return (
      <NavWrapper>
        <Link to="/"><NavItem>Home</NavItem></Link>
        <Link to="/now"><NavItem>Now</NavItem></Link>
        <Link to="/projects"><NavItem>Projects</NavItem></Link>
        <Link to="/cv"><NavItem>CV</NavItem></Link>
        <Link to="/contact"><NavItem>Contact</NavItem></Link>
      </NavWrapper>
    )
  }
}

export default Nav