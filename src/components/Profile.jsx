import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ProfileSection = styled.section`
  grid-area: profile;
  display: grid;
  grid-template-rows: 30% auto;
  grid-template-areas: "profile_image" "profile_blurb";
  justify-items: center;
  font-family: 'Quicksand', sans-serif;
`

const ProfileImage = styled.div`
  background: url('./images/profile_chill.jpeg') no-repeat;
  background-position: 50% 30%;
  background-size: 200px auto;
  grid-area: profile_image;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  float: left;
`
const ProfileBlurb = styled.div`
  grid-area: profile_blurb;
  text-align: center;
`
class Profile extends Component {
  render() {
    return (
      <ProfileSection>
        <Link to="/"><ProfileImage/></Link>
        <ProfileBlurb>
          <p>Software Eng. Student</p>
          <p>Creative. Curious. Capable.</p>
        </ProfileBlurb>
      </ProfileSection>
    )
  }
}

export default Profile