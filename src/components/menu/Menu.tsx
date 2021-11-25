import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import siteChange from '../../store/siteChange'
import MenuNavigation from './MenuNavigation'
import Image from '../../common/image/Image'
import { IMenu } from './Menu.props'

import close from '../../assets/icons/other/close.svg'
import telegram from '../../assets/icons/social/telegram.svg'
import linkedin from '../../assets/icons/social/linkedin.png'
import bitbucket from '../../assets/icons/social/bitbucket.svg'
import github from '../../assets/icons/social/github.svg'
import phone from '../../assets/icons/social/phone.png'

const StyledMenu = styled.div<IMenu>`
  position: fixed;
  top: 0;
  left: ${({isMenuActive}) => siteChange.isMenuActive ? `0` : `-100%`};
  width: 100vw;
  height: 100vh;
  z-index: 10;
  visibility: ${({isMenuActive}) => siteChange.isMenuActive ? `visible` : `hidden;`};
  opacity: ${({isMenuActive}) => siteChange.isMenuActive ? `1` : `0`};
  transition: all .6s;
`
const Block = styled.div`
  position: relative;
  width: 345px;
  height: 100%;
  background-color: #ffa501;
  padding-top: 140px;
  padding-left: 40px;
  transition: all .6s;
  z-index: 10;
  @media ${props => props.theme.media.phone} {
    width: 265px;
    padding-left: 20px;
  }
`
const Close = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
`
const Social = styled.div`
  position: absolute;
  left: 30%;
  bottom: 5%;
  transform: translateX(-50%);
  width: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${props => props.theme.media.phone} {
    left: 35%;
    bottom: 18%;
  }
`
const Link = styled.a`
`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  opacity: .7;
`

const Menu = observer ( (): JSX.Element => (
    <StyledMenu active={siteChange.isMenuActive}>
      <Block>
        <Close onClick={() => siteChange.closeMenu()}>
          <Image src={close}
                 alt={'close'}
          />
        </Close>
        <MenuNavigation />
        <Social>
          <Link href={'https://t.me/denvysotskyi'}
                target={'_blank'}
          >
            <Image src={telegram}
                   alt={'telegram'}
                   right={'15px'}
                   width={'40px'}
                   height={'40px'}
            />
          </Link>
          <Link href={'https://www.linkedin.com/in/denvysotskyi'}
                target={'_blank'}
          >
            <Image src={linkedin}
                   alt='linkedin'
                   right={'15px'}
                   width={'40px'}
                   height={'40px'}
            />
          </Link>
          <Link href={'https://bitbucket.org/denvysotskyi'}
                target={'_blank'}
          >
            <Image src={bitbucket}
                   alt='bitbucket'
                   right={'15px'}
                   width={'40px'}
                   height={'40px'}
            />
          </Link>
          <Link href={'https://github.com/denvysotskyi'}
                target={'_blank'}
          >
            <Image src={github}
                   alt='github'
                   right={'15px'}
                   width={'40px'}
                   height={'40px'}
            />
          </Link>
          <Link href={'tel:+38 (068) 001-12-01'}>
            <Image src={phone}
                   alt='phone'
                   right={'15px'}
                   width={'40px'}
                   height={'40px'}
            />
          </Link>
        </Social>
      </Block>
      <Overlay />
    </StyledMenu>
  )
)

export default Menu