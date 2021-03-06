import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/pages_globals.module.css'
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default function About() {

  return (
    <div>
      <Head>
        <title>NEKOO｜About</title>
      </Head>

      <div>
        <div className={styles.page_title}>
          <SvgLoader width="" height="45%" className={styles.page_point_1} path="/assets/point.svg" />
            ABOUT
          <SvgLoader width="" height="45%" className={styles.page_point_2} path="/assets/point.svg" />
        </div>
        <div id="page" className={styles.page_contents}>
          <div className={styles.page_contents_title_l}>
            {/*<SvgLoader className={styles.title_hex} width="" height="65%" path="/assets/item_hex_outline_page.svg">*/}
            {/*<SvgLoader className={styles.title_hex + ' ' + styles.who} width="" height="85%" path="/assets/item_hex_outline_page_deco.svg" />*/}
            {/*<SvgLoader className={styles.title_hex + ' ' + styles.who} width="100vw" height="85%" path="/assets/item_hex_outline_page_deco2.svg" />*/}
              <span>who？</span>
            {/*</SvgLoader>*/}
          </div>
          <div className={styles.page_contents_text_l}>
            <span>本文</span>
          </div>

          <div className={styles.page_contents_text_r}>
            <span>本文</span>
          </div>
          <div className={styles.page_contents_title_r}>
            <SvgLoader className={styles.title_hex} width="" height="65%" path="/assets/item_hex_outline_page.svg">
              <span>何できるの？</span>
            </SvgLoader>
          </div>

          <div className={styles.page_contents_title_l}>
            <SvgLoader className={styles.title_hex} width="" height="65%" path="/assets/item_hex_outline_page.svg">
              <span>誰？</span>
            </SvgLoader>
          </div>
          <div className={styles.page_contents_text_l}>
            <span>本文</span>
          </div>
        </div>
      </div>

      <style jsx>{`
      `}</style>

    </div>
  )
}