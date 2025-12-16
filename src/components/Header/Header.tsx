'use client'

import styles from './header.module.css'
import Link from 'next/link'
import { NavLink } from '../NavLink'
import { LogoutButton } from '../LogoutButton'
import { UserContext } from '../../providers/userProvider'
import { use } from 'react'

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
  const { isAuthorized } = use(UserContext)

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.appName}>
        Tennis store
      </Link>
      <div className={styles.actions}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map(({ title, href }) => (
              <NavLink key={href} href={href}>
                {title}
              </NavLink>
            ))}
          </ul>
        </nav>
        {isAuthorized ? (
          <LogoutButton />
        ) : (
          <>
            <NavLink href="/login">Войти</NavLink>
            <NavLink href="/sign-up">Регистрация</NavLink>
          </>
        )}
      </div>
    </header>
  )
}
