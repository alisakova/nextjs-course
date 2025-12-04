'use client'

import styles from './navLink.module.css'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps extends Pick<LinkProps, 'href'> {
  children: string
}

export const NavLink = ({ children, href }: NavLinkProps) => {
  const pathname = usePathname()

  return (
    <Link href={href} className={`${styles.link} ${pathname === href ? styles.isActive : ''}`}>
      {children}
    </Link>
  )
}
