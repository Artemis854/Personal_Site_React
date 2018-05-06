import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../views/Home'
// import About from '../views/About'
import Projects from '../views/Projects'
import CV from '../views/CV'
import Contact from '../views/Contact'
import Now from '../views/Now'

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

const ContentFooter = styled.div`
  grid-area: content_footer;
  border-top: #eee 2px solid;
`

class Content extends Component {
  render() {
    return (
      <ContentWrapper>
        <Switch>
          {/* <Route exact path='/' component={Home}/> */}
          {/* <Route path='/about' component={About}/> */}
          <Route path='/projects' component={Projects}/>
          <Route path='/cv' component={CV}/>
          <Route path='/contact' component={Contact}/>
          <Route exact path='/' component={Now}/>
        </Switch>
        <ContentFooter/>
      </ContentWrapper>
    )
  }
}

export default Content