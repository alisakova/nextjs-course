'use client'

import { BASE_API_URL } from '@/constants/api'
import { useTransition } from 'react'
import styles from './logoutButton.module.css'

const handleLogout = async () => {
  await fetch(`${BASE_API_URL}/auth/logout`, { method: 'DELETE', credentials: 'include' })

  location.assign('/')
}

export const LogoutButton = () => {
  const [isPending, startTransition] = useTransition()

  return (
    <button className={styles.logoutButton} disabled={isPending} onClick={() => startTransition(handleLogout)}>
      Выйти
    </button>
  )
}
