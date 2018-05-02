import React, { Component } from 'react'
import styled from 'styled-components'

const SkillWrapper = styled.div`
  position: relative;
  clear: both;
  margin-bottom: 25px;
`

const MainSkill = styled.div`
  width: 100%;
  padding: 5px 20px;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);   
  text-align: left;
  font-size: x-large;
  color: #000;
  margin: 25px auto;
`

const SubSkill = styled.div`
  width: 80%;
  float: right;
  padding: 5px 20px;
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);   
  text-align: left;
  font-size: medium;
  color: #000;
  margin: 10px auto;
`

class Skill extends Component{

  MainBackground = () => (
    {
      // `linear-gradient(to-right, ${this.props.skill.color} 50%, #fff 50%)`
      background: `linear-gradient(to right, ${this.props.skill.color} 0%, ${this.props.skill.color} ${this.props.skill.level}%, #fff ${this.props.skill.level}%, #fff 100%)`,
      color: this.props.skill.text ? this.props.skill.text : '#333'
    }
  )

  SubBackground = (subskill) => (
    {
      background: `linear-gradient(to right, ${this.props.skill.color} 0%, ${this.props.skill.color} ${subskill.level}%, #fff ${subskill.level}%, #fff 100%)`,
      color: this.props.skill.text ? this.props.skill.text : '#333',
      opacity: 0.8
    }
  )

  ExtractSubSkills = () => {
    const subskills = this.props.subskills

    return(
      subskills.map((subskill, index) => {
        return(<SubSkill key={index} style={this.SubBackground(subskill)}>{subskill.name}</SubSkill>)
      })
    )
  }

  render() {
    return (
      <SkillWrapper>
        <MainSkill style={this.MainBackground()}>{this.props.skill.name}</MainSkill>
        {this.ExtractSubSkills()}
      </SkillWrapper>
    )
  }
}

export default Skill