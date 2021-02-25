import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/pages_globals.module.css'
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default function About() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      console.log(position)
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

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
          <SvgLoader className={styles.title_hex} width="" height="70%" path="/assets/item_hex_outline.svg">
            <span>誰？</span>
          </SvgLoader>
        </div>
        <div className={styles.page_contents_text_l}>
          <span>本文</span>
        </div>

        <div className={styles.page_contents_text_r}>
          <span>本文</span>
        </div>
        <div className={styles.page_contents_title_r + ' page_contents_title_r_scroll_1'}>
          <SvgLoader className={styles.title_hex} width="" height="70%" path="/assets/item_hex_outline.svg">
            <span>何できるの？</span>
          </SvgLoader>
        </div>

        <div className={styles.page_contents_title_l + ' page_contents_title_l_scroll_1'}>
          <SvgLoader className={styles.title_hex} width="" height="70%" path="/assets/item_hex_outline.svg">
            <span>誰？</span>
          </SvgLoader>
        </div>
        <div className={styles.page_contents_text_l}>
          <span>本文</span>
        </div>
      </div>

      <style jsx>{`
        .page_contents_title_l_scroll_1 {
          transform: translate(${scrollPosition - 1700 < 0 ? scrollPosition - 1700 : 0}px, 0)
        }
        .page_contents_title_r_scroll_1 {
          transform: translate(${scrollPosition - 890 < 0 ? 890 - scrollPosition : 0}px, 0)
        }
      `}</style>

    </div>
  )
}