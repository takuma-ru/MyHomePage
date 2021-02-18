import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/NK_v6.png"></link>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
