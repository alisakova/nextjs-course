'use client'

import { useActionState, useEffect } from 'react'
import { loginActions } from './login-action'
import { AuthState } from '@/types/authState'
import { Input } from '@/components/Input'
import { Field } from '@/components/Field'
import { Form } from '@/components/Form'
import { ErrorMessage } from '@/components/ErrorMessage'
import { INITIAL_AUTH_STATE } from '@/constants/auth'

const LoginPage = () => {
  const [{ error, redirectTo }, formAction, isPending] = useActionState<AuthState, FormData>(
    loginActions,
    INITIAL_AUTH_STATE,
  )

  useEffect(() => {
    if (redirectTo) {
      // После логина страница перезагружается, чтобы отобразилась актуальная информация для пользователя
      location.assign(redirectTo)
    }
  }, [redirectTo])

  return (
    <Form action={formAction}>
      <Field label="Логин" htmlFor="login">
        <Input id="login" name="login" type="text" required />
      </Field>
      <Field label="Пароль" htmlFor="password">
        <Input id="password" name="password" type="password" required />
      </Field>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <button disabled={isPending}>Войти</button>
    </Form>
  )
}

export default LoginPage
