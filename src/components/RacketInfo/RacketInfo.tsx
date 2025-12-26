'use client'

import { RacketImage } from '../RacketImage'
import styles from './racketInfo.module.css'
import { Racket } from '@/types/racket'
import { UserContext } from '../../providers/userProvider'
import { use } from 'react'

interface RacketInfoProps {
  racket: Racket
}

export const RacketInfo = ({ racket }: RacketInfoProps) => {
  const { isAuthorized } = use(UserContext)
  const { name, imageUrl, description, brand, price, userData } = racket

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

        {isAuthorized && <button>{userData?.isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}</button>}
      </div>
    </div>
  )
}
