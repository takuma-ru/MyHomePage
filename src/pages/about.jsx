import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/pages_globals.module.css'
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default function About() {
  var windowheight

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const page = document.getElementById('page');
      const position = window.pageYOffset + document.documentElement.clientHeight;
      windowheight = page.offsetHeight
      setScrollPosition(position / windowheight);
      console.log('position: ' + position + ' height: ' + windowheight + ' p/w: ' + position / windowheight)
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

      <div>
        <div className={styles.page_title}>
          <SvgLoader width="" height="45%" className={styles.page_point_1} path="/assets/point.svg" />
            ABOUT
          <SvgLoader width="" height="45%" className={styles.page_point_2} path="/assets/point.svg" />
        </div>
        <div id="page" className={styles.page_contents}>
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
      </div>

      <style jsx>{`
        .page_contents_title_l_scroll_1 {
          transform: translate(${scrollPosition < 1 ? (scrollPosition - 1) * 1000 : 0}px, 0)
        }
        .page_contents_title_r_scroll_1 {
          transform: translate(${scrollPosition < 0.8 ? (0.8 - scrollPosition) * 1000 : 0}px, 0)
        }
      `}</style>

    </div>
  )
}