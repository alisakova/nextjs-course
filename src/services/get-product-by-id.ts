import { BASE_API_URL } from '@/constants/api'
import { Racket } from '@/types/racket'
import type { Response } from './types'
import { cookies } from 'next/headers'

type Params = {
  id: string
}

export const getProductById = async ({ id }: Params): Promise<Response<Racket>> => {
  const cookieStore = await cookies()

  const result = await fetch(`${BASE_API_URL}/product/${id}`, { headers: { Cookie: cookieStore.toString() } })

  if (result.status === 404) {
    return { isError: false, data: undefined }
  }

  if (!result.ok) {
    return { isError: true, data: undefined }
  }

  const data: { product: Racket } = await result.json()

  return { isError: false, data: data.product }
}
