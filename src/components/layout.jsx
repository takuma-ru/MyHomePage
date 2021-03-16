import styles from '../styles/_app.module.css'
import Header from '../components/header'
import { SvgLoader, SvgProxy } from 'react-svgmt';

function Layout({children}) {
  return(
    <div className={styles.main_container}>
      <Header />
      <div className={styles.main_contents}>
        {children}
        <SvgLoader className={styles.parts_1} path="/assets/background/background_parts.svg" />
        <SvgLoader className={styles.parts_2} path="/assets/background/background_parts.svg" />
      </div>
      {/*<span className={styles.copyright}>&copy; takuma-ru 2021.</span>*/}
    </div>
  )
}

export default Layout