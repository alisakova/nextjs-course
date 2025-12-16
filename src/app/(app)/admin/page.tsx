'use client'

import { UserContext } from '@/providers/userProvider'
import { use } from 'react'
import { redirect } from 'next/navigation'

const AdminPage = () => {
  const { user } = use(UserContext)

  if (!user?.isAdmin) {
    redirect('/403')
  }

  return <div>Страница администратора</div>
}

export default AdminPage
