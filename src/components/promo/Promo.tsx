import styled from 'styled-components'
import PromoHamburger from './PromoHamburger'
import { IPromoProps } from './Promo.props'

import main_photo from '../../assets/images/main_photo.jpg'
import main_photo_small from '../../assets/images/main_photo_small.jpg'

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  background: url(${main_photo}) 50%/cover no-repeat;
  padding-top: 205px;
  @media ${props => props.theme.media.laptop} {
    background: url(${main_photo}) 85%/cover;
  }
  @media ${props => props.theme.media.tablet} {
    background: url(${main_photo}) 81%/cover;
  }
  @media ${props => props.theme.media.phone} {
    background: url(${main_photo_small}) 18.4%/cover;
  }
`
const Container = styled.section`
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
const Title = styled.h1`
  position: relative;
  padding-left: 10px;
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
  z-index: 2;
  span {
    font-size: 19px;
  }
  color: #000;
  font-size: 36px;
  font-weight: 700;
  line-height: 60px;
  text-align: left;
  font-size: 16px;
  line-height: 24px;
  @media ${props => props.theme.media.phone} {
    font-size: 10px;
    line-height: 12px;
    span {
      margin-left: 11px;
      font-size: 14px;
    }
  }
`
const Span = styled.span`
  font-size: 17px;
  font-weight: 700;
`
const Subtitle = styled.div`
  width: 523px;
  margin-top: 10px;
  font-size: 48px;
  line-height: 60px;
  @media ${props => props.theme.media.laptop} {
    font-size: 32px;
    line-height: 35px;
    width: 300px;
  }
  @media ${props => props.theme.media.phone} {
    font-size: 21px;
    font-weight: 400;
    line-height: 18px;
    width: 141px;
    margin-top: 17px;
  }
`
const Button = styled.div<IPromoProps>`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({width}) => width};
  &:hover {
    box-shadow: 0 10px 25px rgba(148, 174, 213, .8);
    transition: .3s all ease;
  }
  @media ${props => props.theme.media.phone} {
    margin-top: 32px;
  }
`
const Link = styled.a`
  padding: 12px 35px 15px 26px;
  height: 45px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #ffa501;
  text-decoration: none;
  color: #000;
  font-size: 14px;
  font-weight: 700;
  &:hover {
    text-decoration: none;
    color: #000;
  }
`

const Br = styled.br`
`

const Promo = (): JSX.Element => (
    <Section>
      <PromoHamburger />
      <Container>
        <Title>
          Меня зовут <Br /> <Span>Денис Высоцкий</Span>
        </Title>
        <Subtitle>
          Я Fullstack Developer
        </Subtitle>
          <Button width={'123px'}>
            <Link href='#works'>
              Проекты
            </Link>
          </Button>
          <Button width={'161px'}>
            <Link href='#skills'>
              Проф. навыки
            </Link>
          </Button>
          <Button width={'199px'}>
            <Link href='#contacts'>
              Свяжитесь со мной
            </Link>
          </Button>
      </Container>
    </Section>
  )

export default Promo