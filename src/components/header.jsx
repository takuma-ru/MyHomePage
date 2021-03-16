import Link from 'next/link'
import { useRouter } from 'next/router'
import header from '../styles/Header.module.css'

export default function Header() {
  const router = useRouter()

  const item_data = [
    {title: `ABOUT`, path: '/about', css: header.left_1},
    {title: `GAME`, path: '/game', css: header.left_2},
    {title: `APP`, path: '/my_app', css: header.right_1},
    {title: `CONTACT`, path: '/contact', css: header.right_2}
  ]

  var wherepath = (path) => {
    if(router.pathname == path){
      return (header.header_item_select)
    }else{
      return null
    }
  }

  return (
    <div className={header.header}>

      <div className={header.title}>
        <Link href="/">
          <a>
            <img src="/assets/logo/logo.png"/>
          </a>
        </Link>
      </div>

      {item_data.map((data, i) => {
        return (
          <div key={i} className={header.header_item + ' ' + data.css}>
            <div className={wherepath(data.path)}>
            <Link href={data.path}>
              <a className={header.underline}>
                <span dangerouslySetInnerHTML={{ __html: data.title }}></span>
              </a>
            </Link>
            </div>
          </div>
        )
      })}

      <style jsx>{`
        .color {
          color: #f5f8f8;
          font-size: larger;
        }
      `}</style>

    </div>
  )
}
