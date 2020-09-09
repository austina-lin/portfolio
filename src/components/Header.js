import React from 'react';
import styled from 'styled-components';
import {SectionWrapper, CenteredColumn} from "./Portfolio/styles";
import COLORS from "../constants/colors.js";

export const SmallHeaderText = styled.h3`
  font-size: 18px;
  font-weight: normal;
  text-align: left;
  color: ${COLORS.purple};
  line-height: 35px;
  width: 100%;
`;

export const EvenSmallerHeaderText = styled(SmallHeaderText)`
  font-size: 20px;
  color: ${COLORS.lightOrange};
`

export const LargeHeaderText = styled.h1`
  font-size: 36px;
  color: ${COLORS.darkOrange};
  line-height: 35px;
  text-align: left;
  font-weight: bold;
  @media (min-width: 900px) {
    font-size: 64px;
  }
`;

const Header = () => {
  return (
      <SectionWrapper>
        <CenteredColumn>
        <SmallHeaderText>
          hey there, my name is
        </SmallHeaderText>
        <LargeHeaderText>austina lin</LargeHeaderText>
          <EvenSmallerHeaderText>
            <strong>I'm a software engineer based in Boston, MA searching for full-stack co-op opportunites</strong>
          </EvenSmallerHeaderText>
        </CenteredColumn>
      </SectionWrapper>
  )
}

export default Header;