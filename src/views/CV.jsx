import React, { Component } from 'react'
import styled from 'styled-components'
import { ContentHeader } from '../styles/content_styles.js'
import Skill from '../components/Skill.jsx'

import { skills } from '../data/skills.js'

const ContentBodyWrapper = styled.div`
  font-family: 'Signika', sans-serif;
  font-size: x-large;
  margin: auto 5%;
`

const ContentBody = styled.div`
  grid-area: content_body;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 'objective skills' 
                       'work skills';
  grid-column-gap: 20px;
`

const Skills = styled.div`
  grid-area: skills;
`

const Work = styled.div`
  grid-area: work;
`

const Objective = styled.div`
  grid-area: objective;
`

class CV extends Component {
  render(){
    return (
      <main>
        <ContentHeader>CV</ContentHeader>
        <ContentBodyWrapper>
          <ContentBody>
            <Objective>
              <h3>Objective</h3>
              <p>Obtain a 4-16 month internship or an entry level position</p>
            </Objective>
            <Work>
              <h3>Work Experience</h3>
              <ul>
                <li>Computer Geek</li>
              </ul>
            </Work>
            <Skills>
              <h3>Skills</h3>
              {
                skills.map((skill, index) => {
                  return(<Skill key={index} skill={skill} subskills={skill.subcategories}/>)
                })
              }
            </Skills>
          </ContentBody>
        </ContentBodyWrapper>
      </main>
    )
  }
}

export default CV