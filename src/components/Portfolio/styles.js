import styled from 'styled-components';
import COLORS from "../../constants/colors.js"

export const SectionWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media (min-width: 0px) {
    padding-left: 30px
    padding-right: 30px;
   }
  @media (min-width: 768px) {
    padding-left: 50px
    padding-right: 50px;
   }
  @media (min-width: 992px) {
    padding-left: 150px
    padding-right: 150px;
   }
  @media (min-width: 1200px) {
    padding-left: 250px
    padding-right: 250px;
   }
  font-family: 'Oxygen', sans-serif;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: ${COLORS.gray};
`;

export const WhiteSectionWrapper = styled(SectionWrapper)`
  background-color: #fff;
`

export const Column = styled.span`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  @media (min-width: 900px) {
    flex: 1;
  }
`;

export const CenteredColumn = styled(Column)`
  padding-left: 20%;
  padding-right: 20%;
`;

export const SectionHeader = styled.h3`
  font-size: 28px;
  font-weight: normal;
  text-align: left;
  color: ${COLORS.purple};
  line-height: 35px;
  width: 100%;
`;