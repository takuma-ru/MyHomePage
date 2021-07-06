import Head from 'next/head'
import styles from '../styles/pages_globals.module.css'
import about from '../styles/About.module.css'
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default function My_App() {

  const item_data = [
    { title: "CHISK",
      text: `
      <ul>
        <li>開発環境</li>
          <ul>
            <li>Vue.js（2.6.11）</li>
            <li>Vuex</li>
            <li>firebase</li>
            <li>vuetify</li>
          </ul>
        <li>GitHub</li>
        <a href="https://github.com/takuma-ru/taskMGT">takuma-ru/taskMGT</a>
        <li>概要</li>
        このアプリはタスク管理（やることリスト）アプリです。毎日タスクをこなすことで地球にたくさんの生き物たちが住んでくれます。
        たくさんタスクをこなせばたくさんの生き物たちが住んでくれます。
        <li>特徴</li>
        タスクを完了するたびに地球にペンギンが出現します。この機能により、努力が目に見えて分かります。
      </ul>
      `
    },
  ]

  return (
    <div>
      <Head>
        <title>NEKOO&#xFF5C;App</title>
      </Head>

      <div>
        <div className={styles.page_title}>
          <SvgLoader
            className={styles.title_parts}
            width="5%"
            height="100%"
            path="assets/pages/title_sideparts.svg"
          ></SvgLoader>
          <p>
            <span className={styles.title}>A</span>PP
          </p>
        </div>

        <div id="page" className={about.page_contents}>
          {item_data.map((data, i) => {
            var last = false
            if((item_data.length - 1) == i) {
              last = true
            }else {
              last = false
            }

            return (
              <div key={i} className={about.page_contents_01}>
                 <SvgLoader
                  className={about.back_02}
                  path="assets/pages/contents_background_02.svg"
                ></SvgLoader>
                <SvgLoader
                  className={about.back_03}
                  path="assets/pages/contents_background_02.svg"
                ></SvgLoader>
                <div className={about.contents_background}>
                </div>
                { !last &&
                  <div className={about.page_contents_side}>
                    <div className={about.page_contents_sideparts}></div>
                    <div
                      dangerouslySetInnerHTML={{ __html: 'next >> ' + '<span style="color: #00bebeff">' + item_data[i + 1].title + '</span>'  }}
                      className={about.page_contents_sideparts_text}
                    ></div>
                  </div>
                }
                <div className={about.page_contents_title}>
                  <SvgLoader
                    className={about.page_contents_title_img}
                    width="10%"
                    height=""
                    path="assets/pages/contents_title.svg"
                  ></SvgLoader>
                    <span
                      dangerouslySetInnerHTML={{ __html: data.title }}
                    ></span>
                  <SvgLoader
                    className={about.page_contents_title_img_2}
                    width="10%"
                    height=""
                    path="assets/pages/contents_title.svg"
                  ></SvgLoader>
                </div>
                <div className={about.page_contents_text}>
                  <div>
                    <SvgLoader
                      className={about.back_01}
                      path="assets/pages/contents_background.svg"
                    ></SvgLoader>
                  </div>
                  <div className={about.page_contents_text_main}>
                    <SvgLoader className={about.page_contents_text_parts + ' ' + about.text_01} width="3.5vmin" height="3.5vmin" path="assets/pages/contents_text_parts.svg"></SvgLoader>
                    <SvgLoader className={about.page_contents_text_parts + ' ' + about.text_02} width="3.5vmin" height="3.5vmin" path="assets/pages/contents_text_parts.svg"></SvgLoader>
                    <SvgLoader className={about.page_contents_text_parts + ' ' + about.text_03} width="3.5vmin" height="3.5vmin" path="assets/pages/contents_text_parts.svg"></SvgLoader>
                    <SvgLoader className={about.page_contents_text_parts + ' ' + about.text_04} width="3.5vmin" height="3.5vmin" path="assets/pages/contents_text_parts.svg"></SvgLoader>
                    <p
                      dangerouslySetInnerHTML={{ __html: data.text }}
                    ></p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}