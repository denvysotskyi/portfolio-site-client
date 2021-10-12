import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import siteChange from '../../store/siteChange'
import { IPromoProps, IPromoHamburger } from './Promo.props'

const StyledHamburger = styled.div<IPromoHamburger>`
  position: absolute;
  top: 20px;
  right: 30px;
  height: 21px;
  display: ${({isButtonActive}) => siteChange.isButtonActive ? `none` : `flex`};
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  cursor: pointer;
  @media ${props => props.theme.media.phone} {
    right: 20px;
  }
`
const Span = styled.span<IPromoProps>`
display: block;
width: ${({width}) => width};
height: 3px;
background-color: #000;
`

const PromoHamburger = observer ( (): JSX.Element => (
    <StyledHamburger active={siteChange.isButtonActive}
                     onClick={() => siteChange.openMenu()}>
      <Span width={'30px'} />
      <Span width={'36px'} />
      <Span width={'30px'} />
    </StyledHamburger>
  )
)

export default PromoHamburger