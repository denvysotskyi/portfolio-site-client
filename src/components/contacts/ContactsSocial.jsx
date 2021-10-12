import styled from 'styled-components'
import Image from '../../common/image/Image'

import telegram from '../../assets/icons/social/telegram.svg'
import linkedin from '../../assets/icons/social/linkedin.png'
import github from '../../assets/icons/social/github.svg'
import phone from '../../assets/icons/social/phone.png'

const LinksWrapper = styled.div`
  margin-top: 20px;
`
const Link = styled.a`
`

const ContactsSocial = () => (
  <LinksWrapper>
    <Link href={'https://t.me/denvysotskyi'}
          target={'_blank'}>
      <Image src={telegram}
             alt={'telegram'}
             width={'45px'}
             height={'45px'}
             right={'25px'}
      />
    </Link>
    <Link href={'https://www.linkedin.com/in/denvysotskyi'}
          target={'_blank'}>
      <Image src={linkedin}
             alt={'linkedin'}
             width={'46px'}
             height={'46px'}
             right={'25px'}
      />
    </Link>
    <Link href={'https://github.com/denvysotskyi'}
          target={'_blank'}>
      <Image src={github}
             alt={'github'}
             width={'45px'}
             height={'45px'}
             right={'25px'}
      />
    </Link>
    <Link href={'tel:+38 (068) 001-12-01'}>
      <Image src={phone}
             alt={'phone'}
             width={'45px'}
             height={'45px'}
             right={'25px'}
      />
    </Link>
  </LinksWrapper>
  )

export default ContactsSocial