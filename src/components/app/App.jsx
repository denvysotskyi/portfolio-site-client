import styled from 'styled-components'
import Sidepanel from '../sidepanel/Sidepanel'
import Menu from '../menu/Menu'
import Promo from '../promo/Promo'
import Skills from '../skills/Skills'
import Portfolio from '../portfolio/Portfolio'
import Contacts from '../contacts/Contacts'

const Body = styled.div`
`

const App = () => (
    <Body>
      <Sidepanel />
      <Menu />
      <Promo />
      <Skills />
      <Portfolio />
      <Contacts />
    </Body>
  )

export default App