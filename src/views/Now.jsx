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
                <li>- React</li>
                <li>- Data Vis/Analytics</li>
              </ul>
            </ContentLine>
            <ContentLine>Goals:</ContentLine>
            <ContentLine>
              <ul>
                <li>- Obtain a 4-16 month long intership starting in May or September</li>
                <li>- Make Things! (Project a week if possible)</li>
              </ul>
            </ContentLine>
          </ContentBody>
        </ContentBodyWrapper>
      </main>
    )
  }
}

export default Now