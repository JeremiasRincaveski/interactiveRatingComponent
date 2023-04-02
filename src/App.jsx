import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { MyContext } from './context/MyContext'
import { Main } from './components/main/Main'
import { Background } from './components/background/Background'
import { theme } from './theme/theme'
import { useState } from 'react'

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

  const handleValor = (evento) => {
    setValor(evento.currentTarget.value)
    console.log(valor)
  }


  return (
    <MyContext.Provider value={{ valor, handleValor }}>
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Background>
        <Main>
      
        </Main>
      </Background>
    </ThemeProvider>
    </MyContext.Provider>
  )
}

export default App
