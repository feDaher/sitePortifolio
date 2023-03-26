import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  html{
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
    background-color: whitesmoke;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #333333;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
   background-color: #555555;
  }
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
`
function App ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App