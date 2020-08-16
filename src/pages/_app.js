import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    transition: all 500ms ease-in-out;
  }

  body {
    margin: 0 auto;
    background: #F1F2EB;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
