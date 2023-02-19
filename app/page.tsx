import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>

      <div className={styles.center}>
        <h1 style={{fontFamily: "arial"}}>ADI MURIANTO</h1>
      </div>

      <div className={styles.grid}>
      </div>
    </main>
  )
}
