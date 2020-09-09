import React from 'react';
import {WhiteSectionWrapper, CenteredColumn, SectionHeader} from "./Portfolio/styles";
import ProfileImage from "../assets/me.jpg";
import COLORS from "../constants/colors"
import styled from "styled-components";

export const TwoColumns = styled.div`
  display: flex;
`;

export const AboutLeftContainer = styled.span`
  width: 50%;
`;

export const PhotoRightContainer = styled.span`
  width: 50%;
`;

export const ParagraphContent = styled.p`
  font-size: 18px;
  font-weight: normal;
  text-align: left;
  color: ${COLORS.lightOrange};
`;

export const Headshot = styled.img`
  width: 50%;
  max-width: 100%;
  height: auto;
`;

const About = () => {
  return (
      <WhiteSectionWrapper>
        <CenteredColumn>
          <SectionHeader>about me</SectionHeader>
          <TwoColumns>
            <AboutLeftContainer>
              <ParagraphContent>Hi there! I'm Austina, a student and software engineer based in
                Boston, MA. I value creating content that make people's lives easier or make
                people laugh. When I'm not in front of a laptop screen, you can find me upcycling
                clothing, cheering on Philadelphia sports teams, and learning to fall gracefully on
                a skateboard.</ParagraphContent>
            </AboutLeftContainer>
            <PhotoRightContainer>
              <Headshot src={ProfileImage}/>
            </PhotoRightContainer>
          </TwoColumns>
        </CenteredColumn>
      </WhiteSectionWrapper>
  );
}

/*
<ComponentWrapper>
      <Row>
        <HeaderLeftWrapper>
          <SmallHeaderText>
            <strong>hey there!</strong>
          </SmallHeaderText>
          <LargeHeaderText>my name is</LargeHeaderText>
          <NameText>ian anderson</NameText>
          <SmallHeaderText>
            I am a <strong>front-end developer</strong> with a love for{" "}
            <strong>UX</strong> and a focus on <strong>impact</strong>.<br />
            <br /> I want to use technology to{" "}
            <strong>build a better world</strong>.
          </SmallHeaderText>
        </HeaderLeftWrapper>
        <HeaderRightWrapper>
          <Zoom>
            <EmojiImage src={Emoji} />
          </Zoom>
        </HeaderRightWrapper>
      </Row>
    </ComponentWrapper>
 */
export default About;