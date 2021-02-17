import Link from 'next/link'
import Head from 'next/head'
import { SvgLoader, SvgProxy } from 'react-svgmt';
import styles from '../styles/Home.module.css'

export default function Home() {

  var data = [
    { num: "1", title: "About", url:"/about", text: "About_text" },
    { num: "2", title: "Game", url:"/game", text: "Game_text" },
    { num: "3", title: "App", url:"/my_app", text: "App_text" },
    { num: "4", title: "Contact", url:"/contact", text: "Contact_text" },
  ];

  return (
    <div>
      <Head>
        <title>NEKOO - Home</title>
      </Head>
      <SvgLoader className={styles.center_hex} path="/assets/center_hex.svg">
        <div className={styles.center_hex_title}>
          title
        </div>
        <div className={styles.center_hex_text}>
          <p>center_hex_text</p>
          <p>現在制作中</p>
        </div>
      </SvgLoader>

      {data.map((data) => {
        return (
          <Link href={data.url}>
            <div className={styles.item_hex + ' ' + `item_hex_${data.num}`}>
            <SvgLoader className={styles.item_hex_hover} path="/assets/item_hex_hover.svg"></SvgLoader>
              <SvgLoader className={styles.item_hex_img} path="/assets/item_hex_fill.svg">
                <SvgLoader id="outline" className={styles.item_hex_outline} path="/assets/item_hex_outline.svg">
                  <div className={styles.item_hex_title}>
                    {data.title}
                  </div>
                  <div className={styles.item_hex_text}>
                    <p>{data.text}</p>
                    <p>現在制作中</p>
                  </div>
                </SvgLoader>
              </SvgLoader>
            </div>
          </Link>
        )
      })}

    <style jsx>{`
      .item_hex_1 {
        top: 10%;
        left: 10%;
        transform: translate(-10%, -10%);
      }

      .item_hex_2 {
        top: 90%;
        left: 10%;
        transform: translate(-10%, -90%);
      }

      .item_hex_3 {
        top: 10%;
        left: 90%;
        transform: translate(-80%, -10%);
      }

      .item_hex_4 {
        top: 90%;
        left: 90%;
        transform: translate(-80%, -90%);
      }
    `}</style>

    </div>
  )
}
