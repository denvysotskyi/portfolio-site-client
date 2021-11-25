import styled from 'styled-components'
import Image from '../../common/image/Image'

import phone_rev from '../../assets/icons/social/phone_rev.png'
import github_rev from '../../assets/icons/social/github_rev.png'
import bitbucket_rev from '../../assets/icons/social/bitbucket_rev.png'
import linkedin_rev from '../../assets/icons/social/linkedin_rev.png'
import telegram_rev from '../../assets/icons/social/telegram_rev.png'

const Aside = styled.aside`
  position: fixed;
  top: 210px;
  left: 53px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 350px;
  z-index: 3;
  @media ${props => props.theme.media.widescreen} {
    display: none;
  }
`
const Link = styled.a`
`
const Divider = styled.div`
  width: 2px;
  height: 100px;
  background: #000;
`
const Description = styled.div`
  width: 25px;
  height: 150px;
`
const Span = styled.span`
  display: block;
  width: 150px;
  transform: rotate(-90deg) translate(-41%, -250%);
  font-size: 17px;
`

const Sidepanel = (): JSX.Element => (
    <Aside>
      <Link href={'tel:+38 (068) 001-12-01'}>
        <Image src={phone_rev}
               alt={'phone'}
               bottom={'10px'}
               width={'30px'}
               height={'30px'}
        />
      </Link>
      <Link href={'https://bitbucket.org/denvysotskyi'}
            target={'_blank'}
      >
        <Image src={bitbucket_rev}
               alt={'bitbucket_rev'}
               bottom={'6px'}
               width={'30px'}
               height={'30px'}
        />
      </Link>
      <Link href={'https://github.com/denvysotskyi'}
            target={'_blank'}
      >
        <Image src={github_rev}
               alt={'github'}
               bottom={'6px'}
               width={'30px'}
               height={'30px'}
        />
      </Link>
      <Link href={'https://www.linkedin.com/in/denvysotskyi'}
            target={'_blank'}
      >
        <Image src={linkedin_rev}
               alt={'linkedin'}
               bottom={'7px'}
               right={'10px'}
               width={'38px'}
               height={'38px'}
        />
      </Link>
      <Link href={'https://t.me/denvysotskyi'}
            target={'_blank'}
      >
        <Image src={telegram_rev}
               alt={'telegram'}
               bottom={'7px'}
               width={'30px'}
               height={'30px'}
        />
      </Link>
      <Divider />
      <Description>
        <Span>
          Социальные сети
        </Span>
      </Description>
    </Aside>
  )

export default Sidepanel


















