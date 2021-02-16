import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  var data = [
    { num: "1", title: "About", url:"/about", text: "About_text" },
    { num: "2", title: "Game", url:"/game", text: "Game_text" },
    { num: "3", title: "App", url:"/my_app", text: "About_text" },
    { num: "4", title: "Contact", url:"/contact", text: "Game_text" },
  ];

  return (
    <div>
      <Head>
        <title>NEKOO - Home</title>
      </Head>
      <div className={styles.center_hex}>
        <div className={styles.center_hex_title}>
          title
        </div>
        <div className={styles.center_hex_text}>
          <p>center_hex_text</p>
          <p>現在制作中</p>
        </div>
      </div>

      {data.map((data) => {
        return (
          <Link href={data.url}>
            <div className={styles.item_hex + ' ' + `item_hex_${data.num}`}>
              <div className={styles.item_hex_title}>
                {data.title}
              </div>
              <div className={styles.item_hex_text}>
                <p>{data.text}</p>
                <p>現在制作中</p>
              </div>
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
