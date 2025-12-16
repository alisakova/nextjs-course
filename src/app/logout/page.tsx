'use client'

import { BASE_API_URL } from '../../constants/api'
import { useTransition } from 'react'

const handleLogout = async () => {
  await fetch(`${BASE_API_URL}/auth/logout`, { method: 'DELETE', credentials: 'include' })

  location.assign('/')
}

// TODO: сделать кнопкой в хэдере
const LogoutPage = () => {
  const [isPending, startTransition] = useTransition()

  return (
    <div>
      <button disabled={isPending} onClick={() => startTransition(handleLogout)}>
        Выйти из аккаунта
      </button>
    </div>
  )
}

export default LogoutPage
