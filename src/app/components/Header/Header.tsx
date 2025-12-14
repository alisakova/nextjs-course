import styles from './header.module.css'
import Link from 'next/link'
import { NavLink } from '../NavLink'

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

export const Header = () => {
  return (
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
  )
}
