import React, { Component } from 'react'
import styled from 'styled-components'

const ProfileSection = styled.section`
  grid-area: profile;
  display: grid;
  grid-template-rows: 60% auto;
  grid-template-areas: "profile_image" "profile_blurb";
  justify-items: center;
`

const ProfileImage = styled.img.attrs({
  src: './images/profile.jpeg'
})`
  grid-area: profile_image;
  border-radius: 15%;
`
const ProfileBlurb = styled.div`
  grid-area: profile_blurb;
  text-align: center;
`
class Profile extends Component {
  render() {
    return (
      <ProfileSection>
        <ProfileImage/>
        <ProfileBlurb>
          <p>Software Eng. Student</p>
          <p>Creative. Curious. Capable.</p>
        </ProfileBlurb>
      </ProfileSection>
    )
  }
}

export default Profile