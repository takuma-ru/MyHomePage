import {useState} from "react"
import Link from 'next/link'
import Head from 'next/head'
import { SvgLoader, SvgProxy } from 'react-svgmt';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [hover_num, setHover_num] = useState(0);

  var item_data = [
    {title: "ABOUT", url:"/about", text: "About_text" },
    {title: "GAME", url:"/game", text: "Game_text" },
    {title: "APP", url:"/my_app", text: "App_text" },
    {title: "CONTACT", url:"/contact", text: "Contact_text" },
  ];


  return (
    <div>
      <Head>
        <title>NEKOO - Home</title>
      </Head>
      <SvgLoader className={styles.center_hex} path="/assets/center_hex.svg">
        <div className={styles.center_hex_title}>
          {item_data[hover_num].title}
        </div>
        <div className={styles.center_hex_text}>
          <p>{item_data[hover_num].text}</p>
          <p>現在制作中</p>
        </div>
      </SvgLoader>

      {item_data.map((data, i) => {
        return (
          <Link key={i} href={data.url}>
            <div
              onMouseEnter={() => {
                setHover_num(i)
              }}
              onMouseLeave={() => {
                setHover_num(i)
              }}
              className={styles.item_hex + ' ' + `item_hex_${i}`}
            >
            <SvgLoader className={styles.item_hex_hover} path="/assets/item_hex_hover.svg"></SvgLoader>
              <SvgLoader className={styles.item_hex_outline} path="/assets/item_hex_outline.svg">
                <SvgLoader className={styles.item_hex_img} path="/assets/item_hex_fill.svg">
                  <div className={styles.item_hex_title}>
                    <div className={styles.item_hex_divider + ' ' + styles.divider_top}></div>
                    {data.title}
                    <div className={styles.item_hex_divider + ' ' + styles.divider_bottom}></div>
                  </div>
                  {/*<div className={styles.item_hex_text}>
                    <p>{data.text}</p>
                    <p>現在制作中</p>
                  </div>*/}
                </SvgLoader>
              </SvgLoader>
            </div>
          </Link>
        )
      })}

    <style jsx>{`
      .item_hex_0 {
        top: 10%;
        left: 10%;
        transform: translate(-10%, -10%);
      }

      .item_hex_1 {
        top: 90%;
        left: 10%;
        transform: translate(-10%, -90%);
      }

      .item_hex_2 {
        top: 10%;
        left: 90%;
        transform: translate(-90%, -10%);
      }

      .item_hex_3 {
        top: 90%;
        left: 90%;
        transform: translate(-90%, -90%);
      }
    `}</style>

    </div>
  )
}
