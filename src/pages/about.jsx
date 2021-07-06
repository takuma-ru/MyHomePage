import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/pages_globals.module.css'
import about from '../styles/About.module.css'
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default function About() {

  const item_data = [
    {title: "Profile", text: `
      どうもこんにちは。takuma-ruです。
      <ul>
        <li>今年の抱負</li>
        目指せ年間365コミット
        <li>Sosial media</li>
        <ul>
          <li>Twitter&#xFF5C;@takumaru_2222</li>
          <li>bitbucket&#xFF5C;takuma-ru</li>
          <li>GooglePlay&#xFF5C;takuma-ru</li>
        </ul>
        <li>得意なこと</li>
        <ul>
          <li>Webアプリ開発</li>
          webアプリを作るのが得意です。特にVue.jsやNuxt.jsを扱うのが得意で、基本的にはこの2つのフレームワークを使っています。
          大体のことができる能力はあると思ってます。PWAとTWAを扱う技術もあるので一応ネイティブアプリっぽいのも作れます。
          Reactは基本的な事ならできます。ただreduxを扱うとこはまだできません。TypeScriptも勉強中。
          もともと1つの言語ですべてのプラットフォームに対応したアプリを開発したいと思ってこの分野に手を出したので、DartやElectronもやってみたいと思っています。
          <li>ゲーム開発</li>
          C#とUnityを用いたゲーム開発ができます。C#に関してはオブジェクト指向を少し理解しているつもりです。Unityに関しては3D,2Dどちらのゲームも小規模程度なら1人で作れる技術力はあります。また、ポストエフェクトを用いてゲームに視覚的効果を与える程度のスキルはあります。
        </ul>
      </ul>
    `},
    {title: "skill", text: `
      <ul>
        <li>Web</li>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>css</li>
          <li>Vue.js</li>
          <li>Nuxt.js</li>
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript(勉強中)</li>
        </ul>
        <li>C#(Unity)</li>
        <li>Python</li>
        <li>C</li>
        <li>C++</li>
        <li>Go(基本だけ)</li>
        <li>MySQL(基本だけ)</li>
        <li>やってみたい言語</li>
        <ul>
          <li>Dart(flutter)</li>
          <li>Ruby</li>
        </ul>
      </ul>
    `},
    {title: "Currently under development", text: `
      <ul>
        <li>CHISK</li>
        Vue.jsで作成したタスク管理Webアプリです。
        詳細はこちら

        <li>MyHomePage</li>
        このページを作っています。初めてのReact(Next.js)なので勉強しながら作っています。

        <li>（ファシノ）</li>
        地域創生のための<strong>SNSゲームアプリ</strong><br>
        「地域の魅力を発見してもらい、新しい観光地を作ろう！」を目的とした位置情報を活用したSNSゲームアプリです。<br>
        現在チームメンバーと、コンセプトとゲームデザインを検討中...

        <li>IoTを活用したコンポストトイレの開発・運用</li>
        現状のコンポストトイレの問題や不便な点をIoTを用いて解決したコンポストトイレを開発する予定。<br>
        現在「IoTを活用した自然を体感できる宿泊施設を自分たちで建築する」プロジェクトを進めています。このプロジェクトの一環でコンポストトイレの必要性が出て来た為、現在開発を検討しています。
        IoTの活用方法としては、主に空調の管理など人の目に見えないところの管理を行うことで、「自然体感することに集中してもらう」ということを目的としています。

      </ul>
    `}
  ]

  return (
    <div>
      <Head>
        <title>NEKOO&#xFF5C;About</title>
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
            <span className={styles.title}>A</span>BOUT
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

      <style jsx>{`
      `}</style>

    </div>
  )
}