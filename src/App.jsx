import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { MyContext } from './context/MyContext'
import { Main } from './components/main/Main'
import { Background } from './components/background/Background'
import { theme } from './theme/theme'
import { useState } from 'react'
import { ThankYou } from './components/main/ThankYou'

const GlobalStyled = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    font-family: 'Overpass', sans-serif;
  }
` 

function App() {
  const [valor, setValor] = useState(0);
  const [thanks, setThanks] = useState(false);

  const handleThanks = () => {
    setThanks(true)
  }

  const handleValor = (evento) => {
    // const novoValor = evento.currentTarget.value
    // setValor(novoValor)
    setValor(evento.currentTarget.value)
    console.log(valor)
  }

  const validaForm = () => {
    console.log(valor)
    if (valor != 0 && thanks) {
      return <ThankYou/>
    } else {
      console.log('n passou')
    }
  }

  return (
    <MyContext.Provider value={{ valor, handleValor, handleThanks }}>
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Background>
        <Main />
        {validaForm()}
      </Background>
    </ThemeProvider>
    </MyContext.Provider>
  )
}

export default App
