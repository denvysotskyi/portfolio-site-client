import styled from 'styled-components'
import indicator from '../../assets/images/indicator.svg'
import { observer } from 'mobx-react-lite'
import siteChange from '../../store/siteChange'
import { IIndicatorProps } from './Indicator.props'

const ImageWpapper = styled.div<IIndicatorProps>`
  margin-top: 15px;
  z-index: 3;
  opacity: 0.9;
  display: ${({isIndicatorActive}) => siteChange.isIndicatorActive ? `block` : `none`};
`
const Image = styled.img`
  width: 120px;
  height: 120px;
  @media ${props => props.theme.media.phone} {
    width: 70px;
    height: 70px;
  }
`

const Indicator = observer( () => (
    <ImageWpapper active={siteChange.isIndicatorActive}>
      <Image src={indicator}
             alt={'indicator'}
      />
    </ImageWpapper>
  )
)

export default Indicator