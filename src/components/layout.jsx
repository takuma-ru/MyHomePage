import styles from '../styles/_app.module.css'
import Header from '../components/header'
import { SvgLoader, SvgProxy } from 'react-svgmt';

function Layout({children}) {
  return(
    <div className={styles.main_container}>
      <Header />
      <div className={styles.main_contents}>
        {children}
        <SvgLoader className={styles.parts_1} path="/assets/background_parts.svg" />
        <SvgLoader className={styles.parts_2} path="/assets/background_parts.svg" />
      </div>
    </div>
  )
}

export default Layout