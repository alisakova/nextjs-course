'use client'

import { BASE_API_URL } from '@/constants/api'
import { useTransition } from 'react'
import { useIsFavoriteById, useSetIsFavorite } from '@/providers/favorite/hooks'
import FavoriteIcon from './favoriteIcon.svg'
import styles from './toggleFavoriteButton.module.css'
import classNames from 'classnames'

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
  className?: string
}

export const ToggleFavoriteButton = ({ isFavorite, racketId, className }: ToggleFavoriteButtonProps) => {
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
    <button
      className={classNames(styles.favoriteButton, className, {
        [styles.isFavorite]: isFavoriteLocal,
      })}
      disabled={isPending}
      onClick={handleClick}
    >
      <FavoriteIcon />
    </button>
  )
}
