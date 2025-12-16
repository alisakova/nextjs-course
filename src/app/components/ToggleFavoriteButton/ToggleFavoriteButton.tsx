'use client'

import { BASE_API_URL } from '../../../constants/api'
import { useOptimistic, useState, useTransition } from 'react'
import { useIsFavoriteById, useSetIsFavorite } from '../../../providers/favorite/hooks'

interface HandleToggleFavoriteProps {
  isFavorite: boolean
  racketId: number
}

const handleToggleFavorite = async ({ isFavorite, racketId }: HandleToggleFavoriteProps) => {
  const url = `${BASE_API_URL}/product/${racketId}/favorite`

  return isFavorite
    ? fetch(url, { credentials: 'include', method: 'DELETE' })
    : fetch(url, {
        credentials: 'include',
        method: 'POST',
      })
}

interface ToggleFavoriteButtonProps {
  isFavorite: boolean
  racketId: number
}

// export const ToggleFavoriteButton = ({ isFavorite, racketId }: ToggleFavoriteButtonProps) => {
//   const [isPending, startTransition] = useTransition()
//   // const [isFavoriteLocal, setIsFavoriteLocal] = useState<boolean>(isFavorite)
//   const [isFavoriteOptimistic, setIsFavoriteOptimistic] = useOptimistic<boolean>(isFavorite, state => !state)
//
//   const handleClick = () => {
//     startTransition(async () => {
//       await handleToggleFavorite({ isFavorite, racketId })
//       setIsFavoriteLocal(!isFavorite)
//     })
//   }
//
//   const handleClick = () => {
//     startTransition(async () => {
//       setIsFavoriteOptimistic(!isFavoriteOptimistic)
//       await handleToggleFavorite({ isFavorite, racketId })
//     })
//   }
//
//   return (
//     <button disabled={isPending} onClick={handleClick}>
//       {/*{isFavoriteLocal ? 'Удалить из избранного' : 'Добавить в избранное'}*/}
//       {isFavoriteOptimistic ? 'Удалить из избранного' : 'Добавить в избранное'}
//     </button>
//   )
// }

export const ToggleFavoriteButton = ({ isFavorite, racketId }: ToggleFavoriteButtonProps) => {
  const [isPending, startTransition] = useTransition()
  const isFavoriteLocal = useIsFavoriteById({ isFavoriteInitial: isFavorite, id: racketId })
  const setIsFavorite = useSetIsFavorite()

  const handleClick = () => {
    startTransition(async () => {
      await handleToggleFavorite({ isFavorite: isFavoriteLocal, racketId })
      setIsFavorite({ id: racketId, isFavorite: !isFavoriteLocal })
    })
  }

  return (
    <button disabled={isPending} onClick={handleClick}>
      {isFavoriteLocal ? 'Удалить из избранного' : 'Добавить в избранное'}
    </button>
  )
}
