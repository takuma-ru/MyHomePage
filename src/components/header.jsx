import Link from 'next/link'
import header from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={header.header}>
      <div className={header.header_item + ' ' + header.left_1}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div className={header.header_item + ' ' + header.left_2}>
        <Link href="/game">
          <a>Game</a>
        </Link>
      </div>

      <div className={header.title}>
        <Link href="/">
          <a><div><img src="/assets/logo.png"/></div></a>
        </Link>
      </div>

      <div className={header.header_item + ' ' + header.right_1}>
        <Link href="/my_app">
          <a>App</a>
        </Link>
      </div>
      <div className={header.header_item + ' ' + header.right_2}>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>

      <div className={header.divider}></div>
    </div>
  )
}
