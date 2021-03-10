import Head from 'next/head'
import styles from '../styles/pages_globals.module.css'
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default function My_App() {
  return (
    <div>
      <Head>
        <title>NEKOO｜App</title>
      </Head>

      <div  className={styles.page_title}>
        <SvgLoader className={styles.title_parts} width="5%" height="100%" path="assets/title_sideparts.svg"></SvgLoader>
          <p>
            <span className={styles.title_1}>A</span>PP
          </p>
      </div>
      <div className={styles.page_contents}>
        <p>contents.</p>
      </div>
    </div>
  )
}