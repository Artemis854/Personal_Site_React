import React, { Component } from 'react'
import { ContentHeader, ContentBody, ContentLine} from '../styles/content_styles.js'
import styled from 'styled-components';

const ContentBodyWrapper = styled.div`
  font-family: 'Signika', sans-serif;
  font-size: x-large;
  margin: 10% 15%;
`

class Contact extends Component {
  render(){
    return (
      <main>
        <ContentHeader>Contact</ContentHeader>
        <ContentBodyWrapper>
          <ContentBody>
            <ContentLine>Looks like you want to talk... well here's some info that'll come in handy</ContentLine>
            <ContentLine>Email: <a href="mailto:kaushal197@gmail.com">kaushal197@gmail.com</a></ContentLine>
            <ContentLine>Call any time: <a href="tel:+16475459549">+1 (647)-545-9549</a></ContentLine>
          </ContentBody>
        </ContentBodyWrapper>
      </main>
    )
  }
}

export default Contact