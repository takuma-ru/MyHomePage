import Head from 'next/head'
import { SvgLoader, SvgProxy } from 'react-svgmt';
import style from '../styles/About.module.css'


export default function About() {

  return (
    <div>
      <Head>
        <title>NEKOO - About</title>
      </Head>
      <div>
        about
        <SvgLoader className={style.item_hex_outline_sample} width="100" height="100" path="/assets/item_hex_outline.svg"></SvgLoader>
      </div>
    </div>
  )
}