import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/Theme'
import Nav from '../components/Navabar'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Nav/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp