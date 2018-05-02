import React, { Component } from 'react'
import styled from 'styled-components'

const TileWrapper = styled.div`
  width: 250px;
  height: 250px;
  margin: 10px;
`

class Tile extends Component {
  TileInfo = () => (
      {
        background: `url(${this.props.project.thumbnail_image}) contain 250px 250px`
      }
    )

  render() {
    return (
      <TileWrapper style={this.TileInfo()} />
    )
  }
}

export default Tile