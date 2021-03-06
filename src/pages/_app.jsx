import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;300;400;500&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/NK_v4_5.png"></link>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
