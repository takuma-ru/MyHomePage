import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NEKOO - Home</title>
      </Head>
      <div className={styles.center_hex}>
        <div className={styles.center_hex_title}>
          title
        </div>
        <div className={styles.center_hex_text}>
          <p>center_hex_text</p>
          <p>現在制作中</p>
        </div>
      </div>
    </div>
  )
}
