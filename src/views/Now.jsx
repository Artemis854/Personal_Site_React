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
            <ContentLine>Still working with the Computer Geek, but looking for an intership.</ContentLine>
            <ContentLine>Working on learning:</ContentLine>
            <ContentLine>
              <ul>
                <li>UI/UX (Angular and React)</li>
                <li>Data Vis/Analytics (Three.js, D3, etc.)</li>
                <li>Machine Learning/Deep Learning (Early learner, but this is my long term goal)</li>
              </ul>
            </ContentLine>
            <ContentLine>Goals:</ContentLine>
            <ContentLine>
              <ul>
                <li>Obtain a 4-12 month long co-op or intership starting in September</li>
                <li>Create a dashboard using Angular to track trading bots on the Forex & Crypto markets</li>
              </ul>
            </ContentLine>
          </ContentBody>
        </ContentBodyWrapper>
      </main>
    )
  }
}

export default Now