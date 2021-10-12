import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import siteChange from '../../store/siteChange'
import { IMessageProps } from './Message.props'

const MessageWrapper = styled.div<IMessageProps>`
  z-index: 3;
  position: fixed;
  background-color: #000;
  opacity: 0.9;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  visibility: ${({isModalActive}) => siteChange.isModalActive ? `visible` : `hidden`};
`
const MessageBlock = styled.div<IMessageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 38%;
  left: ${({isModalActive}) => siteChange.isModalActive ? `50%` : `100%`};
  width: 582px;
  height: 295px;
  background: #ffa501;;
  border: 1px solid #000;
  color: #fff;
  z-index: 10;
  visibility: ${({isModalActive}) => siteChange.isModalActive ? `visible` : `hidden`};
  opacity: ${({isModalActive}) => siteChange.isModalActive ? `1` : `0`};
  transition: all .6s;
  transform: ${({isModalActive}) => siteChange.isModalActive ? `translateX(-50%);` : `none`};
  @media ${props => props.theme.media.desktop} {
    width: 440px;
    height: 310px;
  }
  @media ${props => props.theme.media.laptop} {
    width: 390px;
    height: 270px;
  }
  @media ${props => props.theme.media.tablet} {
    width: 340px;
    height: 230px;
  }
  @media ${props => props.theme.media.phone} {
    width: 270px;
    height: 180px;
  }
`
const MessageDescr = styled.h3`
  text-align: center;
  font-size: 29px;
  font-weight: 700;
  text-transform: uppercase;
  @media ${props => props.theme.media.desktop} {
    font-size: 26px;
  }
  @media ${props => props.theme.media.laptop} {
    font-size: 23px;
  }
  @media ${props => props.theme.media.tablet} {
    width: 320px;
    font-size: 20px;
  }
  @media ${props => props.theme.media.phone} {
    width: 230px;
    font-size: 16px;
  }
`
const Break = styled.br`
`

const Message = observer ( () => (
    <MessageWrapper active={siteChange.isModalActive}>
      <MessageBlock active={siteChange.isModalActive}>
        <MessageDescr>
          Спасибо, что отправили ваши данные.
          <Break />
          В ближайшее время я с вами свяжусь.
        </MessageDescr>
      </MessageBlock>
    </MessageWrapper>
  )
)

export default Message