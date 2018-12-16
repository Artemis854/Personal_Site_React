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
  grid-template-columns: 1fr 0.1fr 1fr;
  grid-template-rows: 0.2fr 1fr 0.4fr;
  grid-template-areas: 'objective . skills' 
                       'work . skills'
                       'achievements achievements achievements';
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

const Achievements = styled.div`
  grid-area: achievements;
`

const SkillsHeader = styled.h3`
  margin-bottom: 0px;
`

const MainList = styled.ul`
  padding-left: 0px;
`
const WorkTitle = styled.li`
  font-size: 24px;
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
              <p>Obtain a 4 month or less co-op for Summer 2019 (May-August)</p>
            </Objective>
            <Achievements>
              <h3>Achievements</h3>
              <MainList>
                <li>Developed code for Online banking at RBC, literally the second page 🤩 | Made it to Reddit's frontpage</li>
              </MainList>
            </Achievements>
            <Work>
              <h3>Work Experience</h3>
              <MainList>
                <WorkTitle>RBC - Developer</WorkTitle>
                <ul>
                  <li>Full stack development to create an easier banking dashboard</li>
                  <li>Worked in an Agile team, used JIRA and Confluence for management</li>
                  <li>Heavily leveraged Git and Github for workflow</li>
                  <li>Angular and Spring Boot services</li>
                  <li>QA testing (Unit, Integration, E2E)</li>
                </ul>
              </MainList>
            </Work>
            <Skills>
              <SkillsHeader>Skills</SkillsHeader>
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