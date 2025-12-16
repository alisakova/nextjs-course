'use server'

import { LoginState } from './types'
import { BASE_API_URL } from '../../constants/api'
import { cookies } from 'next/headers'
import { parseSetCookie } from 'next/dist/compiled/@edge-runtime/cookies'

export const loginActions = async (state: LoginState, formData: FormData) => {
  const login = formData.get('login')?.toString() ?? ''
  const password = formData.get('password')?.toString() ?? ''

  const res = await fetch(`${BASE_API_URL}/auth/login`, {
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({ login, password }),
    headers: { 'Content-Type': 'application/json' },
  })

  if (res.status !== 200) {
    return { error: 'Неверный пароль или логин' }
  }

  const cookieStore = await cookies()
  const resultCookieHeader = res.headers.getSetCookie()

  if (resultCookieHeader) {
    const parsed = parseSetCookie(resultCookieHeader)

    for (const cookie of parsed) {
      cookieStore.set(cookie.name, cookie.value, cookie.options)
    }
  }

  return { error: '', redirectTo: '/' }
}
