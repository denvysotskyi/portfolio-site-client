import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/app/App'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
`

const theme = {
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px)',
    laptop: '(max-width: 992px)',
    desktop: '(max-width: 1200px)',
    widescreen: '(max-width: 1439px)'
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>, document.getElementById('root')
)