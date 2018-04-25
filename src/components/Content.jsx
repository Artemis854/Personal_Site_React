import React, { Component } from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  grid-area: content;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);  
  padding: 5%;
  display: grid;
  grid-template-rows: 10% 1fr 5%;
  grid-template-areas: "content_header" "content_body" "content_footer";
`
const ContentHeader = styled.h1`
  grid-area: content_header;
  border-bottom: #eee 2px solid;
`

const ContentBody = styled.div`
  grid-area: content_body;
`

const ContentFooter = styled.div`
  grid-area: content_footer;
  border-top: #eee 2px solid;
`

class Content extends Component {
  render() {
    return (
      <ContentWrapper>
        <ContentHeader>Content Head</ContentHeader>
        <ContentBody>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.</p>
        </ContentBody>
        <ContentFooter/>
      </ContentWrapper>
    )
  }
}

export default Content