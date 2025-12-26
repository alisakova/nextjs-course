'use client'

import { User } from '@/types/user'
import { createContext, PropsWithChildren } from 'react'

interface UserContextType {
  user: User | null
  isAuthorized: boolean
}

export const UserContext = createContext<UserContextType>({
  user: null,
  isAuthorized: false,
})

interface UserProviderProps extends PropsWithChildren {
  user: User | null
}

export const UserProvider = ({ user, children }: UserProviderProps) => {
  return <UserContext value={{ user, isAuthorized: Boolean(user) }}>{children}</UserContext>
}
