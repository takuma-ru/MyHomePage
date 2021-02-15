import styles from '../styles/_app.module.css'
import Header from '../components/header'

function Layout({children}) {
  return(
    <div className={styles.main_container}>
        <Header />
        <div className={styles.main_contents}>
          {children}
        </div>
    </div>
  )
}

export default Layout