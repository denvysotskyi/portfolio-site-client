import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import siteChange from '../../store/siteChange'

const Nav = styled.nav`
`
const List = styled.ul`
  text-transform: uppercase;
  list-style-type: none;
  margin-left: 40px;
`
const Li = styled.li`
  position: relative;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 23px;
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: -35px;
    width: 15px;
    height: 15px;
    border: 1px solid #000;
    border-radius: 100%;
    transition: all .6s;
  }
  &:hover {
    &::before {
      background-color: #fff;
    }
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`
const Link = styled.a`
  href: ${({href}) => href};
`

const MenuNavigation = observer ( (): JSX.Element => (
    <Nav>
      <List>
        <Li>
          <Link onClick={() => siteChange.closeMenu()}
                href={'#skills'}>
            Мои навыки
          </Link>
        </Li>
        <Li>
          <Link onClick={() => siteChange.closeMenu()}
                href={'#works'}>
            Мои работы
          </Link>
        </Li>
        <Li>
          <Link onClick={() => siteChange.closeMenu()}
                href={'#contacts'}>
            Контакты
          </Link>
        </Li>
      </List>
    </Nav>
  )
)

export default MenuNavigation