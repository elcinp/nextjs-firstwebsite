import Link from 'next/link'
import styles from './nav.module.css'

function Navbar() {
  return (
    <div>
      <nav>
        <Link href="/">
          <a className={styles.link}>Ana Sayfa</a>
        </Link>
        <Link href="/about">
          <a style={{color:'blue'}}>Hakkımda</a>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
