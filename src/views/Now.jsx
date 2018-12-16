import React, { Component } from 'react'
import { ContentBody, ContentHeader, ContentLine } from '../styles/content_styles.js'
import styled from 'styled-components';

const ContentBodyWrapper = styled.div`
  font-family: 'Tillana', cursive;
  font-size: x-large;
  margin: 10% 15%;
`

class Now extends Component {
  render(){
    return (
      <main>
        <ContentHeader>Now</ContentHeader>
        <ContentBodyWrapper>
          <ContentBody>
            <ContentLine>I live in Ajax... near Toronto.</ContentLine>
            <ContentLine>Doing an internship until April at RBC as a Developer</ContentLine>
            <ContentLine>Working on learning:</ContentLine>
            <ContentLine>
              <ul>
                <li>UI/UX (Vue)</li>
                <li>Data Vis/Interactive art (Three.js, D3, etc.)</li>
                <li>Machine Learning/Deep Learning (Interested in bots, and automation)</li>
              </ul>
            </ContentLine>
            <ContentLine>Goals:</ContentLine>
            <ContentLine>
              <ul>
                <li>Obtain a 4 month or less co-op for Summer 2019 (May-August)</li>
                <li>Create AI based art and creative UI/UX dashboards</li>
              </ul>
            </ContentLine>
          </ContentBody>
        </ContentBodyWrapper>
      </main>
    )
  }
}

export default Now