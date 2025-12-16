'use client'

import { useActionState, useEffect } from 'react'
import { loginActions } from './login-action'
import { LoginState } from './types'

const INITIAL_STATE = {
  error: undefined,
  redirectTo: undefined,
}

const LoginPage = () => {
  const [state, formAction, isPending] = useActionState<LoginState, FormData>(loginActions, INITIAL_STATE)

  const { error, redirectTo } = state

  useEffect(() => {
    if (redirectTo) {
      // После логина страница перезагружается, чтобы отобразилась актуальная информация для пользователя
      location.assign(redirectTo)
    }
  }, [redirectTo])

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="login">Логин</label>
        <input id="login" name="login" type="text" required />
      </div>

      <div>
        <label htmlFor="password">Пароль</label>
        <input id="password" name="password" type="password" required />
      </div>

      {error && <div>{error}</div>}

      <button disabled={isPending}>Войти</button>
    </form>
  )
}

export default LoginPage
