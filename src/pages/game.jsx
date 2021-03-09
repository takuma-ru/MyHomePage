import Head from 'next/head'
import styles from '../styles/pages_globals.module.css'
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default function Game() {
  return (
    <div>
      <Head>
        <title>NEKOO｜Game</title>
      </Head>

      <div  className={styles.page_title}>
        <SvgLoader height="65%" className={styles.title_underbar} path="/assets/title_underbar.svg">
          <SvgProxy selector="g" stroke-width="1px"></SvgProxy>
        </SvgLoader>
          GAME
      </div>
      <div className={styles.page_contents}>
        <p>contents.</p>
      </div>
    </div>
  )
}