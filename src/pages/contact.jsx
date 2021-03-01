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
        <SvgLoader width="" height="45%" className={styles.page_point_1} path="/assets/point.svg" />
          CONTACT
        <SvgLoader width="" height="45%" className={styles.page_point_2} path="/assets/point.svg" />
      </div>
      <div className={styles.page_contents}>
        <p>contents.</p>
      </div>
    </div>
  )
}