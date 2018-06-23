import React, { Component } from 'react'
import { ContentHeader, ContentBody } from '../styles/content_styles.js'
import { projects } from '../data/projects';
import Gallery from 'react-grid-gallery';

class Projects extends Component {
  render(){
    return (
      <main>
        <ContentHeader>Projects</ContentHeader>
        <ContentBody>
          <Gallery images={projects}/>
        </ContentBody>
      </main>
    )
  }
}

export default Projects