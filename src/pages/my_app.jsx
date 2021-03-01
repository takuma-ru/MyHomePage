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
        <SvgLoader width="" height="45%" className={styles.page_point_1} path="/assets/point.svg" />
          APP
        <SvgLoader width="" height="45%" className={styles.page_point_2} path="/assets/point.svg" />
      </div>
      <div className={styles.page_contents}>
        <p>contents.</p>
      </div>
    </div>
  )
}