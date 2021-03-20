import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/pages_globals.module.css'
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default function About() {

  const item_data = [
    {title: "Self Introduction", text: "I'm takuma-ru"},
    {title: "skill", text: "Next.js"},
    {title: "", text: ""}
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
            <span className={styles.title_1}>A</span>BOUT
          </p>
        </div>

        <div id="page" className={styles.page_contents}>
          {item_data.map((data, i) => {
            return (
              <div className={styles.page_contents_01}>
                <div className={styles.page_contents_side}>
                  <div className={styles.page_contents_sideparts}></div>
                  <div
                    /*dangerouslySetInnerHTML={{ __html: item_data[1].title }}*/
                    className={styles.page_contents_sideparts_text}
                  >Next</div>
                </div>
                <div className={styles.page_contents_title}>
                  <SvgLoader
                    className={styles.page_contents_title_img}
                    width="10%"
                    height=""
                    path="assets/pages/contents_title.svg"
                  ></SvgLoader>
                    <span
                      dangerouslySetInnerHTML={{ __html: data.title }}
                    ></span>
                  <SvgLoader
                    className={styles.page_contents_title_img_2}
                    width="10%"
                    height=""
                    path="assets/pages/contents_title.svg"
                  ></SvgLoader>
                </div>
                <div className={styles.page_contents_text}>
                  <SvgLoader className={styles.page_contents_text_parts + ' ' + styles.text_01} width="2.5vmin" height="2.5vmin" path="assets/pages/contents_text_parts.svg"></SvgLoader>
                  <SvgLoader className={styles.page_contents_text_parts + ' ' + styles.text_02} width="2.5vmin" height="2.5vmin" path="assets/pages/contents_text_parts.svg"></SvgLoader>
                  <SvgLoader className={styles.page_contents_text_parts + ' ' + styles.text_03} width="2.5vmin" height="2.5vmin" path="assets/pages/contents_text_parts.svg"></SvgLoader>
                  <SvgLoader className={styles.page_contents_text_parts + ' ' + styles.text_04} width="2.5vmin" height="2.5vmin" path="assets/pages/contents_text_parts.svg"></SvgLoader>
                    <span
                      dangerouslySetInnerHTML={{ __html: data.text }}
                    ></span>
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