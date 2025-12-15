import { BASE_API_URL } from './constans'
import { Racket } from '../types/racket'
import type { Response } from './types'

export const getTop10 = async (): Promise<Response<Racket[]>> => {
  const result = await fetch(`${BASE_API_URL}/top-10`, { next: { tags: ['getTop10Rackets'] } })

  if (result.status === 404) {
    return { isError: false, data: undefined }
  }

  if (!result.ok) {
    return { isError: true, data: undefined }
  }

  const data: Racket[] = await result.json()

  return { isError: false, data }
}
