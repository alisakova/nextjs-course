import { BASE_API_URL } from '@/constants/api'
import { Racket } from '@/types/racket'
import type { Response } from './types'
import { TOP_10_RACKETS } from '@/constants/cacheTags'
import { cookies } from 'next/headers'

export const getTop10 = async (): Promise<Response<Racket[]>> => {
  const cookieStore = await cookies()

  const result = await fetch(`${BASE_API_URL}/top-10`, {
    next: { tags: [TOP_10_RACKETS] },
    headers: { Cookie: cookieStore.toString() },
  })

  if (result.status === 404) {
    return { isError: false, data: undefined }
  }

  if (!result.ok) {
    return { isError: true, data: undefined }
  }

  const data: Racket[] = await result.json()

  return { isError: false, data }
}
