import React, { Component } from 'react'
import { ContentHeader, ContentBody } from '../styles/content_styles.js'

class About extends Component {
  render(){
    return (
      <main>
        <ContentHeader>About</ContentHeader>
        <ContentBody>
          <p>Hello. About</p>
        </ContentBody>
      </main>
    )
  }
}

export default About