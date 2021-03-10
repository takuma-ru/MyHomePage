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
          <SvgLoader className={styles.title_parts} width="5%" height="100%" path="assets/title_sideparts.svg"></SvgLoader>
          <p>ABOUT</p>
        </div>
        <div id="page" className={styles.page_contents}>
          <div className={styles.page_contents_title_l}>
              <span>who？</span>
          </div>
          <div className={styles.page_contents_text_l}>
            <span>本文</span>
          </div>

          <div className={styles.page_contents_text_r}>
            <span>本文</span>
          </div>
          <div className={styles.page_contents_title_r}>
              <span>何できるの？</span>
          </div>

          <div className={styles.page_contents_title_l}>
              <span>誰？</span>
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