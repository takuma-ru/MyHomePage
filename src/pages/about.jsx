import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/pages_globals.module.css'
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default function About() {

  return (
    <div>
      <Head>
        <title>NEKOO&#xFF5C;About</title>
      </Head>

      <div>
        <div className={styles.page_title}>
          <SvgLoader className={styles.title_parts} width="5%" height="100%" path="assets/pages/title_sideparts.svg"></SvgLoader>
          <p>
            <span className={styles.title_1}>A</span>BOUT
          </p>
        </div>
        <div id="page" className={styles.page_contents}>

          <div className={styles.page_contents_01}>
            <div className={styles.page_contents_title}>
              <span>Self Introduction</span>
            </div>
            <div className={styles.page_contents_text}>
              <span>I'm takuma-ru</span>
            </div>
          </div>

          <div className={styles.page_contents_01}>
            <div className={styles.page_contents_title}>
              <span>skill</span>
            </div>
            <div className={styles.page_contents_text}>
              <span>Next.js</span>
            </div>
          </div>

          <div className={styles.page_contents_01}>
            <div className={styles.page_contents_title}>
              <span>who</span>
            </div>
            <div className={styles.page_contents_text}>
              <span>takuma-ru</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
      `}</style>

    </div>
  )
}