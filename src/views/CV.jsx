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
                       'achievements . skills';
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
              <p>Obtain a 4-12 month internship or an entry level position</p>
            </Objective>
            <Achievements>
              <h3>Achievements</h3>
              <MainList>
                <li>Made it to Reddit's frontpage</li>
                <li>Work only on production sites <span role="img" aria-label="Spooky">😱</span> ... and haven't been fired yet for messing up!</li>
              </MainList>
            </Achievements>
            <Work>
              <h3>Work Experience</h3>
              <MainList>
                <WorkTitle>Computer Geek <a href="https://www.computer-geek.net" style={{"color" : "#ff4757"}}>[Link]</a></WorkTitle>
                <ul>
                  <li>A bit nightmareish, but we work solely on production sites (<span style={{"color" : "#ff6b81"}}>High risk</span>; <span style={{"color" : "#70a1ff"}}>Fast paced</span>)</li>
                  <li>All clients have a <span style={{"color" : "#0abde3"}}>unique</span> issue to tackle</li>
                  <li>Heavily focused around <span style={{"color" : "#00d2d3"}}>communication</span>, <span style={{"color" : "#00d2d3"}}>self-starter attitude</span> (remote work), and fast-learning</li>
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