import Head from 'next/head'
import styles from '../styles/pages_globals.module.css'
import game from '../styles/Game.module.css'
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default function Game() {
  return (
    <div>
      <Head>
        <title>NEKOO&#xFF5C;Game</title>
      </Head>

      <div  className={styles.page_title}>
        <SvgLoader className={styles.title_parts} width="5%" height="100%" path="assets/pages/title_sideparts.svg"></SvgLoader>
          <p>
            <span className={styles.title_1}>G</span>AME
          </p>
      </div>
      <div className={styles.page_contents}>
        <div className={game.contents_item}>
          <div className={game.contents_item_img}></div>
          <SvgLoader
            path="assets/pages/game/contents_item.svg"
          >
          </SvgLoader>
          <SvgLoader
            path="assets/pages/game/contents_item.svg"
          >
          </SvgLoader>
          <SvgLoader
            path="assets/pages/game/contents_item.svg"
          >
          </SvgLoader>
        </div>
      </div>
    </div>
  )
}