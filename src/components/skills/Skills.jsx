import styled from 'styled-components'
import ScrollableAnchor from 'react-scrollable-anchor'
import SkillList from './SkillList'

const Section = styled.section`
  padding-top: 120px;
  @media ${props => props.theme.media.tablet} {
    padding-top: 40px;
  }
`
const Container = styled.div`
  width: 1140px;
  margin: 0 auto;
  @media ${props => props.theme.media.desktop} {
    max-width: 960px;
  }
  @media ${props => props.theme.media.laptop} {
    max-width: 720px;
  }
  @media ${props => props.theme.media.tablet} {
    max-width: 540px;
  }
  @media ${props => props.theme.media.phone} {
    max-width: 100%;
    padding: 0 10px;
  }
`
const Title = styled.h2`
  color: #000;
  font-weight: 700;
  text-align: left;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -25%;
    left: 0;
    width: 36px;
    height: 36px;
    border-radius: 100%;
    background: #ffa501;
  }
  &::before {
    left: 50%;
    transform: translateX(-50%);
  }
  z-index: 2;
`
const Subtitle = styled.div`
  text-align: center;
  color: #000;
  font-size: 36px;
  font-weight: 700;
  line-height: 60px;
  @media ${props => props.theme.media.tablet} {
    font-size: 24px;
    line-height: 36px;
  }
`
const Divider = styled.div`
  width: 60px;
  height: 3px;
  background-color: #ffa501;
  margin: 0 auto;
  margin-top: 22px;
`

const Skills = () => (
    <ScrollableAnchor id={'skills'}>
      <Section>
        <Container>
          <Title>
            Навыки
          </Title>
          <Subtitle>
            Что я использую в работе
          </Subtitle>
          <Divider />
          <SkillList />
        </Container>
      </Section>
    </ScrollableAnchor>
  )

export default Skills