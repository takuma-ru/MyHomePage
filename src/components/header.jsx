import header from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={header.header}>
      <div className={header.title}>HEADER</div>
      <div className={header.divider}></div>
    </div>
  )
}
