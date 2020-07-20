import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl'
import { ThemeProvider } from 'emotion-theming'
import { theme } from './ui/theme'
import { BrowserRouter } from 'react-router-dom'
import TopBar from './components/topBar/TopBar'
import Pages from './pages/routes'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopBar />
        <Pages />
      </BrowserRouter>
    </ThemeProvider>
  )
}

ReactDOM.render(
  <IntlProvider
    locale={'ru'}
    defaultLocale={'ru'}
  >
    <App />
  </IntlProvider>,
  document.getElementById('root'))
