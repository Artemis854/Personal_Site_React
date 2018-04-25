import React, { Component } from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
grid-area: footer;
background-color: #c7f4b2;
`

class Footer extends Component {
  render() {
    return (
      <FooterWrapper />
    )
  }
}

export default Footer