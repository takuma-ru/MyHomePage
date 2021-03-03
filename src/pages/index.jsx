import {useState} from "react"
import Link from 'next/link'
import Head from 'next/head'
import { SvgLoader, SvgProxy } from 'react-svgmt';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [hover_num, setHover_num] = useState(4);
  const [hover_center, setHover_center] = useState(0);


  var item_data = [
    {title: "ABOUT", url:"/about", text: "自己紹介<br>スキル" },
    {title: "GAME", url:"/game", text: "作ったゲーム" },
    {title: "APP", url:"/my_app", text: "作ったアプリ" },
    {title: "CONTACT", url:"/contact", text: "連絡先" },
    {title: "WELCOME", url:"/", text: "左右にある六角形にカーソルを合わせてみてください。" },
  ];

  return (
    <div>
      <Head>
        <title>NEKOO｜Home</title>
      </Head>
      <div className={styles.center_hex}>
        <SvgLoader path="/assets/center_hex.svg">
        <SvgLoader className={styles.center_hex_outline} path="/assets/center_hex_outline.svg" />
        <SvgLoader className={styles.center_hover + ' ' + hover_center} path="/assets/center_hover.svg" />
          <div
            className={styles.center_hex_title}
            dangerouslySetInnerHTML={{ __html: item_data[hover_num].title }}
          ></div>
          <div className={styles.center_hex_text}>
            <p dangerouslySetInnerHTML={{ __html: item_data[hover_num].text }}></p>
          </div>
        </SvgLoader>
      </div>

      {item_data.map((data, i) => {
        if(i > 3){
          return(null)
        }
        return (
          <Link key={i} href={data.url}>
            <div
              onMouseEnter={() => {
                var hover_center
                switch(i){
                  case 0:
                    hover_center = styles.center_hover_0
                    break;
                  case 1:
                    hover_center = styles.center_hover_1
                    break;
                  case 2:
                    hover_center = styles.center_hover_2
                    break;
                  case 3:
                    hover_center = styles.center_hover_3
                    break;
                }
                setHover_num(i)
                setHover_center(hover_center)
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
                    {data.title}
                  </div>
                  <div className={styles.item_hex_text}>
                    - Click to Read more -
                  </div>
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
