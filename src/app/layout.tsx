import './global.css'

import styles from './layout.module.css'
import { NavLink } from './components/NavLink'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tennis store',
}

const navLinks = [
  {
    title: 'Главная',
    href: '/',
  },
  {
    title: 'Ракетки',
    href: '/rackets',
  },
  {
    title: 'Топ 10',
    href: '/top-10',
  },
] as const

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <html>
      <body>
        <header className={styles.header}>
          <Link href="/" className={styles.appName}>
            Tennis store
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navLinks.map(({ title, href }) => (
                <NavLink key={href} href={href}>
                  {title}
                </NavLink>
              ))}
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
