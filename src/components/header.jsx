import header from '../styles/Header.module.css'

export default function Header() {
  return (
    <div className={header.header}>
      <div className={header.header_item + ' ' + header.left_1}>left-1</div>
      <div className={header.header_item + ' ' + header.left_2}>left-2</div>

      <div className={header.title}>HEADER</div>

      <div className={header.header_item + ' ' + header.right_1}>right-1</div>
      <div className={header.header_item + ' ' + header.right_2}>right-2</div>

      <div className={header.divider}></div>
    </div>
  )
}
