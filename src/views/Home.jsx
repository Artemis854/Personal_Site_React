import React, { Component } from 'react'
import { ContentHeader, ContentBody } from '../styles/content_styles.js'

class Home extends Component {
  render(){
    return (
      <main>
        <ContentHeader>Home</ContentHeader>
        <ContentBody>
          <p>Hello.</p>
        </ContentBody>
      </main>
    )
  }
}

export default Home