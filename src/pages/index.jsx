import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MyHomePage</title>
      </Head>
      <div className={styles.center_hex}>
        <div className={styles.center_hex_title}>
          title
        </div>
        <div className={styles.center_hex_text}>
          center_hex_text sample
        </div>
      </div>
    </div>
  )
}
