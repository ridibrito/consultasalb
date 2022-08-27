import '../styles/globals.css'
import Navbar from '../components/navbar'
import Head from 'next/head'



function MyApp({ Component, pageProps }) {
  <Head>
  <title>Gerenciador de consultas</title>
  <link rel="shortcut icon" href="/icone.png" />
</Head>
  
  return <Component {...pageProps} />
  
}

export default MyApp
