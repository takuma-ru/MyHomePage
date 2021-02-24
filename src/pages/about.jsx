import Head from 'next/head'
import styles from '../styles/pages_globals.module.css'
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default function About() {

  return (
    <div>
      <Head>
        <title>NEKOO - About</title>
      </Head>

      <div  className={styles.page_title}>
        <SvgLoader width="" height="45%" className={styles.page_point_1} path="/assets/point.svg" />
          ABOUT
        <SvgLoader width="" height="45%" className={styles.page_point_2} path="/assets/point.svg" />
      </div>
      <div className={styles.page_contents}>
        <div className={styles.page_contents_title_l}>
          <SvgLoader className={styles.title_hex} width="80%" height="80%" path="/assets/item_hex_outline.svg">
            <span>自己紹介</span>
          </SvgLoader>
        </div>
        <div className={styles.page_contents_text_l}>
          <span>本文</span>
        </div>

        <div className={styles.page_contents_text_r}>
          <span>本文</span>
        </div>
        <div className={styles.page_contents_title_r}>
          <SvgLoader className={styles.title_hex} width="80%" height="80%" path="/assets/item_hex_outline.svg">
            <span>自己紹介</span>
          </SvgLoader>
        </div>
      </div>
    </div>
  )
}