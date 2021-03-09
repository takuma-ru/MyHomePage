import Head from 'next/head'
import styles from '../styles/pages_globals.module.css'
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>NEKOO｜Contact</title>
      </Head>

      <div  className={styles.page_title}>
        <SvgLoader height="85%" className={styles.title_underbar} path="/assets/title_underbar.svg">
          <SvgProxy selector="g" stroke-width="1px"></SvgProxy>
        </SvgLoader>
          CONTACT
      </div>
      <div className={styles.page_contents}>
        <p>contents.</p>
      </div>
    </div>
  )
}