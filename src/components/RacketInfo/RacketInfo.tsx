'use client'

import { RacketImage } from '../RacketImage'
import styles from './racketInfo.module.css'
import { Racket } from '@/types/racket'
import { UserContext } from '@/providers/user'
import { use } from 'react'
import { useHydrateFavorite, useIsFavoriteById } from '@/providers/favorite/hooks'
import { ToggleFavoriteButton } from '@/components/ToggleFavoriteButton'

interface RacketInfoProps {
  racket: Racket
}

export const RacketInfo = ({ racket }: RacketInfoProps) => {
  const { isAuthorized } = use(UserContext)
  const { id, name, imageUrl, description, brand, price, userData } = racket

  useHydrateFavorite({ id, isFavoriteInitial: Boolean(userData?.isFavorite) })

  const isFavorite = useIsFavoriteById({ id, isFavoriteInitial: Boolean(userData?.isFavorite) })
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <span className={styles.brandName}>{brand.name}</span>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>

      <RacketImage className={styles.image} src={imageUrl} alt={name} />

      <div className={styles.info}>
        <p className={styles.price}>€{price}</p>

        {isAuthorized && <ToggleFavoriteButton isFavorite={isFavorite} racketId={id} />}
      </div>
    </div>
  )
}
