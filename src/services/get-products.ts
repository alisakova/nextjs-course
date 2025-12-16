import { BASE_API_URL } from '../constants/api'
import { Racket } from '../types/racket'
import type { Response } from './types'

type Params = {
  limit?: number
  page?: number
}

export const getProducts = async ({ limit = 10, page = 1 }: Params): Promise<Response<Racket[]>> => {
  const result = await fetch(`${BASE_API_URL}/products?limit=${limit}&page=${page}`)

  if (result.status === 404) {
    return { isError: false, data: undefined }
  }

  if (!result.ok) {
    return { isError: true, data: undefined }
  }

  const data: Racket[] = await result.json()

  return { isError: false, data }
}
