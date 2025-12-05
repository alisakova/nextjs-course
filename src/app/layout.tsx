import './global.css'

import styles from './layout.module.css'
import { NavLink } from './_components/NavLink'
import { Metadata } from 'next'
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Tennis store',
}

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <html>
      <body>
        <header className={styles.header}>
          <Link href="/" className={styles.appName}>Tennis store</Link>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <NavLink href="/">Главная</NavLink>
              </li>
              <li>
                <NavLink href="/rackets">Ракетки</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          <p className={styles.appName}>Tennis store</p>
          <p className={styles.copyRightText}>&copy; 2025 Tennis Store. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout
