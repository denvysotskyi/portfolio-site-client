import styled from 'styled-components'
import ContactsForm from './ContactsForm'
import ScrollableAnchor from 'react-scrollable-anchor'
import ContactsSocial from './ContactsSocial'
import Indicator from '../../common/indicator/Indicator'

const MyContacts = styled.div`
  padding: 120px 90px;
  @media ${props => props.theme.media.tablet} {
    padding-top: 40px;
  }
  @media ${props => props.theme.media.phone} {
    padding: 40px 0 50px 0;
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
const ContactsWrapper = styled.div`
  margin: 0 auto;
  padding: 0 35px 0 52px;
  width: 660px;
  @media ${props => props.theme.media.desktop} {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    column-gap: 40px;
  }
  @media ${props => props.theme.media.laptop} {
    grid-template-columns: repeat(auto-fit, 300px);
  }
  @media ${props => props.theme.media.phone} {
    width: 300px;
  }
`
const Description = styled.div`
  @media ${props => props.theme.media.desktop} {
    padding-top: 30px;
  }
`
const MainTitle = styled.h2`
  z-index: 2;
  color: #000;
  font-weight: 700;
  text-align: left;
  font-size: 16px;
  line-height: 24px;
  position: relative;
  padding-left: 12px;
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
`
const Subtitle = styled.div`
  color: #000;
  font-size: 36px;
  font-weight: 700;
  line-height: 60px;
  text-align: left;
  @media ${props => props.theme.media.desktop} {
    width: 366px;
  }
  @media ${props => props.theme.media.tablet} {
    font-size: 24px;
    line-height: 36px;
  }
  @media ${props => props.theme.media.phone} {
    width: 300px;
  }
`
const Divider = styled.div`
  width: 60px;
  height: 3px;
  background-color: #ffa501;
  margin-top: 1px;
  @media ${props => props.theme.media.phone} {
    margin-top: 15px;
  }
`
const Title = styled.div`
  color: #000;
  font-weight: 700;
  text-align: left;
  font-size: 14px;
  line-height: 21px;
  margin-top: 20px;
  @media ${props => props.theme.media.phone} {
    width: 300px;
  }
`
const LinkTitle = styled.div`
  color: #000;
  font-weight: 700;
  text-align: left;
  font-size: 14px;
  line-height: 21px;
  margin-top: 20px;
  @media ${props => props.theme.media.phone} {  
    width: 300px;
  }
`
const Contacts = (): JSX.Element => (
    <ScrollableAnchor id='contacts'>
      <MyContacts>
        <Container>
          <ContactsWrapper>
            <Description>
              <MainTitle>
                Контакты
              </MainTitle>
              <Subtitle>
                Свяжитесь со мной
              </Subtitle>
              <Divider />
              <Title>
                Любым удобным для вас способом:
              </Title>
              <ContactsSocial />
              <LinkTitle>
                Или оставьте ваши данные и я сам с вами свяжусь:
              </LinkTitle>
              <Indicator />
              <ContactsForm />
            </Description>
          </ContactsWrapper>
        </Container>
      </MyContacts>
    </ScrollableAnchor>
  )

export default Contacts