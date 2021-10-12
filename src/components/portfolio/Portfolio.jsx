import styled from 'styled-components'
import ScrollableAnchor from 'react-scrollable-anchor'

import app from '../../assets/images/works/app.jpg'
import blog_hor from '../../assets/images/works/blog_hor.png'
import make_app from '../../assets/images/works/make_app.jpg'
import todos from '../../assets/images/works/todos.png'
import chat_vert from '../../assets/images/works/chat_vert.png'
import messenger from '../../assets/images/works/messenger.png'

const Section = styled.section`
  padding-top: 120px;
  @media ${props => props.theme.media.phone} {
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
  z-index: 2;
  color: #000;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  text-align: left;
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
`
const Subtitle = styled.div`
  text-align: center;
  position: relative;
  color: #000;
  font-size: 36px;
  font-weight: 700;
  line-height: 60px;
  @media ${props => props.theme.media.tablet} {
    font-size: 24px;
    line-height: 36px;
  }
  @media ${props => props.theme.media.phone} {
    margin-top: 20px;
  }
`
const Divider = styled.div`
  width: 60px;
  height: 3px;
  background-color: #ffa501;
  margin: 0 auto;
  margin-top: 22px;
  @media ${props => props.theme.media.phone} {
    margin-top: 15px;
  }
`
const PortfolioWrapper = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template: repeat(2, 280px) / repeat(4, 280px);
  grid-auto-rows: 280px;
  gap: 5px;
  @media ${props => props.theme.media.desktop} {
    grid-template-columns: repeat(auto-fit, 280px);
    grid-auto-rows: 280px;
    justify-content: space-around;
    padding: 0 30px;
    row-gap: 20px;
  }
`
const Link = styled.a`
  transition: all 0.6s;
  grid-row: ${({row}) => row};
  grid-column: ${({column}) => column};
  @media ${props => props.theme.media.desktop} {
    grid-row: unset;
    grid-column: unset;
  }
`
const PortfolioImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:hover {
      filter: grayscale(100%);
    }
`
const PortfolioImageVertical = styled(PortfolioImage)`
`
const PortfolioImageHorizontal = styled(PortfolioImage)`
`

const Portfolio = () => (
    <Section>
      <Container>
        <Title>
          Портфолио
        </Title>
        <Subtitle>
          Мои работы
        </Subtitle>
        <Divider />
        <ScrollableAnchor id={'works'}>
          <PortfolioWrapper>
              <Link href={'https://messenger-app-d3a7e.web.app'}
                    target={'_blank'}
              >
                <PortfolioImage src={messenger}
                                alt={'messenger'}
                />
              </Link>
              <Link href={'/#'}>
                <PortfolioImage src={make_app}
                                alt={'make_app'}
                />
              </Link>
              <Link href={'/#'}>
                <PortfolioImage src={app}
                                alt={'app'}
                />
              </Link>
              <Link href={'https://chat-app-client-three.vercel.app'}
                    target={'_blank'}
                    row={'1 / 3'}
                    column={'4 / 5'}>
                <PortfolioImageVertical src={chat_vert}
                                        alt={'chat_vert'}
                />
              </Link>
              <Link href={'https://todos-app-eight.vercel.app'}
                    target={'_blank'}
              >
              <PortfolioImage src={todos}
                              alt={'todos'}
              />
              </Link>
              <Link href={'https://blog-app-client-seven.vercel.app'}
                    target={'_blank'}
                    row={'2 / 3'}
                    column={'2 / 4'}>
                <PortfolioImageHorizontal src={blog_hor}
                                          alt={'blog_hor'}
                />
              </Link>
          </PortfolioWrapper>
        </ScrollableAnchor>
      </Container>
    </Section>
  )

export default Portfolio